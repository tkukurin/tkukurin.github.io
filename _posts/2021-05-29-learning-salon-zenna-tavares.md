---
title: "Learning salon: Zenna Tavares"
tags:
  - neuro
  - philosophy
last_modified_at: 2021-05-29T16:42:00+01:00
published: true
---

Causal probabilistic programming for AI.
Presentation starts [@05m14s](https://youtu.be/V_yV8GxhUlc?t=05m14s).
"I will mostly speculate" since this is not a conference but a salon.

Example: perfect spheres for planets.
Galileo: "I feel sure that the surface of the moon is not spherical."
How? Essentially Bayesian reasoning.
Some imagined generative program a person may use [@11m13s](https://youtu.be/V_yV8GxhUlc?t=11m13s):
```
theory ~ t_sphere(p_sphere) or t_rugged(1-p_sphere)
if theory == t_sphere:
  color ~ some_color_distribution
  sphere := Sphere(color)
else if theory == t_rugged:
  relief ~ some_relief_distribution
  moon := Surface(relief)
image := render(moon)
```

What changed Galileo's posterior? Telescope \[sensory input\].
His proposal: extend generative program above with a new language (?).
We need to be able to [encode "soft" arguments in math](https://youtu.be/V_yV8GxhUlc?t=19m05s).
\[I'm not sure how this is different from current math language?\]

```
theory Ptolemy
Earth: Object
Moon: HeavenlyBody

law constant (center Earth)
law center Earth = center Universe

law forall b in HeavenlyBodies,
  circularMotion b

law forall b in HeavenlyBodies,
  revolvesAround b Earth
```

[Application to grid world domains](https://openreview.net/pdf/c0d8f67d1bc7c02b4c73c1601730d188521165ea.pdf).
[Claims](https://youtu.be/V_yV8GxhUlc?t=25m02s):
1. Automatic probabilistic and causal inference currently most compelling for
   reasoning machines
2. Next generations of formalisms for inference will inherit from thm provers
3. Human reasoning remains far beyond any formalisms. \[ Assumes a single
   concept of "human reasoning;" doesn't necessarily seem correct.  \]


# [Discussion](https://youtu.be/V_yV8GxhUlc?t=26m30s)

John: is this just a CS metaphor?
[The space of theories is infinite, yet we pick one](https://youtu.be/V_yV8GxhUlc?t=29m45s)

[How do humans turn "nice clothes, thus rich" into implicit Bayesian algo](https://youtu.be/V_yV8GxhUlc?t=32m35s)?
Some inferences are made using the deductive system itself.
Cf. cognitive scientists; Peter Battaglia and block of towers experiments.

Zenna: ice-cream spoon falls in another room, I only hear the sound.
But I have a model of the world and make an instant inference.
[Every kind of reasoning is algorithmic](https://youtu.be/V_yV8GxhUlc?t=38m51s).

John: So you have an elaborate causal model of the world in your mind?
Zenna: Yes. Knowledge representation is orthogonal to reasoning.
\[They [come back to that at the end](https://youtu.be/V_yV8GxhUlc?t=2h10m6s).
When you implement these things, you make a lot of representation choices. \]


John: Sophistication of your world models is at the core of human reasoning.
This theory has nothing to say about that.

Ida: [Widely accepted Bayesian are not neurally plausible](https://youtu.be/V_yV8GxhUlc?t=47m28s).
[Why use them for more abstract reasoning](https://youtu.be/V_yV8GxhUlc?t=53m21s)?
Question about cognitive science; engineers can implement whatever.
\[I don't think he gave an answer really? "I just believe"\]

John: What does reasoning mean?
Is it just within a single theory?
[Is reasoning the inference step, or the construction itself](https://youtu.be/V_yV8GxhUlc?t=59m55s)?
[Athens & "Poseidon must be angry"](https://youtu.be/V_yV8GxhUlc?t=01h01m13s).
"Gods control the weather" and "given that gods control weather, X" both Bayes?
Even a cat could use the same reasoning, doesn't feel the same. [@1h12m11s](https://youtu.be/V_yV8GxhUlc?t=01h12m11s)
Zenna: agree that our formalisms don't come close to explaining "meaning".

Tennenbaum [@1h16m54s](https://youtu.be/V_yV8GxhUlc?t=01h16m54s):
inference vs. where meaning comes from are two different problems to tackle.
\[Yup\]

Kepler took much longer than Galileo to come up with the same theory.
[Maybe because of how perception works](https://youtu.be/V_yV8GxhUlc?t=01h22m).

Ida + Tennenbaum: don't think Bayesian model captures reasoning + extrapolation.

Logical propositions vs. perceptual reasoning.
[Qualitative difference](https://youtu.be/V_yV8GxhUlc?t=1h33m52s)?
Different models + different reasoning.
Galileo saw the moon, put the inference in argument form, then disseminated.

Early Bayesian inference example from Aristotle:
[good inference but bad priors](https://youtu.be/V_yV8GxhUlc?t=1h35m27s).

Melanie: [how literal are you about programs in the mind](https://youtu.be/V_yV8GxhUlc?t=1h40m17s)?
It's convenient to make an analogy between programming and the brain.
\[Everything that we know is to some extent modeled by the world, I don't see
why that would be a very controversial statement.\]

Melanie: "The idea of the brain." Analogies are useful but limiting.
\[Yeah ok hammer and nail, but paradigms need to be ground in *something*\]

[What kind of inferences are ML models making](https://youtu.be/V_yV8GxhUlc?t=1h47m14s)?
Abductive is just inductive on a different representation.

Ida: [about knowledge representations](https://youtu.be/V_yV8GxhUlc?t=2h5m48s).
What types of representations would integrate well with Zenna's approach?
Hybrid of a KG and these reasoning languages.
Seems like a powerful avenue to explore.

[Querying multiple databases](https://youtu.be/V_yV8GxhUlc?t=2h8m55s).

Andrew: [is GPT-3 a candidate for a Bayesian probabilistic model](https://youtu.be/V_yV8GxhUlc?t=2h13m35s)?
Depends on what level.
Would GPT-3 trained on something else (e.g. description of an experiment to
generate theories) be an implementation of Zenna's framework? Video cuts off.

