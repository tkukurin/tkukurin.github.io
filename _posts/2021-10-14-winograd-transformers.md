---
title: "Back to Square One: Artifact Detection, Training and Commonsense Disentanglement in the Winograd Schema"
tags:
  - marginalia
last_modified_at: 2021-10-16T22:42:00+01:00
published: true
---

[From Elazar et al.](https://arxiv.org/pdf/2104.08161.pdf).
Evaluated on 2 Winograd corpora ("The X doesn't fit into Y because it is Z"):
* [Winograd Schema Challenge (WSC, 2012)](https://www.aaai.org/ocs/index.php/KR/KR12/paper/viewPaper/4492)
  273 manually curated to minimize influence of priors; e.g. *The racecar zoomed
by the school bus because it was going so fast* (racecars are usually fast).
* [WinoGrande (2019)](https://arxiv.org/abs/1907.10641), adversarial Winograd
  w/ a bunch of train (40k / 9k unbiased), dev (1.2k), test (1.7k) samples.
> The best state-of-the-art methods on WinoGrande achieve 59.4-79.1%, which are
> 15-35% below human performance of 94.0%

Twin sentences in the context of WS:
1. The trophy does not fit into the brown suitcase because it is too **small**;
2. The trophy does not fit into the brown suitcase because it is too **large**

Their explanations for the (falsely?) perceived progress on the WS task:
1. lax evaluation criteria; partially alleviate it via *group-scoring*: model
   credited with the worst performing score of a group
> For WS, where the task involves a binary classification, we use group scoring
> over the twin sentences, with accuracy as the per-instance scoring function.
2. remaining artifacts in the datasets; alleviate via baseline ctxs (below)
3. knowledge and reasoning leakage from large training data; don't use PLMs (?)
> we claim that the vast majority of commonsense knowledge a model obtains
> should come from sources external to the supervised dataset [...] The
> supervised training set should mainly provide a means for learning the
> format of the task but not as a source for commonsense knowledge acquisition.

Winograd transformers usually take argmax after replacing *it* in schemas with
corresponding entities. They test BERT, RoBERTa and ALBERT (`[CLS] context [SEP]
entity [SEP]`; entity is e.g. axe/suitcase; output is binary, from `[CLS]`):
1. Full ctx: *The axe would not fit in the suitcase because it's too large.*
2. Baseline, no-candidate ctx: *would not fit in because it's too large.*
3. Baseline, partial sent ctx: *because it's too large.*

> We note that these two baselines create nonsensical sentences. Therefore, we
> expect humans to not be able to properly solve them. Thus, a model that
> achieves higher than random performance on these baselines over a large enough
> dataset is suspected to rely on spurious correlations.

I mean... Okay, but humans instructed to use their priors could actually
properly solve some of these. If I see baseline 2 context, I can just guess.

Final study increases amounts of training data (x-axis) vs. performance (y).
ALBERT learning curve is quite steep compared to BERT/RoBERTa (Fig 2). Suggest
commonsense knowledge being useful (e.g. steel is hard, relative object sizes);
datasets should account for that with careful splits (how? Future work?).


## Winogrande debiasing algorithm (AfLite)

1. Finetune RoBERTa on a random subset of the data `D1`
2. Encode rest of the instances `D2`
3. Train linear classifiers `Li` on random subsets `D2_i`
4. If more than `k` linear `Li`s predict label correctly, discard.


## Training details and performance

8 epochs (RTX 2080 for 13 (BERT), 14 (RoBERTa), 62 (ALBERT) min/epoch) on large
Winogrande train set & models; Adam (LR of 1e-5); cross-entropy; batch size 8.
> As the evaluation is conducted on the dev set, we do not use it to select the
> best model. Instead, we report the performance with the final model, which is
> converged *based on our observation*.

