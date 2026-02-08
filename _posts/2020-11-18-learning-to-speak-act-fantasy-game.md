---
title: "Learning to Speak and Act in a Fantasy Text Adventure Game"
tags:
  - marginalia
last_modified_at: 2020-11-18T19:42:00+01:00
published: true
---


Work by [FAIR](https://scontent-vie1-1.xx.fbcdn.net/v/t39.8562-6/78608959_452289858808567_714535640108105728_n.pdf?_nc_cat=106&ccb=2&_nc_sid=ae5e01&_nc_ohc=xu7-hDuqFs4AX9vx_2B&_nc_ht=scontent-vie1-1.xx&oh=d20bba8b3f720542e01bf7e5228e4992&oe=5FD8CCCA).
Available on [ParlAI](https://parl.ai/projects/light/).

A text environment. Crowdsourced annotations, including locations, objects and
their affordances, characters and their personalities, and interactions.

* 663 game locations from 37 categories
  * Crowd annotation task: from a category, create a description, backstory,
    names of connected locations, and contained objects and characters.
  * 6 of these categories separated for testing (turn out to be *simpler*)
* 3462 objects with annotations (tag and description)
* 1755 game characters
* 10,777 crowdsourced dialogues

> Physical actions include get, drop, put, give, steal, wear, remove, eat,
> drink, hug and hit, each taking either one or two arguments, e.g. put robes in
> closet. Every action has an explicit unambiguous effect on the underlying game
> state, and can only be executed if constraints are met, e.g. if the agent is
> holding the robes in the latter example. These constraints are what indirectly
> provide an agent with object affordances, as the list of possible actions
> provides all ways the agent can interact with their environment. Emotes
> include applaud, blush, cringe, cry, dance, frown ... (22 in total) and have
> no effect on the game state other than to notify nearby characters of the
> emote, which can have effects on their behavior.


## Model

> we represent context as a large text sequence with a special token preceding
> each input type (persona, setting, self emote, partner emote, etc).

Prediction: actions, emotes, dialogue.
Types: ranking (pick best response from a set) and
generative (decode word by word).

Ranking: dialogue from a set of random 20 or action from available.
22 possible emotes. **Metrics** R@1 and accuracy.


### Baselines

> We use Starspace which learns a bag-of-words embedding for context and
> candidates to maximize the inner product of the true label using a ranking
> loss (...)  we use fastText to classify which emote should be predicted next.

They also test & visualize out some Starspace encodings (Appendix).


### BERTs

[*Transformer memory network* (TMN)](https://arxiv.org/abs/1811.01241)
learns per-grounding representation based on special tokens in place of `[CLS]`;
performs attention to get final embedding.
Comparison via dot product.
Trained via negative sampling from training batch.

Then the other models are just pre-trained BERTs.

*BERT Bi-Ranker*
separately transforms context and each of the candidates (`[CLS]` token output).
Then transforms this embedding via an additional linear layer.
Comparison via dot product.
Trained via ranking loss (?).

*BERT Cross-Ranker*
concatenates context with each of the candidates to produce embeddings.
~11k times slower than Bi-Ranker (not possible to cache).

*Generative*
TMN to encode context features.
Transformer decodes while attending to encoder input.


## Results

Ablation studies against various features.
BERT pre-trained outeperforms (statistically significant?) all others.
Bayes rate still not reached.
Test set categories easier to classify (lower Bayes rate).


### About that grounding

* dialogue
* setting description
* character's persona
* objects with descriptions


