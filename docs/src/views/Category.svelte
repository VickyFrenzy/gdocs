<script lang="ts">
  import { marked } from "marked";

  import GetTypes from "../components/GetTypes.svelte";
  import function_name from "../utils/funName";
  import type {
    Category,
    FunctionPage,
    FunctionParameters,
    FunctionReturns,
    TablePage,
    ValidSubcategory,
  } from "../utils/parsed";
  import Page from "./Page.svelte";
  import { onMount } from "svelte";
  import { link, location } from "svelte-spa-router";
  import FunctionSignature from "./fragments/FunctionSignature.svelte";

  export let item: Category;
  export let category: string;

  let description = item.description || "";
  const fields = item.fields ?? [];

  interface ParsedSubCategories {
    function: FunctionPage[];
    table: TablePage[];
    category: ValidSubcategory[];
  }

  const subItems: ParsedSubCategories = {
    function: [],
    table: [],
    category: [],
  };

  // Populate arrays based on the "item" property
  Object.values(item.subcategories).forEach((subcategory) => {
    if (subcategory.item === "function") {
      subItems.function.push(subcategory as FunctionPage);
    } else if (subcategory.item === "table") {
      subItems.table.push(subcategory as TablePage);
    } else if (subcategory.item === "category") {
      subItems.category.push(subcategory as Category);
    }
  });
</script>

<Page title={category}>
  {#if description}
    <h5 class="section">Description</h5>
    <div class="section-container">
      {@html marked(description)}
    </div>
  {/if}
  {#if fields.length !== 0}
    <h5 class="section">Attributes</h5>
    <div class="section-container">
      <div class="table-container">
        <table>
          <tbody>
            {#each fields as field, index}
              <tr data-key={`${index}-${field.key}--${field.type}`}>
                <td><GetTypes types={field.type} /></td>
                <td>{field.key}</td>
                <td>{field.description}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  {/if}
  {#if subItems.function.length > 0}
    <h5 class="section">Functions</h5>
    <div class="section-container">
      {#each subItems.function as functItem}
        <div class="funct">
          <a use:link href="{$location}/{functItem.name}">{functItem.name}</a>
          <FunctionSignature item={functItem} {category} />
          {#if functItem.description}
            <p>{@html marked(functItem.description)}</p>
          {/if}
        </div>
      {/each}
    </div>
  {/if}
</Page>

<style>
  .funct {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    margin-top: 2rem;
  }
</style>
