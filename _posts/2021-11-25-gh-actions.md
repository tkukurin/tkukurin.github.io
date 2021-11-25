---
title: "GitHub actions 101"
tags:
  - eng
  - automation
last_modified_at: 2021-11-25T23:42:00+01:00
published: true
---

What are GitHub actions? Sets of steps (= workflows) triggered by *events*.
GitHub hosts their virtual machines dedicated to serving GitHub-related
workflows in public repos (private cost \$\$\$).
Alternatively, you can also self-host [action runners (written in C#)](https://github.com/actions/runner).
Some terminology [based on the tutorial](https://docs.github.com/en/actions):

* Event: whatever triggers workflows (e.g. `on: [push]`)
* Runner: server w/ [GH actions runner installed](https://github.com/actions/runner).
  Also cf. [details on GitHub's virtual runners](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners)
* `workflow: [job1: [step1:[action1.1, a1.2, ...], s2:[a2.1, ...], ...]`
  * Actions run on the same runner; can share data. [Find actions](https://docs.github.com/en/actions/learn-github-actions/finding-and-customizing-actions)
  * Job history under the "actions" tab [reference](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#viewing-the-jobs-activity)


## Basic YAML to test Python (+ some unnecessary details for showcase)

```yaml
name: Python package
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    env:
      ADDITIONAL_INSTALL: pytorch
      FAKE_DB: ${{ secrets.DB_CREDENTIALS }}
    strategy:
      matrix:
        python-version: [3.6, 3.7, 3.8, 3.9]
    steps:
      - uses: actions/checkout@v2
      - name: Set up Python ${{ matrix.python-version }}
        uses: actions/setup-python@v2
        with:
          python-version: ${{ matrix.python-version }}
      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install flake8 pytest ${{ env.ADDITIONAL_INSTALL }}
          if [ -f requirements.txt ]; then pip install -r requirements.txt; fi
      - name: Lint with flake8
        run: |
          # stop the build if there are Python syntax errors or undefined names
          flake8 . --count --select=E9,F63,F7,F82 --show-source --statistics
          # exit-zero treats all errors as warnings. The GitHub editor is 127 chars wide
          flake8 . --count --exit-zero --max-complexity=10 --max-line-length=127 --statistics
      - name: Test with pytest
        run: |
          pytest
```


## Tidbits from the tutorial

[In complex workflows tutorial](https://docs.github.com/en/actions/learn-github-actions/managing-complex-workflows):
* secrets (`env.xyz: ${{ secrets.XYZ }}` [tutorial on creating them](https://docs.github.com/en/actions/security-guides/encrypted-secrets))
* dependent jobs (`jobs.setup: ... ; jobs.build.needs: setup` [reference](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds))
* build matrices
```
jobs:
  build:
    runs-on: ubuntu-latest
    strategy.matrix.node: [6, 8, 10]
    steps:
      - uses: actions/setup-node@v2
        with.node-version: ${{ matrix.node }}
```
* caching dependencies across workflows in a repo (`actions/cache@v2`)

You can share workflow templates within an org in a `.github` repository.
[Create a `workflow-templates` directory](https://docs.github.com/en/actions/learn-github-actions/creating-workflow-templates)
and put `name-ci.yaml` and `name-ci.properties.json` in it.
[Templates can be inited from the "Actions" tab](https://docs.github.com/en/actions/learn-github-actions/using-workflow-templates).

[Environment variables via `env.X` and `${{ env.X }}`](https://docs.github.com/en/actions/learn-github-actions/environment-variables).

Also see [guides for specific use-cases](https://docs.github.com/en/actions/guides).

