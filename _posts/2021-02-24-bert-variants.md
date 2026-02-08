---
title: "BERT objectives"
tags:
  - marginalia
last_modified_at: 2021-02-24T13:42:00+01:00
published: true
---


A comprehensive up-to-date list of BERT variants (as well as other transformers)
can be found on [HuggingFace website](https://huggingface.co/transformers/).
Below are just some of the different objectives introduced in these papers.


## [OG BERT](https://arxiv.org/pdf/1810.04805.pdf)

The original BERT paper introduced pretraining using transformers in NLP.
Also continued the trend of doing *PR by naming* in ML research.


### Masked Language Modeling (MLM / Cloze)

WordPiece tokens chosen for prediction at random with 15% probability.
Input replaced with `[MASK]` 80% of the time, random other token 10%, and
unchanged remaining 10% of the time.

BERT is trained using cross-entropy loss between the masked token and a softmax
head producing predictions from its ~30k WordPiece vocabulary.


### Next Sentence Prediction (NSP)

As input, encode either the correct next sentence after `[SEP]`, or a random
other (50%).
`[CLS]` predicts a binary outcome (whether the next sentence is correct).
Model achieves 98% accuracy.

In this paper, they indicate NSP is beneficial for QA and NLI; however,
subsequent works find the impact unreliable and often remove it.


## [RoBERTa](https://arxiv.org/pdf/1907.11692.pdf)

*Robustly optimized BERT approach*.
Larger byte-level BPE; no NSP; larger mini-batches.
*Dynamic token masking.*
Investigates the pretraining dataset.

[CamemBERT](https://arxiv.org/pdf/1911.03894.pdf)
Builds on RoBERTa; no NSP, SentencePiece subword tokens for French, but uses
Whole Word Masking (WWM), i.e. `[MASK]` replaces entire words.


### Full-sentences (FS) and Doc-sentences (DS) objectives

Just concatenate as many sentences as you can from multiple documents (FS) or a
single document (DS), using `[SEP]` as delimiter. No NSP loss, 512 tokens max.
Example: `[CLS] A [SEP] B [SEP] C ...`.
DS works a bit better but FS was easier to implement so they use the latter.


## [AlBERT](https://arxiv.org/pdf/1909.11942.pdf)

Replaces NSP with a similar objective, aiming to teach *coherence*.

### Sentence Ordering (SO)

It seems that the order of sentences is a more difficult prediction task.
They replace NSP with the SO objective, i.e. negative examples are sentences in
swapped order. A training example: `[CLS] A [SEP] B` and `[CLS] B [SEP] A`.


## [BART](https://arxiv.org/pdf/1910.13461.pdf)

Denoising autoencoder maps corrupted document to the original document.
Seq2seq with bidirectional model over corrupted text and left-to-right
autoregressive decoder.

The training procedure is kind of interesting as it's different from classic BERT.
[BARThez](https://arxiv.org/pdf/2010.12321.pdf) uses the same, except for French.


### Document corruption

Input documents are corrupted using
* Document rotation (shift)
* Sentence permutation
* Text infilling
* Token deletion
* Token masking

The decoder then tries to recover entire uncorrupted input.


## Other

A lot of the other Transformers work utilizes some variant of the objectives
above, while attempting to reduce the computational demands (squared in input
size).

E.g. [ConvBERT](https://arxiv.org/pdf/2008.02496.pdf)
tries span-based dynamic convolutions to reduce global memory footprint.
Essentially localizes attention, since BERT heads frequently exhibit a diagonal
attention matrix anyway (cf. [Lena Voita's work](https://lena-voita.github.io/posts/acl19_heads.html)).

[This work](https://arxiv.org/pdf/2010.10499.pdf)
uses neural architecture search and Knowledge Distillation (KD).
KD seems to be a superior training objective to standard self-supervised in
terms of training speed (Fig. 1 in the paper).


