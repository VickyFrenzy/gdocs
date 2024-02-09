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
const directories: string[] = typeof args.d === "string"
  ? [args.d]
  : args.d instanceof Array
  ? args.d
  : [];
const config = typeof args.config === "string"
  ? [args.config]
  : args.config instanceof Array
  ? args.config
  : [];

if (config.length > 1) {
  throw new Error(
    "Multiple config files specified. Please only specify one file.",
  );
} else if (config.length === 1) {
  const decoder = new TextDecoder("utf-8");
  const configContent = Deno.readFileSync(
    join(import.meta.url, "..", config[0]),
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

Deno.writeFileSync(
  join(Deno.cwd(), "..", "builder", "src", "parsed.json"),
  data,
);
