import { bundle } from "https://deno.land/x/emit@0.36.0/mod.ts";
import { transform } from "https://deno.land/x/esbuild@v0.20.0/mod.js";

const result = await bundle(
  new URL("../src/main.ts", import.meta.url),
);
const { code } = result;

Deno.writeTextFileSync(
  new URL("../build/parser.js", import.meta.url),
  code,
);

const minified = await transform(code, {
  minify: true,
});

Deno.writeTextFileSync(
  new URL("../build/parser.min.js", import.meta.url),
  minified.code,
);

Deno.exit(0);
