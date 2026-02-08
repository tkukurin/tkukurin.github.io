---
title: "Learning Salon: Blake Richards"
tags:
  - symposia
last_modified_at: 2021-02-28T19:42:00+01:00
published: true
---


[Blake Richards on the Learning Salon](https://youtu.be/8q_E00xZDuU).


## Presentation

Broad types of long-term memory:
* episodic (personal experience)
* semantic (reasoning)
* procedural (*actionable*?)

Key features of **episodic memory** [YT](https://youtu.be/8q_E00xZDuU?t=15m37s)
(according to Tolding) are
* autonoetic (means by which you know yourself)
* one-shot (moments experienced only once)
* specific (sound, smell, etc)
* contextualized (e.g. time and place)
* transient (fast to be forgotten)
* transformable (can be transformed; not perfect snapshots; eventually become
  *semantic*)

Episodic memory is *almost* replay memory in modern RL (seems like actual
episodic memory is less perfect).

["Third way" of episodic memory](https://papers.nips.cc/paper/2007/file/1f4477bad7af3616c1f933a02bfabe4e-Paper.pdf)
initiated this line of research.
[Neural epsiodic control from DeepMind](http://proceedings.mlr.press/v70/pritzel17a/pritzel17a.pdf)
stores Q-values per episodic memory latent
space representation.
Result: works better with *fewer training examples*.

[Memory transformation in dynamic environments by Santoro et al](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6601977/).
Better handles delayed rewards.
Santoro has an even more recent paper on this topic.

[Greg Wayne on Long-range temporal credit assignment](https://arxiv.org/pdf/2102.12425.pdf).
Another memory bank as external module.

What's missing?
* Good mechanisms for contextual segregation (mixing similar episodes?)
* Schematic structure (typically we store hidden states).
  * animals encode laps when going around a maze?
* causal semanticization (x happened because y?)
* optimal forgetting
  * some perfectly remember everything, not happy about it (Jill Price), usually
    people are not high functioning
  * OTOH, people who have trouble remembering seem functional


## Discussion

Ida: lots of different types of forgetting.

Blake: Actively trying to stop associating episodic with hippocampal and
semantic with neocortical memories.

Where should successor representations sit?
[YT](https://youtu.be/8q_E00xZDuU?t=47m30s).

Jovo: kNN is optimal in the ideal case.
In contrast with Blake's view; Blake claims the ideal case is not what we
observe in the real world, hence kNN shouldn't work.
Our world probably doesn't change in a consistent way throughout time.
\[Hm\]

Santoro: not sure about forgetting, because in 30 yrs we'll have enough compute.
Blake is not convinced; he thinks retrieval will remain bottleneck.

John: Blake's claims are modularized.
How many modules will we need?
Blake: what is a module?

Some patients lose concept knowledge.
[YT](https://youtu.be/8q_E00xZDuU?t=58m05s).
This also affects semantic knoweldge.
In HM, there was a dissociation between procedural and episodic learning.

Semantic knowledge? Blake is not sure
\[See Santoro's work, Richard Evans' work.\]

Knowledge vs. memory? When is it useful to forget episodes?
Depends on what you call memory.
Knowledge maybe is subtype of memory.
Knowledge is episodic, removed of your subjective feeling (?).
How do we (biologically) do retrieval?
There's nothing biologically wrong with assuming attention mechanisms since
they're Hopfield networks.

Additional structure.

John: Differences in knowledge and episodic versions of events, "flashbulb
memories". Emotionally tied to event → retain episodic.
[YT](https://youtu.be/8q_E00xZDuU?t=1h16m11s).

Ida: Typically episode is a sequence of events that are related to eachother.
How is *relatedness* computed though? Ongoing work I guess.

When do you switch between procedural and episodic systems? Ongoing work.
Initially expected: switches big prediction errors; turns out, harder problem.
E.g. how do you smooth these rules out?

To what extent does human episodic memory reflect statistical distribution or
lack of stationarity that humans encountered during evolution?
[YT](https://youtu.be/8q_E00xZDuU?t=1h27m07s).

Jovo: How convinced are you this is the correct categorization?
[YT](https://youtu.be/8q_E00xZDuU?t=1h27m27s).
Good reasons to suspect this, but not very convinced.
Ongoing work.

Brad: There's no obviously privileged time course in which we anchor memory
representations (beyond seconds). [YT](https://youtu.be/8q_E00xZDuU?t=1h40m09s).
When we're born, we don't know which times will be most important for us.
\[How about preferences for outlier traumatic/rewarding events?\]
Cf. "time cells"?

Brad: Phenomenology is a slippery ground to stand on.
For him, objective accuracy of how you can retrieve information.
*Heterophenomenology*.

Lakoff: We remember abstract knowledge in terms of experiences. \[Yes!\]
E.g. "Life is a journey" situated in some previous episodic memory.
[YT](https://youtu.be/8q_E00xZDuU?t=1h40m09s).

Even episodic memory can be further fractioned (e.g. temporal vs. perceptual).
*It's sub-systems all the way down*.

