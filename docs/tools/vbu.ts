import { visualizer } from "npm:rollup-plugin-visualizer";
import { join } from "https://deno.land/std@0.215.0/path/mod.ts";
import { parseArgs } from "https://deno.land/std@0.215.0/cli/parse_args.ts";
import { build } from "npm:vite";

const start = async ({
  help,
  template = "treemap",
  open,
  output,
  config,
  entry,
  sourcemap = false,
}) => {
  if (help) {
    return;
  }

  // fallback to 'raw-data'
  if (template === "json") {
    template = "raw-data";
  }

  // Import from the current working directory's node_modules
  //   const { build } = await import("../node_modules/vite/bin/vite.js");

  let outFile;

  if (template === "raw-data") {
    outFile = output.replace(/\.html$/, ".json");
    open = false;
  } else if (template === "list") {
    outFile = output.replace(/\.html$/, ".yml");
    open = false;
  } else {
    outFile = output;

    // Only open it if the command is passed an it is an html file.
    if (open) {
      open = output.endsWith(".html");
    }
  }

  const viteBuildOptions = {};

  if (entry || sourcemap) {
    viteBuildOptions.rollupOptions = {};
    if (entry !== undefined) {
      viteBuildOptions.rollupOptions.input = {
        app: entry,
      };
    }
    if (sourcemap !== undefined) {
      viteBuildOptions.sourcemap = sourcemap;
    }
  }

  console.log(`Using options:  template=${template}`);

  await build({
    configFile: config,
    plugins: [
      {
        ...visualizer({
          open,
          filename: outFile,
          title: "Vite Bundle Visualizer",
          template,
          brotliSize: true,
          gzipSize: true,
          sourcemap,
        }),
        enforce: "post",
      },
    ],
    build: {
      ...viteBuildOptions,
    },
  });

  // Fix encoding for list template
  if (template === "list") {
    const encoder = new TextEncoder();
    const decoder = new TextDecoder("utf-8");

    let content = decoder.decode(await Deno.readFile(outFile));
    content = content.replaceAll("\0", "");

    const data = encoder.encode(content);

    await Deno.writeFile(outFile, data);
  }
  console.log(`\nGenerated at ${outFile}`);
};

// export default start;

const args = parseArgs(Deno.args);

const DEFAULT_OUTPUT = join(Deno.cwd(), "stats.html");

const {
  _: [command],
  template,
  t,
  help,
  h,
  output,
  o,
  open,
  config,
  c,
  entry,
  i,
  sourcemap,
} = args;

if (help || h) {
  console.log("Usage: deno run -A tools/vbu.ts [options]");
  // Print out usage guide
  Deno.exit(0);
}

await start({
  help,
  template: template || t || "treemap",
  output: output || o || DEFAULT_OUTPUT,
  open: open === true || open === "true" || Number(open) > 0,
  config: config || c,
  entry: entry || i,
  sourcemap,
});

console.log("Done, check your stats.html file");
