---
title: "Building Athens Research (Clojure/JS)"
tags:
  - tools
last_modified_at: 2021-04-16T15:42:00+01:00
published: true
---

I have no idea how Clojure frontend works.
This is a writeup process of me trying to figure out how to build
[Athens](https://github.com/athensresearch/athens).


## Tooling

Athens is a Roam-like opensource personal knowledge base written in Clojure and
compiled via [shadow-cljs](https://shadow-cljs.github.io/docs/UsersGuide.html)
which is like a Clojure-to-JS transpiler (?)
consisting of [a JAR](https://github.com/thheller/shadow-cljs)
and an `npm` interface.
Cf. [ClojureScript](https://clojure.org/about/clojurescript)
and [initial Athens commit](https://github.com/athensresearch/athens/tree/688d5b1a36b5a13c635430d7d364d52d9dbe410d/src/cljs/athens).

Apparently you'll also need [Leiningen](https://leiningen.org/)
which is some dependency/config/project manager for Clojure.
> Leiningen manages projects for you. Lein takes care of pulling in dependencies
> (including Clojure itself), running the REPL, running your program and its
> tests, packaging your program for distribution, and other administrative tasks


## Building

First install required dependencies via Node using `npm install`.
[Current Athens commit](https://github.com/athensresearch/athens/commit/0eef6e234aa50c9c1d56a0f6c808006eb6093e5c)
has conflicting deps and produces scary messages like:
```
Could not resolve dependency:
peer react@">=16.13.1" from react-kapsule@2.2.1
```

So hack around this by setting [`package.json`](https://github.com/athensresearch/athens/blob/0eef6e234aa50c9c1d56a0f6c808006eb6093e5c/package.json#L70)
to `">=16.9.0"` and hope it doesn't break anything.

Then use `npm execute` alias `npx shadow-cljs` (which will auto-download the
`shadow-cljs` binary) to build the actual app.
Builds are described using [EDN format](https://learnxinyminutes.com/docs/edn/).
E.g. `npx shadow-cljs release app` will transpile the Clojure code into
`resources/public/js/compiled/app.js` as per [this config](https://github.com/athensresearch/athens/blob/688d5b1a36b5a13c635430d7d364d52d9dbe410d/shadow-cljs.edn).

Useful commands:
```bash
$ npx shadow-cljs help
$ npx shadow-cljs compile app
$ npx shadow-cljs start
```

Starting the `shadow-cljs` server apparently also runs some sort of build
front-end on `localhost:9630`.

After compiling `app` and heading to `localhost:3000`, things should work.

