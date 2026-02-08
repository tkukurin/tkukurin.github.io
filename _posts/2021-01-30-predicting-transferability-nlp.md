---
title: "Predicting Transferability in NLP"
tags:
  - marginalia
last_modified_at: 2020-01-30T23:42:00+01:00
published: true
---

[Work on transferability](https://arxiv.org/pdf/2005.00770.pdf).
Goal: learn to rank *most transferable* source tasks for some target task.
Conclusions: transfer learning works.

* transfer gains are possible even with small source datasets
* out-of-class transfer (different source and target tasks) surprisingly works
  (though not as well as in-class)
* similarity between source and target tasks matters more in low-data regimes


## Tasks

33 different NLP tasks evaluated using pretrained BERT; broadly categorized as:

* Text classification / regression (CR)
* Question answering (QA)
* Sequence Labeling (SL)

A pre-trained BERT is first fine-tuned on an intermediate *source* task, and
then fine-tuned again on a *target* task (in limited, i.e. 1k random-sampled, or
full data regime). Reported mean of 20 random restarts for each experiment.

**Relative transfer gain** is defined as
$$g_{s\rightarrow t} = \frac{p_{s\rightarrow t} - p_t}{p_t}$$.


## Task embedding methods

**DataSize (baseline):**
Just rank by pre-training dataset size.

**CurveGrad (baseline):**
Based on gradients of BERT's loss curve.
Assumption that multi-task will work better if main task quickly plateaus
(small) while aux. task improves (large negative gradients).
They compute grad at 10, 20, 30, 50, 70% while fine-tuning on 10k samples.
Rank source tasks descendingly using reciprocal rank fusion algorithm.

**TextEmb:**
Average pooling of average token-level BERT embeddings $$h_x$$ across an entire
dataset, $$\sum_{x \in D} \frac{h_x}{\|D\|}$$.

**TaskEmb:**
[Fisher information matrix](https://en.wikipedia.org/wiki/Fisher_information).
Takes outputs into account, similar to [Task2vec](https://openaccess.thecvf.com/content_ICCV_2019/papers/Achille_Task2Vec_Task_Embedding_for_Meta-Learning_ICCV_2019_paper.pdf).
Train, then feed entire training dataset through BERT and compute *empirical
Fisher* on feature activations:

$$F_\theta(D) = \frac{1}{n} \sum_{i=1}^{n} [\nabla_{\theta} \log P_{\theta}(y^i|x^i) \nabla_{\theta} \log P_{\theta}(y^i|x^i)^T]$$


## Evaluation

There is one *source* task which performs best for a given *target* task.
They evaluate source tasks using NDCG and average rank as measures.

For Normalized Discounted Cumulative Gain (**NDCG**, information retrieval
measure that evaluates the quality of the entire ranking, not just the rank of
the best source task), define $$\textrm{rel}_i$$ to be the relevance
(target performance) of source task with rank $$i$$ in the evaluated ranking
$$R$$. Then (if $$p$$ is the number of source tasks):

$$\textrm{NDCG}_p = \frac{\textrm{DCG}_p(R_{\textrm{pred}})}{\textrm{DCG}_p(R_{\textrm{true}})}$$

$$\textrm{DCG}_p(R) = \sum_{i=1}^{p} \frac{2^{\textrm{rel}_i} - 1}{\log_2(i+1)}$$


## Conclusion

Large datasets (MNLI, SNLI, SQuAD-2) often the best source tasks.
TaskEmb *generally* selects source tasks that yield positive transfer, and often
selects the best source task.
Take a look at
[some of the figures (pg. 4)](https://arxiv.org/pdf/2005.00770.pdf)
for more detailed interesting findings.

