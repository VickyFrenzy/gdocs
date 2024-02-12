import { DocBlock } from "../Parser/Tags.ts";
import { get_multiple, get_unique } from "../../utils/functions.ts";

export interface FieldInfo {
  type: string;
  key: string;
  description: string;
}

export default class TablePage {
  readonly item: "table";
  readonly fields?: FieldInfo[];
  readonly realm?: string;
  readonly internal?: boolean;
  readonly deprecated?: boolean;
  readonly stub?: boolean;

  constructor(
    public readonly name: string,
    public readonly description?: string,
    block: DocBlock = {},
  ) {
    const fields: FieldInfo[] = get_multiple(block, "field").map(
      (field) => ({
        type: field[0],
        key: field[1],
        description: field[2],
      }),
    );
    this.fields = fields.length > 0 ? fields : undefined;
    this.realm = get_unique(block, "realm");
    this.internal = get_unique(block, "internal") === "true" ? true : undefined;
    this.deprecated = get_unique(block, "deprecated") === "true"
      ? true
      : undefined;
    this.stub = get_unique(block, "stub") === "true" ? true : undefined;

    this.item = "table";
  }

  print(level = 0) {
    console.log("    ".repeat(level) + this.name);
  }
}
