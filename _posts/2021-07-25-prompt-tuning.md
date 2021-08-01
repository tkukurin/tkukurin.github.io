---
title: "Simple Few-Shot Learning with Language Models"
tags:
  - nlp
last_modified_at: 2021-08-01T16:42:00+01:00
published: true
---

[FAIR/UCL: Few-shot learning with LMs](https://arxiv.org/pdf/2106.13353.pdf).
Not that interesting results, but cool overview of existing prompt techniques.
Focus on *masked LM* (unlike LTR in e.g. Li and Liang (2021)).
Smaller models (RoBERTa, ALBERT) compared to previous work.

TL;DR fine-tune some parameters to make prompt optimization less important.

> [Updating only bias terms] can achieve competitive or better few-shot accuracy
> than standard finetuning while only updating 0.1% of the parameters.

Manually-engineered prompts from previous work still outperform automated ones;
the latter can match manual w/ some caveats, e.g. Gao et al. (2021) achieve
comparable results using large generative models and careful validation.
Concatenating `input|[MASK]` (cf. A3) can perform similar to prompt engineering.


## Fine-tuning styles

*In-context* (IC) is the name for the prompt-only style few-shot learning.
LM remains frozen, you literally ask it to pattern-match your text:
> {Q1} and {Q2} have different meanings. {Q3} and {Q4} have similar meanings.
> {Q5} and {Q6} have [MASK] meanings.

*Prompt-only* does no parameter update, just searches for a good prompt:
* AutoPrompt
* Prompt tuning (short)
* Prompt tuning (long)

*Prompt-based finetuning* updates some or all LM parameters.
Seems to achieve better perf in previous work than IC with small models.
Their experiments with partial updates:
* Adapters, $$O(10^7)$$ params
* BitFit (theirs - update only bias term), $$O(10^5)$$ params
* LM head tuning, $$O(10^3)$$ params
* Affine transformation on top of the verbalizer token logits, $$O(10)$$ params

Trained on only 16 examples, BitFit performs best.
Seems adapters have too many params to be useful for this setting.

Previous work claims fine-tuning performs on par with prompt-only tuning, but
has been done only on LTR (GPT-style) and larger language models.
In their experiments prompt-only tuning fails miserably.


## Setup

Vocabulary of the pre-trained LM $$T \subseteq T^*$$.
Training pairs $$x_i \in X, y_i \in Y$$.
Pattern $$P: X \rightarrow T^*$$ maps inputs to cloze Qs (one `[MASK]` token).
Verbalizer $$v: Y \rightarrow T$$ maps label to in-vocab token.

Sample 2K examples/label, and determine best hyperparams w/ 4-fold CV. After
fixing hp's, train on the 1st K (=16) and early stop on the 2nd K examples.

> Since few-shot learning can be high variance, we sample the examples with 10
> different random seeds and report [metrics' mean and variance].

> Welch’s t-test to determine if there is a significant difference in accuracy
> for each pair of methods.


## Prompt styles

From Table A1 (Schick and Schutze, Gao et al.'s prompts).
Authors don't say how the prompts were obtained (validation on a dev dataset?).

| Data  | Prompt                                | Verbalizer
|-------|---------------------------------------|-------------------
| BoolQ | `{P}. Question: {Q}? Answer: [MASK]`  | true, false
| CB    | `{P}? [SEP] [MASK], {H}`              | yes, no, maybe
| MNLI  | `{S1}? [SEP] [MASK], {S2}`            | yes, no, maybe
| MRPC  | `{S1} and {S2} have [MASK] meanings`  | different, similar
| QNLI  | `{Q}? [SEP] [MASK], {S}`              | yes, no
| QQP   | `{Q1} and {Q1} have [MASK] meanings`  | different, similar
| SST-2 | `{S} It was [MASK]`                   | terrible, great


From Table A2. WTF MRPC and QQP, they bias the model to respond "the same"?

| Data  | Prompt                                         | Verbalizer
|-------|------------------------------------------------|----------------
| BoolQ | `Passage: {P} Question: {Q} Answer: [MASK]`    | true, false
| CB    | `Premise: {P} Hypothesis: {H} Label: [MASK]`   | yes, no, maybe
| MNLI  | `Premise: {S1} Hypothesis: {S2} Label: [MASK]` | yes, no, maybe
| MRPC  | `{S1} and {S2} are the [MASK]`                 | different, same
| QNLI  | `Question: {Q} Sentence: {S} Label: [MASK]`    | yes, no
| QQP   | `{Q1} and {Q1} are the [MASK]`                 | different, same
| SST-2 | `{S} overall my impression is [MASK]`          | bad, good


From Table A3 (null prompts). Why do they change the verbalizer?

| Data  | Prompt             | Verbalizer
|-------|--------------------|-------------------
| BoolQ | `{P} {Q} [MASK]`   | yes, no
| CB    | `{P} [MASK] {H}`   | yes, no, maybe
| MNLI  | `{S1} [MASK] {S2}` | yes, no, maybe
| MRPC  | `{S1} {S2} [MASK]` | different, similar
| QNLI  | `{Q} [MASK] {S}`   | yes, no
| QQP   | `{Q1} {Q1} [MASK]` | different, similar
| SST-2 | `{S} [MASK]`       | terrible, great


