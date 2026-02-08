---
title: "Algorithms for Causal Reasoning in Probability Trees"
tags:
  - marginalia
last_modified_at: 2020-11-11T22:02:00+01:00
published: true
---

Discrete Probability Trees (or Staged Tree Models) are one of the simplest models of causal generative processes, different from Causal Bayesian Networks (CBNs) and Structural Causal Models (SCMs).

A directed edge $$e=(h,t)$$ between two nodes in this graph is interpreted as the head being the cause of the tail.
Every node is a collection of statements.

Their implementation is quite simple, as most algorithms can be mapped almost 1:1 from the paper. Based on [Algorithms for Causal Reasoning in Probability Trees](https://arxiv.org/pdf/2010.12237.pdf).


```python
import dataclasses as dc
from collections import namedtuple
from typing import Iterable, Tuple
```

They represent PT nodes as $$n=(u,S,C)$$: unique identifier, list of statements (e.g. `W=rainy` and `X=0`) and a set of transitions.

> A (total) realization in the probability tree is a path from the root to a leaf, and its probability is obtained by multiplying the transition probabilities along the path; and a partial realization is any connected sub-path within a total realization.


```python
Stmt = namedtuple('Stmt', 'var val')

@dc.dataclass(frozen=True)
class Node:  # (u, S, C)
  class Children(list):
    pass

  id: int
  stmts: Iterable[Stmt] = dc.field(compare=False)
  childs: Children = dc.field(
    default_factory=list, compare=False)

  def __post_init__(self):
    childs = self.Children(self.childs)
    object.__setattr__(self, 'childs', childs)
```

Min-cut is a collection of nodes with **probabilities summing up to 1** (minimal set of nodes which determines whether an event occured).
The associated **critical set** determines whether an event won't occur (false set parents).


```python
NULL = frozenset()
MinCut = namedtuple('MinCut', 'T F', defaults=(NULL, NULL))
```

For a simple statement, its min-cut is the node containing that statement.


```python
def prop(n: Node, s: Stmt):
  for var, val in n.stmts:
    if var == s.var:
      return MinCut(
        # shitty pro-tip: impress people by showing you
        # can construct Python sets using literals
        T={n.id} if val == s.val else {*()},
        F={*()} if val == s.val else {n.id})
  if not n.childs:
    raise Exception('Cannot be resolved')
  T, F = set(), set()
  for pc, nc in n.childs:
    Tc, Fc = prop(nc, s)
    T, F = T|Tc, F|Fc
  return MinCut(T=T, F=F)
```

Standard conjunction/disjunction/negation.


```python
def and_(n: Node, d1: MinCut, d2: MinCut,
         found1=False, found2=False):
  if n.id in (d1.F|d2.F):
    return MinCut(F={n.id})
  if n.id in d1.T: found1 = True
  if n.id in d2.T: found2 = True
  if found1 and found2:
    return MinCut(T={n.id})
  T, F = set(), set()
  for pc, nc in n.childs:
    Tc, Fc = and_(nc, d1, d2, found1, found2)
    T, F = T|Tc, F|Fc
  return MinCut(T, F)

def not_(d: MinCut):
  # Just swap true and false sets.
  return MinCut(T=d.F, F=d.T)

def or_(n: Node, d1: MinCut, d2: MinCut):
  # De Morgan
  return not_(and_(n, not_(d1), not_(d2)))
```

Precedence relation takes min-cuts of its cause and effect.
Return all paths where cause precedes effect.


```python
def prec(n:Node, dc:MinCut, de:MinCut, is_cause_subtree=False) -> MinCut:
  '''A<B precedence relation.
  @param dc: cause
  @param de: effect
  @return min-cut for the event where precedence holds.
  '''
  if is_cause_subtree:
    if n.id in dc.T: return MinCut(T={n.id})
    if n.id in dc.F: return MinCut(F={n.id})
  else:
    # if cause does not preced current node
    # and current node is in the effect,
    # then this is not part of the mincut.
    if n.id in (de.T|dc.F|de.F):
      return MinCut(F={n.id})
    if n.id in dc.T:
      is_cause_subtree = True
  T, F = set(), set()
  for pc, nc in n.childs:
    Tc, Fc = prec(nc, dc, de, is_cause_subtree)
    T, F = T|Tc, F|Fc
  return MinCut(T, F)
```

Conditioning updates the tree after an event is revealed to be true.
For example, "What is the probability of recovery given that a patient has taken the treatment?"

$$P(R=1|T=1)$$

Algorithm just removes all probability mass from the false min cut in `d`, and normalizes probabilities across the rest of the tree.

![See](http://www.adaptiveagents.org/_media/wiki/see.png)


```python
def see(n: Node, d: MinCut) -> Node:
  '''P(A|B) :: proba of A, given B.
  @param n: reference proba tree
  @param d: observed event
  @return root of the new proba tree
  '''
  def _see(n: Node, d: MinCut, q: float):
    if n.id in d.T: return n, 1, q
    if n.id in d.F: return n, 0, 0
    D = set()
    sl, sp = 0, 0
    for pc, nc in n.childs:
      nc, lc, pc = _see(nc, d, pc*q)
      D |= {(nc,lc,pc)}
      sl += lc
      sp += pc
    C = norm(D, sl, sp)
    return Node(n.id, n.stmts, C), 1, sp
  return _see(n, d, 1.0)[0]
```

Intervening is the act of minimally changing the transition probabilities in order to bring about a desired event with probability one. For example, "What is the probability of having the disease given that I take the drug and observe a recovery?"

$$P(D=1|T\leftarrow1 \wedge R=1)$$

> depending on the critical set, the intervention could assign different values to the same random variables in separate branches of the tree, or in fact even manipulate different random variables in every branch (a context-dependent "recipe"), in order to bring about a desired effect.

![Do](http://www.adaptiveagents.org/_media/wiki/do.png)


```python
def do(n:Node, d:MinCut) -> Node:
  '''P(A|do(B)) :: proba of A, given B was made true.
  @param n: reference proba tree
  @param d: intervened event (do(B)); i.e. a set of variables
    we set to specific values via intervention.
  @return root of the new proba tree
  '''
  def _do(n: Node, d:MinCut):
    if n.id in d.T: return n, True
    if n.id in d.F: return n, False
    C = set()
    sl, sp = 0, 0
    for pc, nc in n.childs:
      nc, b = _do(nc, d)
      if b:
        C |= {(nc,1,pc)}
        sl += 1
        sp += 1
      else:
        C |= {(nc,0,pc)}
    C = norm(C, sl, sp)
    return Node(n.id, n.stmts, C), True
  return _do(n, d)[0]
```

A counterfactual is a statement about a *subjunctive* (possible or imagined) event that could've happened had the stochastic process taken a different course during its realization. Example (arrows mean we're imposing a value):

$$P(R_{T\leftarrow0}=1|T\leftarrow1;R=1)$$

In the real world, "I have taken the treatment and recovered."
What is the probability of "recovering," had "I not taken the treatment" instead?

![Counterfactual](http://www.adaptiveagents.org/_media/wiki/cf.png)


```python
def counterfact(n:Node, m:Node, d:MinCut) -> Node:
  '''P(Ac|B) :: proba of A given B and if C was made true instead.

  @param n: reference proba tree
  @param m: factual premise tree
  @param d: counterfactual event
  @return root of the new (counterfactual) proba tree
  '''
  def _counterfact(n:Node, m:Node, d:MinCut):
    if m.id in d.T: return n, True
    if m.id in d.F: return n, False
    is_critical_bifurcation = False
    C = set()
    for (pn, nc), (pm, mc) in zip(n.childs, m.childs):
      nn, b = _counterfact(nc, mc, d)
      if not b: is_critical_bifurcation = True
      C |= {(pm, nn)}
    if not is_critical_bifurcation:
      n = Node(m.id, m.stmt, C)
    return n, True
  return _counterfact(do(n, d), m, d)[0]
```

Normalize or assume some other measure (above - uniform) if total subtree probability is zero.


```python
def norm(
    D:Iterable[Tuple[Node,float,float]],
    sl:float, sp:float):
  if sp: return {(p/sp, n) for n,l,p in D}
  return {(l/sl, n) for n,l,p in D}
```

## Conclusion

> Unlike Pearl, who grounds the semantics of causal relations on the notion of interventions,
> Shafer considered causality as a side-effect entirely subsumed under conditional independenece.
> (...) Formalization of counterfactuals is unique to this work.

Future work could involve
* extending to 1st order logic,
* exploring links to temporal logic and probabilistic programming,
* a framework akin to do-calculus (can a causal effect be estimated from observation alone?).

