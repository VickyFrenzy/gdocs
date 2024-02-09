<script lang="ts">
  import { link } from "svelte-spa-router";
  import { parsedData } from "../stores";
  import type { FunctionReturns } from "../utils/parsed";

  export let types: string;
  export let list: boolean = false;

  interface FiteredTypes {
    label: string;
    link: string;
  }

  const filterTypes = (): FiteredTypes[] => {
    let result: FiteredTypes[] = [];
    let searchTypes = types.split("|");
    let category_types = $parsedData?.category_types;
    let project = $parsedData?.structure;

    if (category_types && project) {
      // Loop over category_types and searchTypes only once
      for (const cat of category_types) {
        for (const type of searchTypes) {
          if (project[cat]?.subcategories[type] !== undefined) {
            result.push({
              label: type,
              link: `/${cat}/${type}`,
            });
            // Remove the type from searchTypes to save unnecessary loops
            searchTypes.splice(searchTypes.indexOf(type), 1);
          }
        }
      }

      // Add links for remaining searchTypes
      for (const type of searchTypes) {
        result.push({
          label: type,
          link: `https://wiki.facepunch.com/gmod/${type}`,
        });
      }
    }

    return result;
  };

  $: filteredTypes = types ? filterTypes() : [];
</script>

{#each filteredTypes as type, i}
  {#if type.link.startsWith("https")}
    <a href={type.link}>{type.label}</a>
  {:else}
    <a use:link href={type.link}>{type.label}</a>
  {/if}
  {#if i < filteredTypes.length - 1}
    {#if list}
      <span>{" or "}</span>
    {:else}
      <span>{", "}</span>
    {/if}
  {/if}
{/each}

<style>
  span {
    white-space: pre;
  }
</style>
