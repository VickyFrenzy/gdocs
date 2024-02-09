import { writable } from "svelte/store";
import type { ParsedData } from "./utils/parsed";

// Create a writable store to hold parsed JSON data
export const parsedData = writable<ParsedData | null>(null);
