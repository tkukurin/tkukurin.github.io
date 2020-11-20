---
title: "Psi: A Computational Architecture"
tags:
  - psy
  - research
last_modified_at: 2020-11-20T14:42:00+01:00
published: true
---


Psi (introduced 1999; [this paper 2013](https://www.researchgate.net/profile/Dietrich_Doerner/publication/260984170_PSI_A_Computational_Architecture_of_Cognition_Motivation_and_Emotion/links/0deec532dc59f52328000000/PSI-A-Computational-Architecture-of-Cognition-Motivation-and-Emotion.pdf))
is a formalized computational architecture that simulates cognitive,
motivational and emotional processes in their interactions.

Covers 14 of the 22 major areas of cognitive functioning (DARPA): memory,
learning, executive processes, language, sociality/emotion, consciousness,
knowledge representation, logical reasoning, elementary vision, object
perception, spatial perception, spatial cognition, attentional mechanisms, and
motivation.

>  Yet, we also would like to mention that certain psychological processes such
>  as language or self-reflection are not yet simulated in great detail in PSI.


Cf. also [MicroPsi implementation in Java](http://www.cognitive-ai.com/page2/page2.html),
[MicroPsi 2 in Python](https://github.com/joschabach/micropsi2).
[Microsoft's open-sourced Platform for Situated Intelligence (C#)](https://github.com/microsoft/psi).


![Psi framework sketch](/assets/img/2020-11-20-psi-brain.png)


## MicroPsi

[Bach's presentation](https://www.youtube.com/watch?v=rDnEoyye86A).
Featured in MicroPsi: Grounded representations,
emotions as configuration of the system,
motivation (system can set its own social/cognitive goals).
(Hyper-)Graph based architecture.
In paradigmatic, but not computational opposition
to logic, rule, neuromimetic, hybrid based systems -
*concept node* (essentially KB?) as a core building block.
Spreading activation (what?) nets as a special case of **message passing**.
An agent is a network of nodes.
Current applications: modeling human problem solving; social planning.
Hotheaven AG (Berlin School of Mind and Brain).


### Some general notes from the talk

AGI encompasses creativity, empathy, etc.
Cogsci morphed into neurosci, which is now concerned with AGI.
A combination of important topics:
* autonomous decision making, reflection, adaptation
* acquisition and control of internal complexity
* perceptual processing
* cognitive operations, language, logic
* environmental interaction (other agents & the world)
* resource management: attentional processing, [anytime characteristics (works even if interrupted before completion)](https://en.wikipedia.org/wiki/Anytime_algorithm)

Problems (MicroPsi is concerned with?):
* percept encoding (bottom up), hypothesis formation (top down), modal and amodal
* fuzzy processing (operations on mental representations; analogies)
* localist, combinatorial processing domains (?): planning, language, construction


