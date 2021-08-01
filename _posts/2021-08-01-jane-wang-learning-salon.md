---
title: "Learning salon: Jane Wang"
tags:
  - neuro
  - rl
last_modified_at: 2021-08-01T16:42:00+01:00
published: true
---

[Jane Wang on the Learning salon](https://www.youtube.com/watch?v=zH615GQTbnk).
Some of her interesting works:
* [Meta-learning in natural and artificial intelligence](https://arxiv.org/pdf/2011.13464.pdf)
* [PFC as a meta-RL system](https://www.biorxiv.org/content/biorxiv/early/2018/04/06/295964.full.pdf)
  * TL;DR: Dopamine modulates PFC, which learns task structure.

Meta-learning as **priors learned from previous experience that help inform
faster learning or better decisions**. [@7m24s](https://youtu.be/zH615GQTbnk?t=7m24s)
Also from [overview of meta learning](https://lilianweng.github.io/lil-log/2019/06/23/meta-reinforcement-learning.html):
> After trained over a distribution of tasks, the agent is able to solve a new
> task by developing a new RL algorithm with its internal activity dynamics.

Meta-learning in ML [@9m50s](https://youtu.be/zH615GQTbnk?t=9m50s)
1. Gradient-based, e.g. [Model-Agnostic Meta Learning (MAML)](https://arxiv.org/abs/1703.03400).
   Also cf. [Tom Zahavy's work at DeepMind](https://deepmind.com/research?filters_and=%7B%22authors%22:%5B%225378678464970752%22%5D%7D)
   and [Robert Lange's overview](https://towardsdatascience.com/meta-policy-gradients-a-survey-78dc742d395d).
2. Non-parametric, e.g. [Matching nets (Vinyals)](https://arxiv.org/abs/1606.04080)
3. Blackbox / memory based (LSTM that tunes inner learner),
   e.g. [Jane's work on PFC as a meta-RL system](https://www.biorxiv.org/content/biorxiv/early/2018/04/06/295964.full.pdf)

Memory-based Learning to RL (L2RL). [@11m55s](https://youtu.be/zH615GQTbnk?t=11m55s)
Concept of having two loops.
Harlow task that [Botvinick also likes to discuss](https://www.youtube.com/watch?v=b0LddBiF5jM),
[@13m14s](https://youtu.be/zH615GQTbnk?t=13m14s).
Monkey able to "one-shot" pick the correct object after initial structure
learning. They applied this to RL agents (freeze NN). [@15m22s](https://youtu.be/zH615GQTbnk?t=15m22s)
[Curious: did anyone try to do Harlow's experiments with more complicated tasks?
E.g. every 2nd time the correct object is green or something. I guess that'd be
testing monkey's intelligence moreso than ability to meta-learn.]

Neurosci: [@20m3s](https://youtu.be/zH615GQTbnk?t=20m3s)
1. Innate (priors): place cells, intuitive physics, motoric, language propensity
2. Learned behavior: can arise out of innate processes

Schema learning: knowledge more easily acquired if you already have a framework
on which to scaffold that knowledge. [Schemas and memory consolidation (2007)](https://pubmed.ncbi.nlm.nih.gov/17412951/).
No free lunch. Inductive biases help with faster learning *only in structured
environments*, when you can make assumptions about future problems.

Open questions in meta-learning:
* Which inductive biases, where from?
* Do we need to learn them only once?
* Does having memory automatically result in meta learning?
  * Is everything meta-learning? [@33m7s](https://youtu.be/zH615GQTbnk?t=33m7s)
  * In the brain, all signals get mixed up [@41m31s](https://youtu.be/zH615GQTbnk?t=41m31s)
* OOD generalization.


## Discussion

Is "DeepMind + their algorithm" the real meta-learning?

Jane: meta-learning is easier to evaluate than continual learning.

Ida: There is a clear mathematical notion of meta-learning.
Neuroscience/psych idea of meta-learning is more relaxed. [@47m58s](https://youtu.be/zH615GQTbnk?t=47m58s)
There's no one psych. fn. in humans corresponding to meta-learning. [@1h47m43s](https://youtu.be/zH615GQTbnk?t=1h47m43s)
* ML algos learning from other ML algos.
* Stacking / ensemble learning.
* Multi-task learning.

John: a lot of phenomena looking like meta-learning are just retrieval. [@50m19s](https://youtu.be/zH615GQTbnk?t=50m19s)
Hard to disambiguate retrieval of previous experience vs. meta. [@57m8s](https://youtu.be/zH615GQTbnk?t=57m8s)
[I guess he's talking about a person recognizing "I've already done this task".]
There is a single "impulse" where agents "learn" the task. [@53m34s](https://youtu.be/zH615GQTbnk?t=53m34s)

John: What is a task? Is there a hidden shared structure? [@58m20s](https://youtu.be/zH615GQTbnk?t=58m20s)
How do we get a generalization-free notion of "task"?
Jane: meta-learning task have notorious weaknesses.
There is no good theory to formulate how related two tasks are.
Let's instead say "everything is a task distribution".
[That doesn't actually help that much though?]
Characterize learning instead of focusing on pure metrics. [@1h35m36s](https://youtu.be/zH615GQTbnk?t=1h35m36s)
E.g. we haven't yet characterized GPT-3.
Task as a "set of parametrizations of an environment" [@1h51m25s](https://youtu.be/zH615GQTbnk?t=1h51m25s),
a bit like what DM is currently doing in their [Open-Ended Learning Team](https://deepmind.com/research/publications/open-ended-learning-leads-to-generally-capable-agents).

John: about coaching. [@1h1m23s](https://youtu.be/zH615GQTbnk?t=1h1m23s)
Good teachers "project" meta learning?
[I think it's about a particular way of presenting knowledge. Good teachers
capture a good way to model the distribution of learners.]

Ida: [Sakai and Passingham](https://www.jneurosci.org/content/26/4/1211) discuss
task "domains" and "rules." [@1h5m35s](https://youtu.be/zH615GQTbnk?t=1h5m35s)
E.g. domain of numbers, but rule can be font color or the actual quantity.
Descriptive quality in cogsci is much richer than what exists in ML.
We should enrich how tasks and distributions of tasks are defined.

Rules for generalizing? [@1h9m3s](https://youtu.be/zH615GQTbnk?t=1h9m3s)
Jane: When you meta-learn something, you narrow down on a set of hypotheses.

Meta learning works assuming underlying task structure similarity. [@1h12m50s](https://youtu.be/zH615GQTbnk?t=1h12m50s)
In the case of unrelated tasks, you still need a lot of data.
Ida: transfer learning and meta learning is not the same.
The task of the meta-learner is different.
The goal of the meta-learner is to set the params of your base learner.

Question about evolution being a sort of meta-learning. [@1h20m14s](https://youtu.be/zH615GQTbnk?t=1h20m14s)

John: Learning requires plasticity, but a plastic change doesn't imply learning.
*Something needs to have phsyically changed* for learning to happen. [@1h26m12s](https://youtu.be/zH615GQTbnk?t=1h26m12s)

Melanie: meta-evolution (mutation has its own parameters).
Genetically, they are represented in the same way (?).
Are learning and meta-learning different mechanisms? [@1h29m38s](https://youtu.be/zH615GQTbnk?t=1h29m38s)

John: no. [@1h30m54s](https://youtu.be/zH615GQTbnk?t=1h30m54s)
**Cerebellar mechanism** learns task structure the 1st time.
**Basal ganglia dependent mechanism** is responsible for retrieval.
Patients with Alzheimers don't perform better repeating tasks cmp. to control.
*Initial learning* and *subsequent meta learning* processes are dissociated.

Base and meta learners could be from the same set of learners, so long as the
meta learner has access to some task distribution as input.
In the brain, no species have an equally evolved PFC.

Automatic vs controlled processing. [@1h40m47s](https://youtu.be/zH615GQTbnk?t=1h40m47s)
How might it relate to psychological constructs?
Can learning systems affect each other?

John: within-task vs. between-task learning. [@1h43m44s](https://youtu.be/zH615GQTbnk?t=1h43m44s)
Don't try to play Rachmaninoff's 3rd first time you sit by a piano.
Meta-learning seems to be morphing to "intelligence" in this salon. [@1h57m29s](https://youtu.be/zH615GQTbnk?t=1h57m29s)
"Going beyond what you've already learned".
[Yes, to some extent meta-learning *is* exactly intelligence.]

