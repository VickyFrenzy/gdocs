<script lang="ts">
  import { link, location } from "svelte-spa-router";
  import type { FunctionPage, ValidSubcategory } from "../utils/parsed";
  import clear_label from "../utils/clearLabel";

  export let item: ValidSubcategory;

  export let parentLink: string;
  export let stacked: boolean = false;

  const href = `${parentLink}/${item.name}`;
  const label = clear_label(item.name);

  // TODO: show badge for (item as FunctionPage).realm ?
</script>

<a
  use:link
  {href}
  class="subcategory"
  on:click
  class:stacked
  class:active={$location === href}
>
  <div class="sub-container">
    {#if label.length > 32}
      <abbr title={label} class="label" class:under={label.startsWith("_")}
        ><span>{label}</span></abbr
      >
    {:else}
      <span class="label" class:under={label.startsWith("_")}>{label}</span>
    {/if}
    {#if item?.stub}
      <abbr title="Stub" class="badge stub">S</abbr>
    {/if}
    {#if item?.internal}
      <abbr title="Internal Use" class="badge internal">I</abbr>
    {/if}
    {#if item?.deprecated}
      <abbr title="Deprecated" class="badge deprecated">D</abbr>
    {/if}
  </div>
</a>

<style>
  .subcategory {
    height: 3.2rem;
    display: flex;
    align-items: center;
    padding-left: 6.4rem;
    padding-right: 0.6rem;
    color: var(--text-background-medium);
    cursor: pointer;
    transition:
      background 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .subcategory.stacked {
    padding-left: 1.6rem;
  }
  .subcategory.active {
    color: var(--colors-main);
  }
  .subcategory:hover {
    background: var(--text-background-hover);
  }

  .subcategory .label {
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1 1 auto;
    padding-right: 0.5rem;

    font-family: var(--roboto);
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.1px;
    user-select: none;
  }

  .subcategory .badge {
    min-width: 1rem;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 1.5rem;

    display: inline-block;
    font-size: 75% !important;
    font-weight: 700 !important;
    line-height: 1 !important;
    text-align: center;
    white-space: nowrap;
    border-radius: 0.25rem;
    color: #fff;
    margin-left: 0.5rem;
    background-color: #000;
  }

  .subcategory .badge.internal {
    background-color: var(--badges-internal);
  }
  .subcategory .badge.stub {
    background-color: var(--badges-stub);
  }
  .subcategory .badge.deprecated {
    background-color: var(--badges-deprecated);
  }

  .sub-container {
    display: flex;
    align-items: center;
    overflow: hidden;
    max-height: 3.2rem;
    width: 100%;
  }

  .sub-container abbr {
    text-decoration: auto;
  }

  .sub-container abbr span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sub-container .label.under {
    color: var(--text-background-disabled);
  }
</style>
