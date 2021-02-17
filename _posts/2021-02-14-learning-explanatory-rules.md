---
title: "Making Sense of Sensory Input"
tags:
  - research
last_modified_at: 2021-02-14T15:42:00+01:00
published: true
---

[Learning Explanatory Rules from Noisy Data (2018)](https://deepmind.com/blog/article/learning-explanatory-rules-noisy-data)
by Evans and Grefenstette.
Evans' work currently seems to also focus on program induction from data (cf.
[Apperception Engine](https://deepmind.com/research/publications/Evaluating-the-Apperception-Engine)
and [Making Sense of Sensory Input](https://deepmind.com/research/publications/Making-sense-of-sensory-input)).


## TL;DR version based on this [YouTube talk](https://www.youtube.com/watch?v=_wuFBF_Cgm0)

Symbolic Program Synthesis (SPS) is
data-efficient, interpretable, generalizes;
not robust to mislabelled or ambiguous data.

Neural Program Induction (NPI), e.g. Neural Turing machine, is
not data-efficient or interpretable;
sometimes generalizes, but robust to mislabelled and ambiguous data.

Middle ground: Differentiable Inductive Logic Programming (dILP), RobustFill,
Differentiable Forth. Most recently, [Apperception Engine](https://deepmind.com/research/publications/Evaluating-the-Apperception-Engine)
(not in the talk).

In dILP, a *valuation* is a value representing how likely an atom is true.
Each clause is then compiled into a function on valuations:
$$F_c: [0,1]^n \rightarrow [0,1]^n$$, e.g. $$p(X) \leftarrow q(X)$$.

FizzBuzz: NNs can suffer from "propositional fixation", i.e. not learning 1st
order rules.


