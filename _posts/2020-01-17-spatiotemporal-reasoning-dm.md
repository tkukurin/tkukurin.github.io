---
title: "Object-based attention for spatio-temporal reasoning"
tags:
  - rl
  - research
last_modified_at: 2020-01-17T23:42:00+01:00
published: true
---

[Object-based attention for spatio-temporal reasoning: Outperforming neuro-symbolic models with flexible distributed architectures](https://arxiv.org/pdf/2012.08508.pdf).
Evaluated on [CLEVRER](https://mitibmwatsonailab.mit.edu/research/blog/clevrer-the-first-video-dataset-for-neuro-symbolic-reasoning/)
([CLEVR](https://cs.stanford.edu/people/jcjohns/clevr/), but for videos and with
causal questions - think "what would happen if ...")
and [CATER](https://rohitgirdhar.github.io/CATER/) (CLEVR, but tracking object
permanence).

Builds on attention models (transformer obv). Paper highlights:
* Self-attention to integrate information over time (*isn't that a trend*).
* Input soft-discretization at the right level of abstraction ("pixels too fine,
  entire scenes too coarse")
* Self-supervised learning

Biological research suggests that humans reason at the level of objects (i.e.
inferotemporal instead of V1 representations).


## Model

Input to the model are sequential visual observations (video) and text (question).

They use MONet to obtain discrete objects from **raw visual observations**.
RNN obtains $N_o$ attn masks ($A_{ti} \in [0,1]^{w \times h}$ where
$\sum A_{ti} = 1$),
each representing *probability* that a given pixel belongs to that mask's object.
Thus $A_{ti} \odot F_t$ retrieves $i$th object on the image.
This value is encoded using a VAE, where latent posterior $q(\mathbf{z}_{ti}|F_t, A_{ti})$
is a Gaussian around $\mu_{ti} \in \mathbb R^d$ (the $i$th object's representation).

**Text input** (question about the video) is represented as $w_i \in \mathbb R^d$.

Additional one-hot value indicates whether input is a word or object (i.e. both
inputs are actually $\mathbb R^{d+2}$).

These values are **jointly encoded** as transformer input
$\textrm{CLS}; m_{ti}\mu_{ti}|_{t,i}; w_i|_i$ where $m_{ti}$ is a mask in $\{0,1\}$.
As with BERT, the output of $\textrm{CLS}$ is transformed through MLP (1
hidden layer $N_H$) in order to supervisedly learn the answer.


## Training procedure

Two separate masking procedures.
One is standard BERT.
The other is *hierarchical*: first transformer outputs a vector $r_o$ per frame
(output produced by attending to each **object** within the frame, along with
corresponding **question text**).
Individual object representations are then concatenated: $R_t=(r_o; \ldots; r_O)$.
This serves as input for the next transformer in the hierarchy.

**Self-supervision** tested on contrastive and L2 loss, with similar performance.
Detailed ablations left for future work.


## Results

Outperforms previous SOTA.
No surprises: ablation study suggests self-attention is key to performance.
Global self-attention better than hierarchical.

Seems to require 40% less training data compared to neuro-symbolic models.
Self-supervised auxilliary loss highlighted as particularly important.

