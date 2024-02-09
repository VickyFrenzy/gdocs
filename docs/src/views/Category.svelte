<script lang="ts">
  import { marked } from "marked";

  import GetTypes from "../components/GetTypes.svelte";
  import function_name from "../utils/funName";
  import type { FunctionParameters, FunctionReturns } from "../utils/parsed";
  import Page from "./Page.svelte";
  import { onMount } from "svelte";

  export let item: any;
  export let category: string;

  let description = item.description || "";
  const fields = item.fields ?? [];
  onMount(() => {
    console.log(item);
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
</Page>
