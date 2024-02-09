<script lang="ts">
  import { getContext, onDestroy, onMount } from "svelte";
  import NotFound from "./NotFound.svelte";
  import type { ProjectStructure } from "../utils/parsed";
  import { parsedData } from "../stores";
  import Function from "../views/Function.svelte";
  import { location } from "svelte-spa-router";
  import Category from "../views/Category.svelte";
  import Table from "../views/Table.svelte";

  export let params: {
    tab: string;
    category: string;
    subcategory: string;
  };

  let loaded = false;

  let category_object;
  let exists: boolean = false;
  let item: any;

  let project: ProjectStructure = {};

  const refreshData = () => {
    category_object = project[params.tab]?.subcategories?.[params.category];

    exists =
      category_object !== undefined &&
      (!params.subcategory ||
        ("subcategories" in category_object &&
          category_object.subcategories[params.subcategory] !== undefined));

    if (exists) {
      item =
        params.subcategory && "subcategories" in category_object
          ? category_object.subcategories[params.subcategory]
          : category_object;
    }
  };

  $: if (params) {
    refreshData();
  }

  const unSub = parsedData.subscribe((d) => {
    if (d) {
      project = d.structure;
      refreshData();

      loaded = true;
    }
  });

  onDestroy(() => {
    unSub();
  });
</script>

<!-- <p>{params.tab} / {params.category} / {params.subcategory}</p> -->

{#key $location}
  {#if loaded}
    {#if exists}
      {#key item}
        {#if item.item.startsWith("category")}
          <Category {item} category={params.category} />
        {:else if item.item.endsWith("table")}
          <Table {item} category={params.category} />
        {:else}
          <Function {item} category={params.category} />
        {/if}
      {/key}
    {:else}
      <NotFound />
    {/if}
  {:else}
    <p>Loading ...</p>
  {/if}
{/key}
