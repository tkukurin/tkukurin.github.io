---
title: "Python servers and WSGI"
tags:
  - eng
  - py
last_modified_at: 2021-04-28T23:42:00+01:00
published: true
---

Python servers (e.g. [Gunicorn](https://github.com/benoitc/gunicorn/blob/master/gunicorn/app/wsgiapp.py))
nowadays I guess mostly implement the [WSGI](https://wsgi.readthedocs.io/en/latest/what.html)
protocol spec. WSGI was originally motivated by the need to consolidate
[a growing list of Python web frameworks](https://www.python.org/dev/peps/pep-3333/#original-rationale-and-goals-from-pep-333),
kinda similar to Java's servlet API, and apparently succeeded in its goals.

WSGI flow:
(1) client sends HTTP requests (does it have to be HTTP? Not sure) over the
internet; (2) for each request, server calls `app(env, start_response)`; (3)
Web application responds by calling `start_response(status, headers, exc=None)`
and then yields response strings.

Running a simple WSGI server will yield a working response.
Luckily [`wsgiref`](https://docs.python.org/3/library/wsgiref.html)
is a part of Python since 2.5 (also cf. [Django](https://github.com/django/django/blob/6e742dabc95b00ba896434293556adeb4dbaee8a/django/core/servers/basehttp.py)).
The simplest server implementation:

```python
from wsgiref.simple_server import make_server

def app(environ, start_response):
  start_response('200 OK', [('Content-type', 'text/plain; charset=utf-8')])
  yield 'Heyo'.encode('utf-8')
  yield from (f'{k}:{v}\n'.encode("utf-8") for k, v in environ.items())

class PointOutVimMiddleware:
  def __init__(self, app):
    self.app = app
  def __call__(self, env, start_response):
    for part in self.app(env, start_response):
      yield part + ('<---' if 'vim' in part else '')

app = PointOutVimMiddleware(app)
with make_server('', 8000, app) as httpd:
  httpd.serve_forever()
```

Ta-daa, there is a WSGI webserver.
[Similar description in Django's official docs](https://docs.djangoproject.com/en/3.2/howto/deployment/wsgi/).

For server internals, cf. [`server.py`](https://github.com/python/cpython/blob/3cc481b9de43c234889c8010e7da3af7c0f42319/Lib/http/server.py).
The [`serve_forever`](https://github.com/python/cpython/blob/b5711c940f70af89f2b4cf081a3fcd83924f3ae7/Lib/socketserver.py#L215)
method of `socketserver.py` does what you'd expect it to.


## GUnicorn

Seems [Green Unicorn](https://docs.gunicorn.org/en/latest/index.html)
is one of the more popular threading servers for Python.

From [the code](https://github.com/benoitc/gunicorn).
[Worker class](https://github.com/benoitc/gunicorn/blob/cf55d2cec277f220ebd605989ce78ad1bb553c46/gunicorn/config.py#L121)
loaded from config.
`BaseApplication`
[calls](https://github.com/benoitc/gunicorn/blob/cf55d2cec277f220ebd605989ce78ad1bb553c46/gunicorn/app/base.py#L72)
the worker-managing
[Arbiter](https://github.com/benoitc/gunicorn/blob/cf55d2cec277f220ebd605989ce78ad1bb553c46/gunicorn/arbiter.py#L21).
Arbiter [spawns workers](https://github.com/benoitc/gunicorn/blob/cf55d2cec277f220ebd605989ce78ad1bb553c46/gunicorn/arbiter.py#L567)
while jobs are available.
Cf. its [master loop](https://github.com/benoitc/gunicorn/blob/cf55d2cec277f220ebd605989ce78ad1bb553c46/gunicorn/arbiter.py#L196),
which does periodic [checkups](https://github.com/benoitc/gunicorn/blob/cf55d2cec277f220ebd605989ce78ad1bb553c46/gunicorn/arbiter.py#L208)
on worker health.
If no workers are available, master goes to sleep and [waits on pipe input](https://github.com/benoitc/gunicorn/blob/cf55d2cec277f220ebd605989ce78ad1bb553c46/gunicorn/arbiter.py#L351)
(cf. [wakeup](https://github.com/benoitc/gunicorn/blob/cf55d2cec277f220ebd605989ce78ad1bb553c46/gunicorn/arbiter.py#L334))
Workers that [exceed some predefined timeout threshold](https://github.com/benoitc/gunicorn/blob/cf55d2cec277f220ebd605989ce78ad1bb553c46/gunicorn/arbiter.py#L499)
are sent the kill signal and aborted.
Then the size of the currently active threadpool is adjusted.
E.g. [spawn new or kill extra workers](https://github.com/benoitc/gunicorn/blob/cf55d2cec277f220ebd605989ce78ad1bb553c46/gunicorn/arbiter.py#L545).
NOTE: seems weird they sort and pop [from start of list](https://github.com/benoitc/gunicorn/blob/cf55d2cec277f220ebd605989ce78ad1bb553c46/gunicorn/arbiter.py#L554).
Could possibly be extremely inefficient here.


## In practice

I guess vanilla Python server implementations might use something like
[supervisor](http://supervisord.org/introduction.html) or systemd
to manage and monitor,
[nginx to proxy](https://docs.gunicorn.org/en/latest/deploy.html),
gunicorn as server,
and then a framework such as Django for the actual business logic implementation.

That's kind of what [Django docs](https://docs.djangoproject.com/en/3.2/howto/deployment/wsgi/gunicorn/)
seem to advocate, anyway.
OK cool.

