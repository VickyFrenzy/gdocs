# GDocs Next

[router docs](https://github.com/italypaleale/svelte-spa-router).

Rewrite of the `builder` to Svelte.
Using :

- marked (the lighter markdown parser tested so far)
- prismjs (lighter on the bundle size)
- svelte (it's cool)
- svelte-spa-router (it works like the original react spa router)
- TypeScript (Everything was typed so let's continue)

Major behaviour difference from the original is the way it loads the `parsed.json` dynamically at runtime and not at build. No need to rebuild at every release !

## Usage

Just drop your `parsed.json` to the `dist` dir and enjoy. You can run `deno task preview` to test it live

## Rebuild to prod

`deno task build`

## Dev on it

`deno task dev`
