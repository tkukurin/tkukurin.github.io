---
title: "Learning Salon: Katja Hofmann, Deep RL for Games"
tags:
  - neuro
  - rl
last_modified_at: 2021-02-27T18:42:00+01:00
published: true
---

Very quick notes from [Katja's Learning Salon talk](https://www.youtube.com/watch?v=MFyjE6_kTvE)
on Deep RL for Games at MS Cambridge.


## Links

* [Project Malmo: Minecraft for AI experimentation](https://www.microsoft.com/en-us/research/project/project-malmo/) ([GitHub](https://github.com/microsoft/malmo))
  * [MineRL](minerl.io/competition) focus on sample-efficient usage of human
    demonstrations
* [AMRL: Aggregated Memory for RL](https://openreview.net/pdf?id=Bkl7bREtDr);
goal: navigate a long maze; modification to "standard" RL LSTM adding a memory
cell (kind of like Manning's work on MAC cells?)
  * simulating noise: add a single randomly sampled variable as input;
    only LSTM is not very robust
  * memory is a running average of all hidden states so far
  * subtasks are kind of "pseudo-noise" (short-term dependencies)
* [Project Paidia](https://innovation.microsoft.com/en-us/exploring-project-paidia):
  agents that adapt on the spot to new teammates and opponents. [YT](https://youtu.be/MFyjE6_kTvE?t=1133)
* Deep Interactive Bayesian RL via Meta-Learning [YT](https://youtu.be/MFyjE6_kTvE?t=1388)
* MeLIBA [YT](https://youtu.be/MFyjE6_kTvE?t=1493) - is it useful to explicitly
  model other agent's actions to maximize some notion of "global" reward (e.g.
take all coins to appropriate banks)
  * VAE to model other agent's state
* [AI and gaming research summit at Microsoft](https://www.microsoft.com/en-us/research/event/aiandgaming2021/)
  talks should soon be available online.


## Discussion

Are games "just something that conforms to RL algorithms?"
No.  But in games, human players and AI are at similar footing.

What is an "RL agent"?
Whatever we can *model*.
\[Yes, pretty sure that's exactly what Sutton&Barto mention in their book.\]
John: we can't ascribe "agency" to the weather. \[Can't we?\]

Why games? Combination of motivation, control and flexibility.
Easy to collect data, can be setup in a multitude of ways.
Virtual environments can be made "safe" \[assuming transfer to real world works\].

Games where you can't define a goal beforehand?
Curiosity-driven exploration, automated curriculum learning, etc.
Katja is hopeful on meta-learning.

Katja: it makes sense to assume you can define anything as a "reward", but the
rewards themselves are varied (e.g. humans can learn based off of "well done").

\[NOTE: a lot of the things they are discussing seem to be rehashed from
Minsky's [Society of Mind](https://amzn.to/2ZWQpzC).\]

Learning to be a good opponent seems to be easier than learning to be a good
teammate.
\[Makes sense, it's easier to define the inverse optimization function.\]
Maybe make mistakes on purpose and then force other agent to compensate?

How about free play mode?
Katja didn't make experiments there yet.
Some ideas on how to *force* agents to find their own goals: social environment.
John: "Everything is a version of something before it"
\[Well yes, the world is compositional, *only physics is true*.\]

Darwin: don't conflate story about how you got to X vs. how X works.
E.g. there is a story on how you evolved a brain, not how it works.

Jovo: There is no objective in evolution.
\[Not sure about that. Isn't human learning just optimizing for survival given
some "natural" inductive biases?\]

John: Our learning not completely different from animals, more like "average
animal + something else".
Brad: boredom as creativity signal \[Again something Minsky discusses\].

Zenna asked something like "is creativity an emergent property of RL-model-based
optimization" (?) \[I think so, but eehhhh.\]

John: Games are a bit more like an engineering problem, vs.  philosophical
questions. "Why is there a river here?" vs. "How do I build a bridge over this
river?"
\[I think John is actually hinting at intrinsic motivation and meta-learning. We
*are* actually trying to model these questions with RL.\]
There's no reason to be optimistic about it without any concrete proof, and it
seems that [we don't have proof right now.](https://youtu.be/MFyjE6_kTvE?t=7782)

David: The agents are quite passive.

Have you modeled something like *joy* in the agents?
Nope; what does joy mean for a human player?

![Penguins are fun](https://image.flaticon.com/icons/png/512/826/826963.png)

