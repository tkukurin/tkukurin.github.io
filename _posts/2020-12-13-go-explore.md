---
title: "Go Explore"
tags:
  - rl
  - research
last_modified_at: 2020-12-13T09:42:00+01:00
published: true
---


[Go-explore by Ecoffet et al. (Uber AI)](https://arxiv.org/pdf/1901.10995.pdf).
Cf. also Quality Diversity Algorithms
and [Jeff's presentation](https://www.youtube.com/watch?v=SWcuTgk2di8).
**TL;DR** solve Montezuma's revenge and Pitfall using evolutionary strategies.

Grand challenge in RL: deceptive and sparse rewards. Canonical exmaple is
Montezuma's revenge (MR), usually not well handled by traditional RL algo's and
tackled by variants of Intrinsic Motivation (IM) - pseudo-counts, #exploration,
RND, Deep Curiosity Search, Prediction, Bootstrapped DQN,...

Hypothesized reasons why IM doesn't work:
1. *Detachment* is the idea that an agent driven by IM could become detached
from the frontiers of high Intrinsic Reward (IR) after once exploring a specific
solution space.
2. *Derailment* is the idea that exploration can detract agents from getting
back to actually promising states (i.e. policy perturbation *hurts* performance).

They propose to remedy these issue by a novel algorithm which works amazingly
well in MR. First *solve*, then *robustify*.


## Proposed idea

1. Go: Use a heuristic to find good cells.
2. Explore: Random actions to find new places.

The exploration phase is somewhat Dijkstra-like. For each cell, store:
1. Full trajectory
2. Environment state
3. Total reward
4. Total length


Then robustify the environment to stochastic noise, by "backwards" Imitation
Learning (IL) algorithm.
1. No-ops (wait a random number of frames)
2. Sticky (can't change action on every frame)

Solves MR with superhuman performance under some major caveats.
CIs are also enormous in a lot of the experiments.


## Criticisms

Perhaps this paper is more about uncovering ways in which existing RL envs are
too simple.

Evolutionary algo's are a cool tool to have, but the entire approach seems
extremely domain-specific. Paper discusses generalizability in the abstract,
while only demonstrating performance in MR and Pitfall.
Could've been beneficial to at least try other Atari games using this technique.

They claim the procedure would work for any environment for which we can
construct a simulation, but actually requires:
1. Deterministic simulation
2. Low-dimensional state representation

The downsampling operation works only under assumption that the state space is
clearly representable by low-d visual artefacts.
Otherwise you would need to **learn** the representation, which seems the most
difficult part (they do tackle this in [First Return then Explore](https://arxiv.org/abs/2004.12919)).

The 2nd problem is **random exploration.**
The paper assumes a (simulation) environment in which completely random actions
will suffice to explore. The random actions are supposed to always be admissible
and *uncover* areas of good reward. What if we don't find good trajectories
during Phase I?
How far can you bound the number of "cells" and still solve this problem?

The 3rd problem is **determinism.**
You have to be guaranteed that you are able to get to an existing state.

Sparked a debate: when should we require stochasticity? Test time only (current
go-explore assumption)? Training time too?
1. Robust solution, but don't care about implementation: robotics, realistic
   characters in video games, complex industrial processes,... - most RL will
require a simulator (unsafe actions, sample inefficient) - might as well use it.
2. **Useless for** real world training,  understanding biological learning...

There is also a problem of seemingly randomly chosen heuristics and missing
ablation studies. How does the method perform with different heuristics, and
what are they actually saying that "Go-Explore" consists of?

