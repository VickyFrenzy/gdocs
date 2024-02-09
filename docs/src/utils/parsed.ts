import { parsedData } from "../stores";

export interface FunctionParameters {
  name: string;
  type: string;
  description: string;
}

export interface FunctionReturns {
  type: string;
  description: string;
}

export interface FunctionPage {
  name: string;
  description?: string;
  parameters?: FunctionParameters[];
  returns?: FunctionReturns[];
  examples?: string[];
  realm?: string;
  internal?: boolean;
  item: "function";
}

export interface FieldInfo {
  type: string;
  key: string;
  description: string;
}

export interface TablePage {
  name: string;
  description?: string;
  fields?: FieldInfo[];
  realm?: string;
  internal?: boolean;
  item: "table";
}

export type ValidSubcategory = Category | FunctionPage | TablePage;

export interface Category {
  name: string;
  description?: string;
  fields?: FieldInfo[];
  subcategories: {
    [key: string]: ValidSubcategory;
  };
  item: "category";
}

export interface ProjectStructure {
  [key: string]: Category;
}

export interface ParsedData {
  title: string;
  structure: ProjectStructure;
  category_types: string[];
}

export async function fetchParsedData(): Promise<ParsedData> {
  const response = await fetch("parsed.json");
  const data = await response.json();
  parsedData.set(data);
  return data;
}
