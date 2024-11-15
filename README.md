# Bundy

This is an ultra light wrapper around [deno_emit](https://github.com/denoland/deno_emit).
It effectively provides a drop-in replacement for code that was relying on `deno bundle`.

Command line invocations that previously looked like:

```sh
deno bundle input.ts -- output.js
```

Can be replaced with:

```sh
deno run -A https://raw.githubusercontent.com/jflatow/bundy/refs/heads/master/cli.ts input.ts > output.js
```
