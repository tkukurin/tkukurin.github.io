---
title: "Placing language in an integrated understanding system: Next steps toward human-level performance in neural language models"
tags:
  - nlu
last_modified_at: 2020-11-16T10:42:00+01:00
published: true
---

[By James McClelland, Felix Hill, Maja Rudolph, Jason Baldridge, Hinrich Schutze](https://web.stanford.edu/~jlmcc/papers/McCEtAl20PlacingLanguageInAnIntegratedUnderstandingSystem.pdf).

---

Most our current models focus on *language-internal tasks*, limiting their
ability to perform tasks that depend on understanding situations.
Lack memory for recalling prior situations.
This paper sketches a framework for future models of understanding.

Cf. Rumelhart's handwriting (in context can be read: went vs. event).

![Rumelhart's handwriting](/assets/img/2020-11-16-rumelhart.png)

"A boy hit a man with a [bat|beard]"
* Semantics: "bat" as the instrument used to hit
* Syntax: "bat" as part of the sentence verb phrase: "hit with a bat"
* Syntax: "beard" as part of the noun phrase: "man with a beard"

Elman: "boy [who sees girls] chases dogs" [reduced relative clause].
Model predicting correct verb form ("chases") - shows sensitivity to syntactic
language structure.

Elman trained with tiny, toy languages. NLP ruled by n-grams and structure.
In recent 10 years, co-occurence relationships (word2vec I guess).

The model manages to understand hierarchical clustering (?).

> John put some beer in a cooler and went out with his friends to play
> volleyball. Soon after he left, someone took the [beer|ice] out of the cooler.
> John and his friends were thirsty after the game, and went back to his place
> for some beers. When John opened the cooler, he discovered that the beer was

Expect: beer → "gone", ice → "warm"; too hard for RNN.
LSTMs don't fully alleviate the context bottleneck: internal state is fixed
vector (how does the 2nd follow from 1st?).

Query-based attention (QBA)
works "as Rumelhart envisioned (?)" by *mutual constraint satisfaction*.
I.e. BERT stacks layers of multi-head attention transformers, each
*constraining* the meaning of the corresponding attention head in layer below.
BERT's representations capture structure without it being built-in; emergence.

GPT-3 still fails on "common sense physics".


## Language in an integrated understanding system

What they call situations are actually "categories"?
Situations can be concrete, abstract, nested, etc.

Ex. `[[[cat on a mat] in a house] in west virginia]` are nested categories.

Evidence that humans construct situation representations from language comes
from classic work by [Bransford and colleagues](https://www.sciencedirect.com/science/article/abs/pii/0010028572900035):
1. We understand and remember texts better when we can relate the text to a
   familiar situation;
2. relevant information can come from a picture accompanying the text;
3. what we remember from a text depends on the framing context;
4. we represent implied objects in memory; and
5. after hearing a sentence describing spatial or conceptual relationships, we
   remember these relationships, not the language itself.

> Given "Three turtles rested beside a floating log and a fish swam under it,"
> the situation changes if "it” is replaced by "them.” After hearing the
> original sentence, people reject the variant with "it” in it as the sentence
> they heard before, but if the initial sentence said "Three turtles rested on a
> floating log,” the situation is unchanged by replacing "it” with "them,” and
> people accept this variant.  Evidence from eye movements shows that people use
> lin- guistic and nonlinguistic input jointly and immediately (46). Just after
> hearing "The man will drink,” participants look at a full wine glass rather
> than an empty beer glass (47). After hearing "The man drank,” they look at the
> empty beer glass.

Complementary learning systems (CLSs) theory:
connections within the *neocortex* gradually acquire the knowledge that allows a
human to understand objects and their properties, link words to objects,
understand and communicate about generic and familiar situations.

The *Medial Temporal Lobe* (MTL) stores an integrated representation of the
neocortical system state arising from a situation.

![Sketch of the brain's understanding system](/assets/img/2020-11-16-brain-understanding-system.png)

People w/MTL damage have difficulty understanding or producing extended
narratives.
GPT-3 after training can be viewed as a human without MTL.


## Next steps toward a brain and AI-inspired model

Principles
1. Mutual constraint satisfaction (think BERT layers)
2. Emergence (think insights "just appearing")

Evaluation via microsituations consisting of Picture-Description (PD) pairs
grouped to scenes that form story-length narratives.
Language conveyed by text.

The human learner is afforded the opportunity to experience the compositional
structure of the environment through his own actions.

They tried some LSTM in this context: F. Hill et al. [Environmental drivers of
systematicity and generalization in a situated agent]({% post_url 2020-11-12-systematicity-generalization-situated-agent %}).
TL;DR lift 20 objects trained to put 10 in some location, can still place the
remaining ones with 90% accuracy.

