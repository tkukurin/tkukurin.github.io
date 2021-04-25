---
title: "Storing episodic memory"
tags:
  - neuro
last_modified_at: 2021-04-26T00:42:00+01:00
published: true
---

The [entorhinal cortex (EC)–hippocampal (HPC) network](http://learnmem.cshlp.org/content/22/9/438.full.html)
plays an essential role for episodic memory, which preserves spatial and
temporal information about the occurrence of past events.

![EC-HPC network](https://www.researchgate.net/profile/Akiva-Cohen-4/publication/233773954/figure/fig1/AS:299969257984006@1448529652967/Hippocampal-Circuit-Diagram.png)

[**Place cells**](https://en.wikipedia.org/wiki/Place_cell) (discovered 1971)
are [pyramidal neurons](https://en.wikipedia.org/wiki/Pyramidal_cell)
(primary excitation units of the PFC) that act as a cognitive representation of
a *specific region of an environment*. They reorganize when a rat is moved to
a different environment (~proportional to change in environment).

> We recorded activity from CA3 in 11 environments with nearly identical
> geometric features. Spatial firing patterns remained uncorrelated across all
> 55 pairs of environments, with minimal overlap in the populations of active
> cells. [Source](https://www.pnas.org/content/111/52/18428)

[**Grid cells**](https://en.wikipedia.org/wiki/Grid_cell) (discovered 2005)
fire at regular intervals *across the entire environment*, storing info
about location, distance, and direction. Seemingly assists keeping track of
location in absence of sensory input. Cf. [recent work by DeepMind](https://www.biorxiv.org/content/10.1101/2020.11.11.378141v1)
on modeling this relation via RNNs, as well as [Place cells, grid cells, and
memory](https://www.researchgate.net/publication/272839931_Place_Cells_Grid_Cells_and_Memory).

> Grid patterns appear on the first entrance of an animal into a novel
> environment, and usually remain stable thereafter. When an animal is moved
> into a completely different environment, grid cells maintain their grid
> spacing, and the grids of neighboring cells maintain their relative offsets

![Place vs grid cell](https://i.pinimg.com/originals/81/5b/22/815b223332097504df6285d56a192375.png)

Centers of grid cells' firing fields produce a triangular grid.

> Every time the cell fires a spike, there is a dot placed at the location in
> space where the animal was at the time of the spike. You let the animal run
> through the maze and get a record of lots of these points. [source](https://biology.stackexchange.com/questions/64957/understanding-the-concept-of-a-place-field-and-the-difference-between-place-ce)

![Grid cells form triangular shapes](https://i.stack.imgur.com/n5axH.png)

Cf. also [The Hippocampus, Memory, and Place Cells](https://www.cell.com/neuron/fulltext/S0896-6273%2800%2980773-4) (1999).
for an overview + history (note, paper written pre-grid cells).

> [...] spatial information was encoded within the cellular activity of the very
> hippocampal structures that are necessary for spatial learning and memory

> one can readily correlate dramatic increases in a place cell’s firing rate
> when the rat arrives at a particular location, called the “place field.” From
> a baseline of <1 spike/s, the firing rate can exceed 100 Hz

> cognitive mapping may be only a specific example of a more general hippocampal
> function

