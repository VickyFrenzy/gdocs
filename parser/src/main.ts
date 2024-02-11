import { join } from "https://deno.land/std@0.215.0/path/mod.ts";
import CategoryProject from "./classes/Project/CategoryProject.ts";
import { parseArgs } from "https://deno.land/std@0.215.0/cli/parse_args.ts";
import Category from "./classes/Project/Category.ts";

/**************************************************************** */

interface TabDefinition {
  name?: string;
  icon?: string;
  tag_name?: string;
  has_subcategory?: boolean;
  global_tag?: boolean;
  include_name_tag?: boolean;
  extras?: string[];
}

const icons: {
  [key: string]: string;
} = {};
const project = new CategoryProject();
const args = parseArgs(Deno.args); // parseArgs(process.argv.slice(2));

if (args.h) {
  console.log(
    `Usage: parse [-h] [-o OUTPUT_PATH] [-d DIRECTORY] [-config CONFIG_FILE]

Options:
  -h, --help
                        Show this help message and exit.
  -o OUTPUT_PATH, --output OUTPUT_PATH
                        Set the output path. Default is current working directory.
  -f FILENAME, --filename FILENAME
                        Set the filename. Default is 'parsed.json'.
  -d DIRECTORY, --directory DIRECTORY
                        Specify the directory to parse.
  -c CONFIG_FILE, --config CONFIG_FILE
                        Specify the configuration file to use.`,
  );
  Deno.exit(0);
}

const _d = args.c ? args.c : args.directory ? args.directory : null;
const directories: string[] = typeof _d === "string"
  ? [_d]
  : _d instanceof Array
  ? _d
  : [];

const _c = args.c ? args.c : args.config ? args.config : null;
const config = typeof _c === "string" ? [_c] : _c instanceof Array ? _c : [];

if (config.length > 1) {
  throw new Error(
    "Multiple config files specified. Please only specify one file.",
  );
} else if (config.length === 1) {
  const decoder = new TextDecoder("utf-8");
  const configContent = Deno.readFileSync(
    join(Deno.cwd(), config[0]),
  );
  const configJSON = JSON.parse(decoder.decode(configContent));

  if (configJSON.title && typeof configJSON.title === "string") {
    project.set_title(configJSON.title);
  }

  const tabs = configJSON.tabs instanceof Array ? configJSON.tabs : [];
  tabs.forEach((tab: TabDefinition) => {
    if (!tab.name) {
      throw new Error("One of the tabs in the config is missing a name.");
    }

    if (tab.icon) {
      icons[tab.name] = tab.icon;
    }

    project.add_category(
      new Category(tab.name),
      tab.has_subcategory === undefined ? true : tab.has_subcategory,
      tab.tag_name,
      tab.global_tag,
      tab.include_name_tag,
      tab.extras,
    );
  });
}

/* Parse & Output */
directories.forEach((directory) => {
  project.parse(join(Deno.cwd(), directory));
});

const encoder = new TextEncoder();
const data = encoder.encode(JSON.stringify(
  {
    category_types: project.category_types,
    structure: project.structure,
    title: project.title,
    icons: icons,
  },
  undefined,
  4,
));

const filename = args.f
  ? args.f
  : args.filename
  ? args.filename
  : "parsed.json";
const outputPath = args.o ? args.o : args.output ? args.output : Deno.cwd();
Deno.writeFileSync(
  join(outputPath, filename),
  data,
);
