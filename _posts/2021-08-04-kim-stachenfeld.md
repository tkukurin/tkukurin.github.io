---
title: "Learning salon: Kimberly Stachenfeld"
tags:
  - symposia
last_modified_at: 2021-08-04T16:42:00+01:00
published: true
---

[Kimberly Stachenfeld](https://youtu.be/cFW0AfEMcl4?t=4m9s): how do humans and
animals learn structure about the world & use it to rapidly solve new problems?
How do we get machines to do the same?

TL;DR Does really interesting work on representation in the brain, cf.
* [Representing States & Spaces (w/ Tim Behrens)](https://neurokim.com/2019/09/13/representing-states-spaces-ccn2019-tutorial-by-kimtim/)
  * [YouTube tutorial (~3h)](https://www.youtube.com/watch?v=YM6OADRbSnQ)
  * [GitHub repo](https://github.com/Summer-MIND/mind_2019/tree/master/tutorials/stachenfeld_lab)
  * [Notes from the workshop](https://docs.google.com/document/d/1baI3oN_jCkGfxJ6RZCFeAes8qi7bKxwnDi3vYFX2u7s/edit#heading=h.11ilzmyktwka)
* [Flexible modulation of seq. generation in the entorhinal–hippocampal system](https://www.nature.com/articles/s41593-021-00831-7.epdf?sharing_token=nzEjjHplz6kQPSnFWnhy-tRgN0jAjWel9jnR3ZoTv0PsmOupqSJ0DUCdIN9pPy4hX45Su_uEAHA1E8DGEsV1m-dlxWj8vkMKrFbam2AxMNifNpF2H2DZDbhrLnygSTppdfyeRM6p1pPfvAYtTerBoJsM6OI4NQSTB4QEWwUFB7c%3D)
  * Cf. [Sam Gershman's salon](https://www.youtube.com/watch?v=D0Q6mj4cKUs)

History:
1. Thorndike 1898: Learning actions directly from reward.
2. Skinner 1948:  Learning from reward in complex state spaces.
3. Tolman: Cognitive maps in mice and men, cf. [CCN2019 tutorial @4m30s](https://youtu.be/YM6OADRbSnQ?t=4m30s).
   O'Keele and Dostrovsky: *place cells* as literal maps in the hippocampus.
   Q: What do state spaces look like?
4. Harlow 1949: Can we make better state spaces to make learning easy?

Place and grid cells: not just for tasks like physical space [@7m30s](https://youtu.be/cFW0AfEMcl4?t=7m30s).
Idea that hippocampus represents different discrete spaces.
Spatial envs give us a lot of structure that's useful for generalizing.

RL can be hard in complex problems:
* Throws away a lot of information (ha has this inspired "Reward is enough")
* Exploration is hard

Learning benefits from structure. [@11m26s](https://youtu.be/cFW0AfEMcl4?t=11m26s)
[Case for hierarchical RL?]

RL representation [@13m3s](https://youtu.be/cFW0AfEMcl4?t=13m3s):
1. What structure should we learn? Represent states in terms of predictions.
2. How do we make it generalize? Compression: as short a state as possible.

Cf. her work on [Hippocampus as a predictive map](https://www.biorxiv.org/content/10.1101/097170v4).

Relational deep learning [@15m42s](https://youtu.be/cFW0AfEMcl4?t=15m42s),
Peter Battaglia's work at DeepMind (really cool!), DiffPool by Ying et al.
GraphNets with Spectral Message Passing.

She's interested in hierarchical reasoning.
A lot of human creations compose hierarchies in interesting ways.
> Don't require hierarchy as a solution but rather because a lot of examples of
> interesting and intelligent behavior by humans and to some extent animals seem
> to apply hierarchical abstractions in a very creative and compositional way.
> I have this underlying faith that hierarchy is going to be really important.

Open-endedness spectrum [@22m14s](https://youtu.be/cFW0AfEMcl4?t=22m14s) and
list of current interesting work in neuro [@23m46s](https://youtu.be/cFW0AfEMcl4?t=23m46s).


## [Discussion](https://youtu.be/cFW0AfEMcl4?t=25m57s)

John: is RL going to be the answer to creativity?
Humans learn from others, why autonomous learning? [@30m](https://youtu.be/cFW0AfEMcl4?t=30m)
Kim: Maybe machines can go beyond the things we already know. [Yes!]

Jovo: I think about representations differently than you propose.
How far can you push this successor representation idea? [@37m48s](https://youtu.be/cFW0AfEMcl4?t=37m48s)
> The way I learned about it is my brain represents the stuff out there. Motor
> cortex represents the angle of my joints, visual cortex represents where stuff
> is, and then hippocampus represents kind of where I am. You propose [that]
> there's a successor representation and [value and rewards involved].

Neurosci team at DM discusses interpretability and grounded language. [@1h49m16s](https://youtu.be/cFW0AfEMcl4?t=1h49m16s)
Neuroscientific methods (I guess e.g. RSA?) might be useful for interpreting.

Compositionality and relation, what are they? [@1h4m21s](https://youtu.be/cFW0AfEMcl4?t=1h4m21s)
Compositionality in AI: combining different concepts using some mechanism
(composition as function is not the same compositionality).
Associative learning is a way of thinking about relational concepts. [@1h8m7s](https://youtu.be/cFW0AfEMcl4?t=1h8m7s)
Composition vs. hierarchy. [@1h9m1s](https://youtu.be/cFW0AfEMcl4?t=1h9m1s)
[Marlos Machado: Eigenoptions](https://arxiv.org/abs/1710.11089) as abstract
versions of standard RL options close to successor representations.

John: taxonomic relations. Are they amenable to graphs? [@1h10m59s](https://youtu.be/cFW0AfEMcl4?t=1h10m59s)
Kim: Yes! Scene representations.
John: Yeah, but how about when you need to infer what's happening? E.g. tallest
people go in back, shortest in front. More than just spatial. [@1h12m40s](https://youtu.be/cFW0AfEMcl4?t=1h12m40s)
Kim: Yes, still fundamentally relational problems.
[Was John's question about *how* rather then *are they*?]

Melanie: The brain is a thing of dynamic structure. Hierarchy in most ML models
seems to be static. [@1h17m31s](https://youtu.be/cFW0AfEMcl4?t=1h17m31s)

[Entorhinal cortex](https://en.wikipedia.org/wiki/Entorhinal_cortex).
Longer interesting block starting around [@1h23m14s](https://youtu.be/cFW0AfEMcl4?t=1h23m14s).
John: IIUC sparse coding is in the place cells.
I have no idea what most cells in entorhinal cortex even do; there could be a
lot of functionality and only some of it is realized.
I think of grid cells as a compact repr bc they have multiple firing fields.
Place cells in theory only have one.
Jovo: different notions of sparsity, sparsity of firing vs density. [@1h26m15s](https://youtu.be/cFW0AfEMcl4?t=1h26m15s)
John: I was imagining the final layers of a neural net [i.e. one-hot classes,
wouldn't that imply an explicit categorical representation in the brain?].
Subspaces of huge populations of neurons vs. sparsity.
Ida: place field is not just triggered by one cell.
Kim: I def think hippocampus is sparse, doesn't always mean high-d.
Entorhinal cortex as more compact and less sparse in some sense.

What is the output of the hippocampus in this framework? [@1h31m9s](https://youtu.be/cFW0AfEMcl4?t=1h31m9s)
According to our model, in CA1 the output is the successor representation
($$\approx N \times N$$ matrix [@46m7s](https://youtu.be/cFW0AfEMcl4?t=46m7)).

About some interesting experiments. [@1h33m50s](https://youtu.be/cFW0AfEMcl4?t=1h33m50s)

Do you think pooling and broadcasting is something that happens in the brain?
Or is it very different like in hippocampus.

> Pooling is a specific architectural element for aggregating lots of inputs.
> to apply some aggregate function over them. Model of hippocampus I currently
> think about it as having a sparser and less compact representation that can
> represent the flexibility of the task as you currently understand it. You
> compress that and you sum many states onto one state or many many neurons onto
> one neuron to have a more compressed representation in entorhinal cortex and
> that these exist in a loop and continually inform each other.

Pooling is just compressing or gathering information from many sources and
summarizing it with some statistic.

Neuro+DL research recommendations. [@1h51m42s](https://youtu.be/cFW0AfEMcl4?t=1h51m42s)

