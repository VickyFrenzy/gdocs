<script lang="ts">
  import { onMount } from "svelte";
  import { clickOutside } from "../utils/clickOutside";
  import type { Category, ProjectStructure } from "../utils/parsed";
  import { link } from "svelte-spa-router";
  import { focusTrap } from "../utils/focusTrap";
  export let visible: boolean = false;
  export let project: ProjectStructure;
  export let searchText: string = "";

  let input: HTMLInputElement;

  const doClose = () => (visible = false);

  let results = [];

  function markTerm(searchTerm, text) {
    const regex = new RegExp(`(${searchTerm})`, "gi");
    const segments = text.split(regex);
    const markedArray = segments.map((segment) => {
      if (segment.match(regex)) {
        return { type: "match", text: segment };
      } else {
        return { type: "text", text: segment };
      }
    });

    return markedArray;
  }

  function searchProjectStructure(
    project: ProjectStructure,
    searchText: string
  ) {
    const results = [];

    function scoreMatch(match: string) {
      if (match === searchText) {
        return 100;
      }
      if (match.toLowerCase() === searchText.toLowerCase()) {
        return 80;
      }
      if (match.startsWith(searchText)) {
        return 60;
      }
      if (match.toLowerCase().startsWith(searchText.toLowerCase())) {
        return 40;
      }
      if (match.endsWith(searchText)) {
        return 30;
      }
      if (match.toLowerCase().endsWith(searchText.toLowerCase())) {
        return 20;
      }
      if (match.includes(searchText)) {
        return 10;
      }
      return 0;
    }

    // Helper function to search within a category or subcategory
    function searchCategory(
      category: Category,
      parentCategoryItem,
      chain = []
    ) {
      // Search in the 'name' key of the category or subcategory
      if (category.name.toLowerCase().includes(searchText.toLowerCase())) {
        results.push({
          text:
            category.name.length > 96
              ? category.name.substring(0, 96) + "..."
              : category.name,
          score: 100 + scoreMatch(category.name),
          reference: { item: category.item, parentCategoryItem, chain },
        });
      }

      // Search in the 'description' key of the category or subcategory
      if (
        category.description &&
        category.description.toLowerCase().includes(searchText.toLowerCase())
      ) {
        results.push({
          text:
            category.description.length > 96
              ? category.description.substring(0, 96) + "..."
              : category.description,
          score: 0 + scoreMatch(category.name),
          reference: { item: category.item, parentCategoryItem, chain },
        });
      }

      // Iterate over each subcategory within the category or subcategory
      for (const subcategoryKey in category.subcategories) {
        const subcategory = category.subcategories[subcategoryKey];
        searchCategory(subcategory, category.name, [...chain, subcategoryKey]); // Recursively search within subcategories
      }
    }

    // Iterate over each category in the project
    for (const categoryKey in project) {
      const category = project[categoryKey];
      searchCategory(category, null, [categoryKey]); // Search within each category
    }

    let output = results.sort((a, b) => {
      // Compare the score of two elements
      return b.score - a.score;
    });

    if (searchText.length >= 4) {
      return output;
    } else if (searchText.length >= 2) {
      return output.slice(0, 30);
    } else {
      return output.slice(0, 10);
    }
  }

  const doSearch = (e: KeyboardEvent) => {
    const text = e.target.value;

    if (text !== "") {
      results = searchProjectStructure(project, text);
    } else {
      results = [];
    }
  };

  onMount(() => {
    if (searchText !== "") {
      results = searchProjectStructure(project, searchText);
    }
    input.focus();
  });
</script>

<div class="search-dialog" class:visible use:focusTrap={visible}>
  <div
    class="search-box"
    use:clickOutside
    on:click_outside={() => visible && doClose()}
  >
    <input
      bind:this={input}
      placeholder="Search"
      aria-describedby="search-description"
      aria-label="Search"
      spellcheck="false"
      on:input={doSearch}
      bind:value={searchText}
    />
    <button aria-label="Close" class="btn-close" on:click={doClose}>
      &times;
    </button>
    <div class="results">
      <div class="results-container">
        <ul>
          {#each results as result}
            <li>
              <a
                use:link
                href={"/" + result.reference.chain.join("/")}
                on:click={doClose}
              >
                <strong>
                  {result.reference.chain.join("/")}
                </strong>
                <span>
                  {#each markTerm(searchText, result.text) as segment}
                    {#if segment.type === "text"}
                      {segment.text}
                    {:else if segment.type === "match"}
                      <mark>{segment.text}</mark>
                    {/if}
                  {/each}
                </span>
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
  <!-- TODO -->
</div>

<style>
  .search-dialog {
    visibility: hidden;

    z-index: 9001;
    pointer-events: none;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
  }

  .search-dialog.visible {
    visibility: visible;
    pointer-events: all;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .search-box {
    box-shadow:
      0px 0px 4px -1px rgba(0, 0, 0, 0.2),
      0px 0px 5px 0px rgba(0, 0, 0, 0.14),
      0px 0px 10px 0px rgba(0, 0, 0, 0.12);

    background-color: var(--colors-background_4);

    flex-direction: column;
    width: calc(100vw - 2rem);
    max-width: 50rem;
    height: calc(100% - 2rem);
    max-height: 50rem;
    display: flex;
    position: relative;
    overflow: hidden;
  }

  input {
    border: none;
    border-bottom: 1px solid var(--sk-back-3);
    background: var(--colors-background_8);
    color: var(--sk-text-1);
    flex-shrink: 0;
    width: 100%;
    height: 5rem;
    padding: 1rem 6rem 0.5rem 1rem;
    font-family: inherit;
    font-size: 1.6rem;
    font-weight: 600;
    border: none;
    outline: transparent;
  }

  .btn-close {
    color: var(--text-background-disabled);
    background: 0 0;
    width: 5rem;
    height: 5rem;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    font-size: 3rem;
  }

  .btn-close:hover,
  .btn-close:focus {
    color: var(--sideMenu-text);
    background-color: var(--sideMenu-hover);
  }

  .results {
    overscroll-behavior-y: none;
    overflow: auto;
  }

  .results-container ul li a {
    padding: 1rem;
    line-height: 1;
    text-decoration: none;
    display: block;
  }

  .results-container ul li a:hover,
  .results-container ul li a:focus {
    background-color: var(--sideMenu-hover);
  }

  .results-container ul li a strong {
    color: var(--sideMenu-divider);
    font-size: 1.6rem;
  }
  .results-container ul li a span {
    color: var(--sideMenu-text);
    margin: 0.4rem 0 0;
    font-size: 1.2rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 1;
    display: block;
    overflow: hidden;
  }

  .results-container :global(mark) {
    background-color: var(--arguments-background);
  }
</style>
