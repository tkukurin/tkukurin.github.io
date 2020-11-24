---
title: "If Deep Learning is the answer, what is the question?"
tags:
  - neuro
  - research
last_modified_at: 2020-11-24T14:42:00+01:00
published: true
---

By [Andrew Saxe, Stephanie Nelli, Christopher Summerfield](https://arxiv.org/pdf/2004.07580.pdf).
How can neuroscientists use DL to understand biological brains?
What are conceptual & methodological challenges of comparing behaviour, learning
dynamics, and neural representation in artificial and biological systems?
Resurgence of 1980s PDP ideas: current compute can learn from raw data,
as opposed to hand-extracted features.


## Limitations of the DL framework

> If neural computation emerges uncontrollably through blind, unconstrained
> optimisation, then how can neuroscientists formulate new, empirically testable
> hypotheses about neural mechanism? Such hypotheses are argued to take the form
> of design choices about learning rules, regularisation principles, or
> architectural constraints in deep networks.

Comparing neural and deep representations is statistically challegning.
A popular approach is to learn a linear mapping from neurons to network units,
and to evaluate the predictive validity on a held-out dataset.
DNNs can explain 60% of variance, but DNNs that don't classify images correctly
can explain 55%.

With RSA, it's unclear what type of agreement is being tested.


## Structure in animal learning

> Animal behaviour is richly structured, in theory permitting researchers to
> make systematic comparisons with machine performance. E.g., animal decisions
> are subject to stereotyped biases, but also irreducibly noisy; animals are
> **flexible but forgetful**, behaving as if memory and control systems were
> capacity limited, and the rate and effectiveness of information acquisition
> depends strongly on the **structure and ordering** of the study materials.

They go on to explain progressively differentiated structured learning in
children (animal v plant is learned before rose v daisy).
Even when they give identical solutions, deep linear networks exhibit similar
patterns while shallow ones don't.
Highlight the importance of studying *learning dynamics* and representational
evolution during training.


## Artificial vs natural neural

Comparison problem (ANN vs human): how strong are test subjects' priors?
Nature v nurture: are faces innate or acquired?

Deep learning asks how neural codes emerge from different learning principles:
traditionally supervised learning, but also suggested others (e.g. Hebbian).

> a successful AI model that has yet to impact neuroscience proposes instead
> that representation formation is driven by the need to accurately predict the
> **motivational value of experience**.

Problems arise due to amounts of labeled data required and credit assignment.
Grand challenge for neurosci: can learning in the brain assign credit across
the neural hierarchy? If so, identify biologically realistic implementation:
* one where updates are local, and
* forward and backward network connectivity is not required to be symmetric

Hope: ML will soon offer more powerful models in which higher cog functions
emerge naturally via a "blind search" process.
DL has been fused with RL, context-addressable memory, MCTS.
But let's embrace prev neurosci work: we have understanding of some cog systems,
e.g. the navigation system in the rodent medial temporal lobe, the motor system
in song birds, the saccadic system in the macaque monkey.


## Catastrophic interference & resource allocation during learning

Generally, parameterisation that solves task A is not guaranteed to solve any
other; training on task B, gradient descent drives network weights away from the
local minimum for A.

Evidence grows that offline replay may be important for memory consolidation;
continual learning problem begs the question: is biological learning actively
partitioned so as to avoid catastrophic interference?
They claim "Animals don't always benefit from interleaved study (e.g.
cello+violin)," but I'm not convinced.

More general: how have biological systems evolved to both minimize negative
transfer (interference) and maximize positive (generalization) between tasks?
Some theories:

> the brain has found a solution by promoting shared neural codes, which in
> turns allows for strong transfer, but deploying control processes to gate out
> irrelevant tasks that might provoke interference. They suggest that this
> answers the question of why, despite a brain that comprises billions of
> neurons and trillions of connections, humans struggle with multi-tasking
> problems such typing a line of computer code whilst answering a question.


