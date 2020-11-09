---
title: "Emergent Comms Pretraining for Few-Shot NMT"
#image:
#    path: https://github.com/cambridgeltl/ECNMT/raw/master/model.png
#    caption: "Listener/speaker emergent comms."
tags:
  - nlp
  - research
last_modified_at: 2020-11-09T16:42:00+01:00
published: true
---

The functional aspect of language can be captured by artificial multi-agent
games. This paper leverages a listener/speaker (encoder/decoder) paradigm,
"referential game on raw images", to pre-train neural translation models.
The kicker is that it's self-supervised - zero image captions in training data.
[GitHub](https://github.com/cambridgeltl/ECNMT)
and [ArXiv](https://arxiv.org/pdf/2011.00890.pdf).

> Our key assumption is that grounding communication on images—as a crude
> approximation of real-world environments—inductively biases the model towards
> learning natural languages.


## Emergent Communications pre-training

Starting from a 2048-dimensional image representation \\(I=h_0\\) produced
by ResNet-50 and a `<bos>` initial token, speaker `s` encodes the message into:

\\[
h_t^s = \textrm{GRU}_{\textrm{speaker}}(m_{t-1}, \textrm{MLP}_1(h_{t-1}))
\\]
\\[
m_t = \textrm{GumbelSoftmax}(\textrm{MLP}_2(h_t^s))
\\]

The goal of the cooperative game is for the listener GRU to reconstruct a
representation as close to `I` as possible, based on the sequence \\(m_t\\).

Inverse squared error for a compatibility score:

\\[
S(m,I) = \left \| h_{|m|}^l - \textrm{MLP}_1(I) \right \|^{-2}
\\]

Loss function is softmax of true `S` over a set of negative sampled images.
Two listener/speaker pairs are separately trained (source and target languages).


## Neural Machine Translation fine-tuning

After pre-training, listener GRUs become encoders in a seq2seq translation
tasks, while the speaker GRUs become decoders. A small neural Adapter (linear
with residual connections and dropout) is jointly fine-tuned with the model 
parameters to facilitate more effective domain transfer.

![Pre-training and transfer procedure](https://github.com/cambridgeltl/ECNMT/raw/master/model.png)
