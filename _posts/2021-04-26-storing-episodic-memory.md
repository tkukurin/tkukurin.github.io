---
title: "Storing episodic memory: place and grid cells"
tags:
  - neuro
last_modified_at: 2021-08-06T00:42:00+01:00
published: true
---

The [entorhinal cortex (EC)–hippocampal (HPC) network](http://learnmem.cshlp.org/content/22/9/438.full.html)
plays an essential role for episodic memory, which preserves spatial and
temporal information about the occurrence of past events.
EC provides by far the largest input to the hippocampus; anatomical studies show
different sectors of the EC project to different levels of the hippocampus.
Hippocampus is essential in episodic memory.

![EC-HPC network](https://www.researchgate.net/profile/Akiva-Cohen-4/publication/233773954/figure/fig1/AS:299969257984006@1448529652967/Hippocampal-Circuit-Diagram.png)

[**Place cells**](https://en.wikipedia.org/wiki/Place_cell) (discovered 1971)
are [pyramidal neurons](https://en.wikipedia.org/wiki/Pyramidal_cell)
(primary excitation units of the PFC) that act as a cognitive representation of
a *specific environment region* (**place field, PF**). Reorganize when the
subject is moved to a different environment, ~proportional to env change.
Sometimes show directionality (only fire in a location for a particular subject
direction), cf. [radial arm maze](https://en.wikipedia.org/wiki/Radial_arm_maze).
Argued to encode successor representations in [recent work](https://www.biorxiv.org/content/biorxiv/early/2017/07/27/097170.full.pdf).

Discovery confirmed [Tolman's theories on cognitive maps](https://en.wikipedia.org/wiki/Edward_C._Tolman).

**Remapping**: loss or gain of a PF. PF characteristics change when a subject
experiences a new environment, or the same one in a new context (changing env
size, wall color, smells, rewards at location). Possibly plays a role in the
memory function of the hippocamputs. Global (most cells remap) or partial.

> This phenomenon was first reported in 1987, and is thought to play a
> role in the memory function of the hippocampus. There are broadly two types of
> remapping: global remapping and partial remapping. When global remapping
> occurs, most or all of the place cells remap, meaning they lose or gain a
> place field, or their place field changes its location. Partial remapping
> means that most place fields are unchanged and only a small portion of the
> place cells remap. Some of the changes to the environment that have been shown
> to induce remapping include changing the shape or size of the environment, the
> color of the walls, the smell in the environment, or the relevance of a
> location to the task at hand

> We recorded activity from CA3 in 11 environments with nearly identical
> geometric features. Spatial firing patterns remained uncorrelated across all
> 55 pairs of environments, with minimal overlap in the populations of active
> cells. [Source](https://www.pnas.org/content/111/52/18428)

[**Grid cells**](https://en.wikipedia.org/wiki/Grid_cell) (found 2005 in EC)
fire at regular intervals *across the entire environment*, storing info about
location, distance, and direction. Seems to assist keeping track of location in
absence of sensory input. Cf. [recent work by DeepMind](https://www.biorxiv.org/content/10.1101/2020.11.11.378141v1)
on modeling this relation via RNNs. [Place cells, grid cells, and memory](https://www.researchgate.net/publication/272839931_Place_Cells_Grid_Cells_and_Memory).
Grid cells from deeper layers are intermingled with conjunctive cells and head
direction (HD) cells.

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

