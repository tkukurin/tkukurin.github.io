---
title: "Environmental drivers of systematicity and generalisation in a situated agent"
tags:
  - marginalia
last_modified_at: 2020-11-12T16:42:00+01:00
published: true
---


[ArXiv](https://arxiv.org/pdf/1910.00571.pdf). Simple NN architecture performs
well in 3D Unity environment, but interesting experiments demonstrate various
aspects significantly affecting performance:

> (a) the number of object/word experiences in the training set; (b) the visual
> invariances afforded by the agent’s perspective, or frame of reference; and
> (c) the variety of visual input inherent in the perceptual aspect of the
> agent’s perception. (...) the degree of generalisation that networks exhibit
> can depend critically on particulars of the environment (...)


## Model

**Visual** $$W \times H \times 3$$ into a 3-layer CNN (64, 64, 32).
**Linguistic** pipeline consists of a word-level LSTM. Hidden state 128.
The two representations are fused together, and passed into a 128-unit LSTM.
At each timestep, hidden state is softmaxed into $$A$$ (26) actions.
Training is performed using IMPALA.


## Environment and experiments

2D (9x9 gridworld) and 3D (Unity) environments.
Evaluation focused on accuracy.

In 3D, **Lift** action is defined as the agent picking up an object for 2 secs.
**Find** action is defined as the agent approaching within 2m of an object and
fixing its gaze for 5 timesteps, without lifting the object.
**Put** action has a "distractor" large object and a "target" large object. One
of three smaller objects ($$X_1 \subset X$$) should be placed atop the larger.
Test consists of asking an object from $$X \setminus X_1$$ to be moved.

*Objects* in train and test differ;
goal is to study *action* (lift, find, put) generalization.
Examples:
* "find a green object"
* "lift a pencil"
* "find a pencil or find a blue object"

Control is far simpler than the real world; all objects are lifted the same,
regardless of shape.
Actions: `NOOP, {GRAB+,}{MOVE,LOOK}_{U,L,R,D}{+SPIN_{U,L,R,D},PUSH,PULL}`.
A white box appears around any object that's in grabbing range.


### Language negation

In a Unity room, place 2 objects.
Train on queries of the form
"find a $$x$$" for all $$x \in X$$,
and "find a not $$x$$" for $$x \in X_1 \subset X$$.
Then test on "find a not $$x$$" for $$x \in X \setminus X_1$$.

This does not work well (when $$\|X_1\|=6$$, accuracy is below chance).
Works better on more data ($$\|X_1\|=100$$ is 0.91 train, 0.78 test).

Maybe interesting further reading: history learning logical operators in
connectionist models and the importance of negation in language processing
([Steedman: Connectionist Sentence Processing in Perspective (1999)](http://www.coli.uni-saarland.de/~crocker/Teaching/Connectionist/CogSci99-Steedman.pdf)).


### 2D world

Only 3 different objects to pick up.
Agent rewarded for moving to target placement object while holding target pickup
object. 0 if moves onto another.

> The grid-world environment consisted of a 9×9 room surrounded by a wall of
> width 1 square, for a total size of 11×11. These squares were rendered at a
> 9×9 pixel resolution, for a total visual input size of 99×99

Statistically significant improvement in test performance when narrowing agent's
field of view (5x5 scrolling instead of 9x9). I would've interpreted performance
improvement as happening because there's higher chance of a single object being
on-screen at once (less visual stimuli, no distraction).

But also: the agent is always in the center of the screen in scrolling setup.

After pickup, they put the object in place of agent in the gridworld (see
Appendix D). E.g. agent is white and object red; after picking up, agent becomes
red. This is said to "simulate view obstruction" of the 3D world after pickup.

They also tried to display object *in* agent (e.g. white border around red
object while carrying), but that worsened performance.
Hypothesis: this is because of too few training objects, since in 3D obscured
view is not a problem.
Maybe I misunderstood that, because I'm not sure how convincing it is.


### Compare classifier vs. agent

An agent performs better compared to supervised classifier (pick L/R on still
photo); conclusion: implicit data augmentation caused by moving in environment.


### Language

Interesting negative result: performance with/without language is similar.

Setup: place 8 gridworld objects randomly (4 of one color/shape, 4 of another).
Sets differ *either* in shape or in color (to test generalization on both).
Pick one set and reward +4 if agent collects *all* elements, 0 if *single*
incorrect. Without language, should pick 1st element randomly (+2 expected
reward). With language, tell agent what to collect (+4 expected).

> For the language vs. no-language comparison (section 4.5), if the agent moved
> onto a correct object, it received a reward of 1. This reward was both used as
> a training signal, and given as input on the next time-step, to help the agent
> figure out which objects to pick up.

