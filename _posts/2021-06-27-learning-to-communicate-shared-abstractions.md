---
title: "Learning to communicate about shared procedural abstractions"
tags:
  - cogsci
  - research
---

[Learning to communicate about shared procedural abstractions](https://rxdhawkins.files.wordpress.com/2021/05/caml_cogsci-1.pdf)
seems like another confirmation of learning being a form of compression.
Leans on [Convention formation in iterated reference games](https://cogsci.mindmodeling.org/2017/papers/0098/paper0098.pdf).
Humans use more efficient contextualized language to chunk useful concepts.
[GitHub repo](https://github.com/cogtoolslab/compositional-abstractions).


## Setup

98 humans paired up for a collaborative assembly task in 12 trials.
Given a target scene *architect* instructs (up to 100 chars/turn) *builder* how
to create that scene from some basic building blocks.
Each scene consist of two towers (repeated across experiments); each tower of 4
dominoes. Tower types: (1) an arch, (2) "C"-shaped, and (3) "L"-shaped.
After each trial, both participants see feedback about scene mismatch.

![Figure 1](/assets/img/2021-06-27-shared-abstractions-fig1.png)


## Eval

Start and final word distributions compared using permutation-based $$\chi^2$$.
As trials progressed, words like "block" and "horizontal" were used less
frequently, while "C" and "shape" more frequently.

[Linear Mixed Effects](https://stats.idre.ucla.edu/other/mult-pkg/introduction-to-linear-mixed-models/)
(x = repetition number) models show gain in efficiency.

Comparison between (architect, builder) pairs using Jensen-Shannon divergence
(JSD) within each repetition.
**Interestingly** JSD between pairs *increases* with trial number; i.e. a
diverse language emerges even in this simple domain.


## Computational model: Bayesian program learning

Following recent work, they model emergent language according to social utility.
E.g. [Pragmatic Language Interpretation as Probabilistic Inference](http://www.cogsci.bme.hu/~ktkuser/KURZUSOK/BMETE47MC15/2019_2020_1/Cikkek/GoodmanFrank2016.pdf):
> Building on developments in game theory and probabilistic modeling, we
> describe the rational speech act (RSA) framework for pragmatic reasoning. RSA
> models provide a principled way to formalize inferences about meaning in
> context; they have been used to make successful quantitative predictions about
> human behavior in a variety of different tasks and situations, and they
> explain why complex phenomena, such as hyperbole and vagueness, occur. More
> generally, they provide a computational framework for integrating linguistic
> structure, world knowledge, and context in pragmatic language understanding.

Hypothesizing that the architect's increasing preference for more abstract
communication is a consequence of a rational trade-off between informativity and
the cost of communication:

$$P_s(u|t_i)  \propto \exp\{-\alpha U(u;t_i)\}$$

$$U(u;t_i) = \log P_l(t_i|u)$$

$$P_L(t_i|u) \propto \delta_{u}(t_i)$$

Architect can represent the raw scene $$T*$$ using multiple programs $$T^k$$:

$$
U(u, T^k; T*) =
  \left ( (1-\beta) \sum \ln P_L(t_i^k | u) \right )
  - \left ( \beta \cdot |T^k| \right )
$$

Where β is a parameter controlling the architect's cost sensitivity, i.e. how
much weight do they put on description length.
The Builder may not know Architect's language, so the Architects maintains an
additional prior $$P([[ u ]])$$, cf. [When redundancy is useful](https://arxiv.org/pdf/1903.08237.pdf):
> Rational theories of language use have come under attack [for failing to]
> account for the seemingly irrational overinformativeness of referring
> expressions. [We present a model] that treats speakers as agents that
> rationally trade off cost and informativeness of utterances.

Not clear what "roughly" means in:
> intermediate values of β roughly reproduced the qualitative Architect behavior


## Discussion

Future work
* Investigate sources of consistency and variability
  * e.g. "C-shape", "upside-down U"
* Investigate within-pair references to previous trials
* Refine learning algorithm to fit experimental results
* Collect realistic priors
* Investigate tasks where participants learn at different rates

They are currently implementing a SOTA Bayesian program learning algorithm that
incorporates language into the learning procedure.

