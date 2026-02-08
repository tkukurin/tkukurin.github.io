---
title: "Making Sense of Sensory Input; Apperception code"
tags:
  - marginalia
last_modified_at: 2021-06-19T23:42:00+01:00
published: true
---

[Apperception Engine](https://deepmind.com/research/publications/Evaluating-the-Apperception-Engine)
and [Making Sense of Sensory Input](https://deepmind.com/research/publications/Making-sense-of-sensory-input).
Ref. to [previous post]({% post_url 2021-02-14-learning-explanatory-rules %}).

*Apperception*: assimilating information into a coherent integrated theory.
Escapes traditional ML systems, but Richard Evans is working on some curious
ideas in logic programming.

The idea is to generate a *unified* theory from sensory observations:
1. *Spatial unity*: Objects are united in space by being connected via chains of
   relations.
2. *Conceptual unity*: Predicates are united by constraints
3. *Static unity*: Ground atoms are united into states by jointly respecting
   constraints and static rules
4. *Temporal unity*: states are united in a sequence by causal rules

Only the first 3 need to be explicitly checked (4 follows by def'n).

A theory $$\theta$$ *makes sense* of a sequence $$S$$ if
$$S\subseteq\tau(\theta)$$, where $$\tau$$ is the theory-generated sequence.
Given a sequence, suitable type signature and constraints $$(S, \phi, C)$$, the
task of a discrete apperception task is to ﬁnd the lowest cost theory
$$\theta = (\phi', I, R, C')$$ s.t. $$\phi'$$ extends $$\phi$$,
$$C \subseteq C'$$, and $$\theta$$ *makes sense* of $$S$$.
Cost of a theory is just its length analog (can be sth. else, too).

Rules are implemented in Datalog.


## [Source on GitHub](https://github.com/RichardEvans/apperception)

The `code/` itself is a bit strange; Haskell code generates [logic programs](https://sourcegraph.com/github.com/tkukurin/apperception@2d38e5a3deeded7347620628da5440dc439e9207/-/blob/code/Solve.hs?L761)
and [bash scripts](https://sourcegraph.com/github.com/tkukurin/apperception@2d38e5a3deeded7347620628da5440dc439e9207/-/blob/code/Music.hs?L490)
in various places.
I guess the idea is to [parametrize template generation](https://sourcegraph.com/github.com/tkukurin/apperception@2d38e5a3deeded7347620628da5440dc439e9207/-/blob/code/Solve.hs?L790),
though in a lot of places the code just dumps non-parametrized strings.

Various `sh` scripts under `scripts/` are calling `code/solve`.
`Solve.hs` is self-explanatory, as it runs tasks from the [main method](https://sourcegraph.com/github.com/tkukurin/apperception@master/-/blob/code/Solve.hs?L27).
As per [the Apperception paper](https://arxiv.org/pdf/2007.05367.pdf), there are
different tasks you can run:
* Elementary Cellular Automata (ECA), 1D automaton
* Drum rhythms and nursery tunes
* Multi-modal binding
* Occlusion

The data for the above can be found in `data/`, and is
coupled to rules expressed under `asp/` ([Answer-Set Programming](https://en.wikipedia.org/wiki/Answer_set_programming)).
ASP is a declarative modeling language: some solver finds plausible answer
sets (potentially under some *weak constraints* - i.e. cost) in a search space.
Usually leverages some extension of [DPLL](https://en.wikipedia.org/wiki/DPLL_algorithm).
Simple example under e.g. `music_loudness.lp`:
```datalog
% Concepts exist
is_given_concept(p_min_loudness).
is_given_concept(p_max_loudness).
is_given_concept(p_succ).
is_concept(p_min_loudness).
is_concept(p_max_loudness).
is_concept(p_succ).

% Some variables can be represented as ...
permanent(isa(t_loudness, obj_loudness_0)).
permanent(isa(t_loudness, obj_loudness_1)).
permanent(isa(t_loudness, obj_loudness_2)).
permanent(isa(p_min_loudness, obj_loudness_0)).
permanent(isa(p_max_loudness, obj_loudness_2)).

% Loudness always advances in order: 0->1->2
permanent(isa2(p_succ, obj_loudness_0, obj_loudness_1)).
permanent(isa2(p_succ, obj_loudness_1, obj_loudness_2)).
```

Solver they use is [clingo](https://potassco.org/clingo/),
cf. [`Solve.hs::do_solve`](https://sourcegraph.com/github.com/tkukurin/apperception@2d38e5a3deeded7347620628da5440dc439e9207/-/blob/code/Solve.hs?L759:13).
Given an ASP program with 1st order variables, Clingo grounds the variables and
then solves this program via [clasp](https://potassco.org/clasp/).

