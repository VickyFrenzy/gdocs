<script lang="ts">
  import { getContext, onMount } from "svelte";
  import NotFound from "./NotFound.svelte";

  export let params: {
    tab: string;
    category: string;
    subcategory: string;
  };

  const { getData } = getContext<any>("parsed");

  let loaded = false;
  let category_object;
  let exists: boolean = false;
  let item: any;

  onMount(() => {
    const project = getData().structure;
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

    console.log(category_object);
  });
</script>

<h1>Route controller</h1>
<p>{params.tab} / {params.category} / {params.subcategory}</p>

{#if loaded}
  {#if exists}
    {#if item.item.startsWith("category")}
      <p>Category</p>
    {:else if item.item.endsWith("table")}
      <p>Page</p>
    {:else}
      <p>Function</p>
    {/if}
  {:else}
    <NotFound />
  {/if}
{:else}
  <p>Loading ...</p>
{/if}

<style>
  h1 {
    color: #008cff;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
