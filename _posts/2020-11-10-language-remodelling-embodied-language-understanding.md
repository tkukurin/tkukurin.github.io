
---
title: "Towards Embodied Language Understanding"
tags:
  - nlp
  - research
last_modified_at: 2020-11-10T01:00:00+01:00
published: true
---


[ArXiv](https://arxiv.org/pdf/2005.00311.pdf). Position paper argues for
focusing AI on building *mental models*. The question of *how humans represent
language internally* is shared between NLU and AI. Similar to Bisk et al's
recent [Experience Grounds Language](https://arxiv.org/pdf/2004.10151.pdf) and
many earlier works, e.g. Winograd (1971):

> In order to talk about concepts, we must understand the importance of mental
> models... we set up a model of the world which serves as a framework in which
> to organize our thoughts. We abstract the presence of particular objects,
> having properties, and entering into events and relationships.


## Embodied cognitive linguistics

In contrast to early theories assuming disembodied symbolic knowledge
representation, Embodied Cognition (EC) argues knowledge is stored using
multi-modal representations arising from world interaction. Embodied Cognitive
Linguistics (ECL) postulates linguistic representations are grounded in neural
modal systems. Note that ECL is still missing [WorldScope
5](https://arxiv.org/pdf/2004.10151.pdf), i.e.  social learning (e.g. sign
"BULL" mandates social knowledge to infer bull is most likely on the other side
of the fence).

The conceptual foundations of ECL:
1. Embodied schemata, pre-linguistic structures (containment)
2. Metaphoric inference. "Example *in* mind" suggests the abstract *mind* is
   mapped to the concrete *container*.
3. Mental simulation

Lakoff and Johnson (1980), Feldman and Narayanan (2004):

**Hypothesis 1 (Simulation)**: Humans understand the meaning of language by
mentally simulating its content. Language in context evokes a simulation
structured by embodied schemata and metaphoric mappings, utilizing the same
neural structures for action and perception in the environment. Understanding
involves inferring and running the best fitting simulation.

**Hypothesis 2 (Metaphoric Representation)**: Human concepts are expressible
through hierarchical, compositional, metaphoric mappings over a limited
vocabulary of embodied schema. Abstract concepts are expressed using more
literal concepts.

Early ECL implementations:
* Embodied Construction Grammar (Bergen and Chang, 2005)
* FrameNet (Ruppenhofer et al., 2016)
* MetaNet (David and Dodge, 2014)

Some research shows linguistic message is not present in the words (Stolk et al.
2016, David et al. 2016).

Lol at section 4: "*[our] proposal centers around the view of natural language as
a kind of neural programming languages*". The two NLPs have finally converged.


## Proposed embodied language understanding model

Consciousness Prior.
Abstract low-d states, as in Kipf's Structured World Models.

Agent A sequentially generates utterances $$u_t$$ to convey a goal state $$G*$$,
B comprehends $$s_t=C(s_{t-1},u_t)$$.

Challenges: linguistic communication bandwidth is way lower than mental.
Discourse needs common ground (priors) which is accumulated.

Cf. [selective analogical inference](https://groups.psych.northwestern.edu/gentner/papers/gentner&Forbus_2011.pdf)


## Architecture and implementation

Memory as a combined short-term mental model (akin to a small GNN?)
and compiled knowledge (traditional KB, I guess Watson).

Parser maps perceptive stimuli to internal state representation (I guess
something like [C-SWM](https://arxiv.org/abs/1911.12247)).

Emulator outputs a new state based on the current mental model.

