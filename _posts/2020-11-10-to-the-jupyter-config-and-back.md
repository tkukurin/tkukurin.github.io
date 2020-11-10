---
title: "To the Jupyter config and back"
tags:
  - py
last_modified_at: 2020-11-10T13:42:00+01:00
published: true
---


Configure Jupyter from [`~/.jupyter/jupyter_notebook_config.py`](https://jupyter-notebook.readthedocs.io/en/stable/config.html).
Backend options can be found in `jupyter notebook --help`.

As of Nov 10, 2020 [frontend config is still WIP](https://jupyter-notebook.readthedocs.io/en/stable/frontend_config.html).
You can change things in some weird way via front-end JavaScript, though.

```javascript
var cell = Jupyter.notebook.get_selected_cell();
var config = cell.config;
var patch = {
  CodeCell : {
    cm_config: {indentUnit:2}
  }
}
config.update(patch)
```

Jupyter uses the [CodeMirror front-end](https://codemirror.net/doc/manual.html)
to render Python (NB, also check out the various
[hooks](https://codemirror.net/doc/manual.html#commands)).
Under the hood, Jupyter will persist the preferred configuration settings in
`~/.jupyter/nbconfig/<section>.json`, where section is not formalized but can be
at least some of `common`, `notebook`, `tree`, `editor`.
E.g. my current `notebook.json`:

```json
{
  "CodeCell": {
    "cm_config": {
      "indentUnit": 2,
      "tabSize": 2,
      "indentWithTabs": false
    }
  }
}
```

