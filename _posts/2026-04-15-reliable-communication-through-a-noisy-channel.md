---
title: "Reliable Communication Through a Noisy Channel"
tags:
  - sententia
last_modified_at: 2026-04-14T00:13:00+02:00
published: true
---

* *Post status*: quick throwback through my ancient infotheory lecture notes
* *In plain words*: David MacKay taught me about thinking
* *Writing style*: curated course moments

**In brief**
Always write out the probability of everything.
[Lecture 6](https://youtu.be/9w4LnXIip5A?t=34m5s).
The one idea I think about most.


## I. _The most remarkable piece of mathematics of the last century_ through examples

Design a disk drive & make the first thousand customers happy with 99% probability over five years.
Work it out: you need a bit error rate around $$10^{-15}$$
Learn to add redundancy in a cunning way.
[(@22m26s, Lecture 1)](https://youtu.be/BCiZc0n6COY?t=22m26s)

For *any* channel, at *any* rate below capacity,
with *arbitrarily low* probability of error,
this is possible.
Shannon's noisy channel coding theorem.

**The ball-weighing problem.**
Take 12 balls, one heavier. You get 3 weighings.
Pick the first grouping: the one that maximises entropy over outcomes —
the experiment whose results would surprise you most uniformly.
Not 6v6 (1 bit). Not 5v5 (1.48 bits). Go 4v4 (1.58 bits).
Always pick the question that *most evenly splits your uncertainty*.
[(@24m13s, Lecture 2)](https://youtu.be/y5VdtQSqiAI?t=24m13s)

**The identical twins.**
Accept that all compression algorithms assume an identical twin
on the other side who would make the same guesses as yourself.
Encoder and decoder share a model.
Without that, communication is impossible.
[(@29m32s, Lecture 5)](https://youtu.be/cJ_rhZ9DP9k?t=29m32s)

**Perfectly compressed looks random.**
Build an optimal symbol code for a skewed distribution &
ask: what's the probability of a random bit being 1?
Intuition says 1/3. Wrong — it's 1/2.
If it weren't, compress further.
Perfect compression erases all visible structure.
[(@7m57s, Lecture 6)](https://youtu.be/9w4LnXIip5A?t=7m57s)

**The card trick.**
Try Monty Hall with cards (BW, WW, BB). Watch intuitions fail.
The remedy: *always write out the probability of everything*.
Enumerate the joint. Condition. Don't shortcut.
[(@34m5s, Lecture 6)](https://youtu.be/9w4LnXIip5A?t=34m5s)

**The explicit $$I$$**
Add a term $$I$$ to every probability expression — $$\mathbb{P}(x \mid H, I)$$—
for "any other assumptions we're making."
Most people leave this implicit. Don't.
Reason about the hypothesis space;
name the assumptions that define it.
[(@50m15s, Lecture 10)](https://youtu.be/mDVE0M-xQlc?t=50m15s)

**Learning as inference.**
Write the posterior of neural network weights:

$$
\Pr(W \mid \mathcal{D}, H) = \frac{\exp(-M(W))}{Z}
$$

"If somebody minimises a value,
I will take the inverse and interpret it as a probability."
Recognise that optimisation *is* inference & training *is* communication.
[(@1h1m37s, Lecture 15)](https://youtu.be/Z1pcTxvCOgw?t=1h1m37s)


## II. One Idea: _think in terms of the hypothesis space_

Bayesian thinking as a *habit of mind*.

- **Entropy** asks: how spread out is the space?
- **Compression** asks: how small is the typical set?
- **Channel coding** asks: how many non-overlapping regions fit?
- **Inference** asks: what does the posterior over the space look like?

All the same question in a different trench-coat:
*what is the structure of the hypothesis space, and how do I navigate it?*

From my original notes of Lecture 4:

> The claim Shannon is making is "the more probable something is,
> the less information it carries."
> It's a classic case of edge-case analysis in some sense,
> i.e. if something always happens then I know it will happen.
> In some sense this is also what modeling and abstraction is trying to tackle
> in general; find a proper *coarse graining* at which you are not anymore
> surprised by some phenomena, or at least you are far less surprised by it.

The job of a model — any model — is to find the level of description where surprise vanishes.
Shannon's information content $$(x) = \log \frac{1}{p(x)}$$
just makes that precise.

---

David was a great communicator.
His 240p YouTube lectures are lossy, but the signal is not.
