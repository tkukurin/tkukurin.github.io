---
title: "Reward is enough"
tags:
  - research
  - rl
last_modified_at: 2021-06-20T22:00:00+01:00
published: true
---

Quick notes on [Reward is enough](https://www.sciencedirect.com/science/article/pii/S0004370221000862).
I wasn't aware this paper was supposed to be controversial, but it sparked quite
a lively debate on Learning Salon.
To me the the paper makes perfect sense. Argues that general intelligence arises
in complex environments, even from seemingly innocuous signals.
Wasn't some version of this written by Skinner in the mid-1900s?

Anyhow. My **TL;DR**: intelligence is emergent behavior facilitated by any kind
of reward present in a complex environment.

> The behaviour of the squirrel may be understood as maximising a cumulative
> reward such as satiation (i.e. negative hunger). In order for a squirrel to
> minimise hunger, the squirrel-brain must presumably have abilities of
> perception (to identify good nuts), knowledge (to understand nuts), motor
> control (to collect nuts), planning (to choose where to cache nuts), memory
> (to recall locations of cached nuts) and social intelligence (to bluff about
> locations of cached nuts, to ensure they are not stolen).

Well yeah, these behaviors seem distinct because they named them as such.
If I granulate on a "nut-usefulness" level then perception, knowledge, planning,
memory and social intelligence can all be a single ability.

Knowledge: information that is *internal* to the agent.
May be learned or innate; long-lived environments favor the former.

> innate understanding of predator evasion may be necessary before there is any
> opportunity to learn this knowledge. Note, however, that the extent of prior
> knowledge is limited both in theory (by the capacity of the agent) and in
> practice (by the difficulty of constructing useful prior knowledge).

*Perception* could be subserving e.g. maximization of healthy food, avoiding
accidents, minimizing pain.
*Social intelligence* could arise just from the presence of other agents.
They kind of relate *language* to social intelligence, saying it arises from an
agent's need to communicate its complex environment to achieve goals.

Then some not-too-convincing lamentation about *generalization* being useful for
maximizing an agent's understanding within a rich environment.
Maybe I just don't understand what they're trying to say.
I would've claimed that an agent perhaps has limited cognitive capacity, and as
such generalization is a consequence of interference but what do I know.

> We do not offer any theoretical guarantee on the sample efficiency of
> reinforcement learning agents. Indeed, the rate at and degree to which
> abilities emerge will depend upon the speciﬁc environment, learning algorithm,
> and inductive biases


***

*Which environment?* Depends on what you're trying to achieve.
But it doesn't matter, because the real question is... *Which reward signal?*
The desire to manipulate the reward signal often arises from the idea that only
a *carefully constructed reward* could induce general intelligence.
This paper suggests that, the more complex the environment, the more complex the
behavior, irrespective of reward (e.g. pebble collecting).

In their framework, reproductive success is e.g. a possible reward that drives
the emergence of intelligence.
Reinforcement learning is the best choice, because:
* unsupervised learning and prediction lack action selection
* supervised learning is a shortcut that can teach a subset of what humans know
* maximization of free energy or minimization of surprise can't be directed to
  achieve specific goals across different environments

As such, they argue against offline RL (no feedback to direct the agent towards
their particular goals).

*Is the reward signal too impoverished?* I think they agree with me on this one,
the single learning signal will actually lead to the emergence of "sub-signals"
(e.g. survival necessitates food acquisition) which the agent will learn:
> Many solution methods, including model-free reinforcement learning, learn to
> associate future reward with features of observations, through value function
> approximation, which in turn provide rich secondary signals that drive
> learning of deeper associations through a recursive bootstrapping process.
