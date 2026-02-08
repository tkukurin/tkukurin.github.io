---
title: "Learning Salon: Recap & Discussion"
tags:
  - symposia
---


## Recap


Jane Wang [@9m12s](https://youtu.be/dEjL-di19F0?t=9m12s):
experiments showing meta-learning models capture animal behavior.
Meta-learning could happen


Sam McDougle [@9m51s](https://youtu.be/dEjL-di19F0?t=9m51s)
Applying RL to motor learning


Multiple people [@10m1s](https://youtu.be/dEjL-di19F0?t=10m1s)
RL applied to spatial navigation.
Kim: successor representation. Place cells' eigenvectors explain grid cells.
Haswell & Hugo experiments with humans & rodents for spatial nav.


Katja Hofman [@10m37s](https://youtu.be/dEjL-di19F0?t=10m37s)
Deep RL in realistic games. Human-like behavior in games.
[Navigation Turnig Test](https://arxiv.org/pdf/2105.09637.pdf).
Fascinating research area.


Randy O'Reily [@11m10s](https://youtu.be/dEjL-di19F0?t=11m10s)
How NNs can capture prefrontal & parietal networks. Cog neurosci.
Working, episodic memory, etc.


Christie Graham [@12m13s](https://youtu.be/dEjL-di19F0?t=12m13s)
Learning in primates.
Different hand gestures in fdi


Chris Honey [@12m44s](https://youtu.be/dEjL-di19F0?t=12m44s);
Sync in different parts of the brain to understand e.g. different behavior
Chunking of experience.


Jacqueline Gotlieb [@13m11s](https://youtu.be/dEjL-di19F0?t=13m11s);
curiosity and human experiments.


Simon Kornblith [@13m22s](https://youtu.be/dEjL-di19F0?t=13m22s);
"We just need bigger NNs".


Perry Zern and Dany Basset [@13m46s](https://youtu.be/dEjL-di19F0?t=13m46s)
wrote a book about curiosity.
Different social dynamics.


Kate Crawford [@14m24s](https://youtu.be/dEjL-di19F0?t=14m24s);
the atlas of AI. Mining cost, carbon offset, etc. Maps.
Her opinion on how AI is changing labor / power dynamics.


Janice Chen [@15m33s](https://youtu.be/dEjL-di19F0?t=15m33s);
synchronization of people's brains when they're e.g. watching movies.
Comparing recall to representations they captured.
Some events were recalled with more/less variance.


David Barack [@16m14s](https://youtu.be/dEjL-di19F0?t=16m14s);
different approaches: ascribing things to neurons vs. emergent repr's.
Levels of discussion: the neuron, circuit, population, emergent.


Sam Girshman [@17m19s](https://youtu.be/dEjL-di19F0?t=17m19s);
how **single-cell organisms** could learn.


Zenna [@17m59s](https://youtu.be/dEjL-di19F0?t=17m59s);
Bayesian approaches. Bridging to more symbolic reasoning.


Andrew Whiten [@18m32s](https://youtu.be/dEjL-di19F0?t=18m32s);
presence of culture across animal kingdom.
Were these behaviors sufficiently complex to be compared to human's?


Rosa Cao [@19m18s](https://youtu.be/dEjL-di19F0?t=19m18s);
philosophical perspectives on representation & how they link to neurosci.


## Discussion [@25m56s](https://youtu.be/dEjL-di19F0?t=25m56s)

Melanie starts the ["Reward is enough"]({% post_url 2021-06-20-reward-is-enough %}).
discussion [@38m10s](https://youtu.be/dEjL-di19F0?t=38m10s)

John [@41m15s](https://youtu.be/dEjL-di19F0?t=41m15s)
"There is a way to pose the problem s.t. the solution to the problem will come
up with a number of features we could call cognitive."
I think it's a good description of the paper.
His concern is about the fact this doesn't tell us how the brain will learn.

Ida from a cogsci perspective [@46m15s](https://youtu.be/dEjL-di19F0?t=46m15s):
"Objects in the world aren't tagged with rewards."
\[Sure, but isn't that an overly simplistic view? The rewards we percieve are
implicit & driven by biology, social environment, etc. I'm watching this salon
not because it has a reward tag, but because whatever set of developmental
conditions and biological makeup made me curious. The ultimate reward I am
following may well still be "survival", even though I can't articulate the exact
path from my reward function to watching the salon.\]

Hm, curious. [@47m53s](https://youtu.be/dEjL-di19F0?t=47m53s)
Ida believes evolution mutates rewards over time.
Not sure about that.
I'd counter with "evolution mutates the environment" and then we're closer to
Silver's point of rewards driving behavior.

"What computational framework can tell us how this architecture even evolved"
[@48m13s](https://youtu.be/dEjL-di19F0?t=48m13s).
[Paul Cisek](http://www.cisek.org/pavel/):
how different subsystems evolved in animals.

What drives behavior? [@52m27s](https://youtu.be/dEjL-di19F0?t=52m27s)
Says "drive theory" is too simplistic (bc. I can override my biological drive).
But what if that's coordinated by "meta" drive?

"Improving reaching" vs how you actually do it. [@53m34s](https://youtu.be/dEjL-di19F0?t=53m34s)

Rosa: def'n feels circular. [@56m33s](https://youtu.be/dEjL-di19F0?t=56m33s)
Define me solving a task as empirically observing intelligence, then reward the
task and claim you are observing intelligence because I perform that task well.
\[Not sure I understand why this is a problem.\]

Tim [@59m58s](https://youtu.be/dEjL-di19F0?t=59m58s).
Schulz: what is reward? Anything that makes the animal approach.
"If you can tell me what my reward function is, maybe DeepMind could produce me"
\[He was tongue-in-cheek, but I don't think he's necessarily wrong. Discovering
the reward function is *hard* sure.\]

"It doesn't seem to me the problem of survival is that well defined" [@1h5m39s](https://youtu.be/dEjL-di19F0?t=1h5m39s)
\[Isn't that the point? If the problem was well defined, we would have a uniform
population on Earth. Since it isn't, we have economics instead.\]

John is interested in meaning [@1h8m8s](https://youtu.be/dEjL-di19F0?t=1h8m8s).
\[I think this line of discussion is talking past Silver's paper.\]

Melanie:
> It seems like "reward function" is harder to model the more complex the
> agent's intelligence is. Could this be a measure of "intelligence"?

All of the behaviors they are talking about ("watching the salon is rewarding")
are actually emergent from a biological drive.
It's about the interaction between environments at different granularities.
So a human body cell is working in the "human-inside" environment.
Its job is completely unrecognizable from a "society" environment.

Tim "RL doesn't exist" [@1h29m18s](https://youtu.be/dEjL-di19F0?t=1h29m18s).
Claims sequence learning is the only thing that's relevant
(think BERT, except observations instead of word tokens).
\[But isn't that the same as RL without rewards?
In order for the agent to make an action, it still needs some incentive.
I don't get the distinction.\]

Plato and "what's virtuous" [@1h40m37s](https://youtu.be/dEjL-di19F0?t=1h40m37s)

Rosa, internal vs external reward. [@1h46m4s](https://youtu.be/dEjL-di19F0?t=1h46m4s)
\[Aren't external rewards (e.g. social acceptance) driven by internal rewards
(e.g. survival)?\]

