<script lang="ts">
  import { getContext, onDestroy, onMount } from "svelte";
  import { parsedData } from "../stores";
  import type { Category, ProjectStructure } from "../utils/parsed";
  import { location, link } from "svelte-spa-router";
  import SubCategory from "./SubCategory.svelte";
  import clear_label from "../utils/clearLabel";
  import SearchPane from "./SearchPane.svelte";
  import ItemLink from "./ItemLink.svelte";

  let tabs: [string, Category][] = [];
  let loaded = false;

  let visible: boolean = false;
  let searchText: string = "";

  let project: ProjectStructure = {};

  let menuOpen: boolean = true;
  let urlTab: string = "";

  $: activeTab =
    project && urlTab && tabs.length > 0 && tabs[0].length > 0
      ? project[urlTab]
        ? urlTab
        : tabs[0][0]
      : "";

  const unSub = parsedData.subscribe((d) => {
    if (d) {
      project = d.structure;
      tabs = Object.entries(project);
      loaded = true;
    }
  });

  const closeMenu = () => {
    if (window.innerWidth <= 1000) {
      menuOpen = false;
    }
  };

  onMount(() => {
    menuOpen = window.innerWidth > 1000;

    urlTab = $location.split("/")[1] ?? "";
  });

  onDestroy(() => {
    unSub();
  });

  // Quick search keypress

  let shiftPressed = false;
  let lastShiftTime = 0;

  let shiftPressLock = false;

  const handleKeyUp = (event: KeyboardEvent) => {
    shiftPressLock = false;
  };

  const handleKeys = (event: KeyboardEvent) => {
    if (visible) {
      if (event.key === "Escape") {
        visible = false;
      }

      return;
    }

    if (shiftPressLock) {
      return;
    }
    shiftPressLock = true;

    if (event.key === "Shift") {
      const currentTime = Date.now();
      if (shiftPressed && currentTime - lastShiftTime < 2000) {
        visible = true;

        shiftPressed = false;
        lastShiftTime = 0;
      } else {
        shiftPressed = true;
        lastShiftTime = currentTime;
      }
    }
  };

  const shortForcefully = (a: string, b: string) => {
    if (a.startsWith("_") && !b.startsWith("_")) {
      return 1; // starting with "_" to the end
    } else if (!a.startsWith("_") && b.startsWith("_")) {
      return -1; // NOT starting with "_" to the beginning
    } else {
      return a.localeCompare(b); // Sort alphabetically otherwise
    }
  };
</script>

<svelte:window on:keydown={handleKeys} on:keyup={handleKeyUp} />

<div class="container">
  <div class="tabs-container">
    {#each tabs as [key, value]}
      {#if value.subcategories && Object.values(value.subcategories).length !== 0}
        <button
          class="tab"
          class:active={menuOpen && activeTab === key}
          on:click={() => {
            if (activeTab === key) {
              menuOpen = !menuOpen;
            } else {
              activeTab = key;
              menuOpen = true;
            }
          }}
        >
          <div>
            <svg viewBox="0 0 24 24" role="presentation">
              {#if key === "globals"}
                <path
                  d="M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z"
                  style="fill: currentcolor;"
                ></path>
              {:else if key === "classes"}
                <path
                  d="M18,22A2,2 0 0,0 20,20V4C20,2.89 19.1,2 18,2H12V9L9.5,7.5L7,9V2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18Z"
                  style="fill: currentcolor;"
                ></path>
              {:else if key === "libraries"}
                <path
                  d="M9 3V18H12V3H9M12 5L16 18L19 17L15 4L12 5M5 5V18H8V5H5M3 19V21H21V19H3Z"
                  style="fill: currentcolor;"
                ></path>
              {:else if key === "hooks"}
                <path
                  d="M18,6C18,7.82 16.76,9.41 15,9.86V17A5,5 0 0,1 10,22A5,5 0 0,1 5,17V12L10,17H7A3,3 0 0,0 10,20A3,3 0 0,0 13,17V9.86C11.23,9.4 10,7.8 10,5.97C10,3.76 11.8,2 14,2C16.22,2 18,3.79 18,6M14,8A2,2 0 0,0 16,6A2,2 0 0,0 14,4A2,2 0 0,0 12,6A2,2 0 0,0 14,8Z"
                  style="fill: currentcolor;"
                ></path>
              {:else if key === "modules"}
                <path
                  d="M16,5V11H21V5M10,11H15V5H10M16,18H21V12H16M10,18H15V12H10M4,18H9V12H4M4,11H9V5H4V11Z"
                  style="fill: currentcolor;"
                ></path>
              {:else if key === "plugins"}
                <path
                  d="M16,7V3H14V7H10V3H8V7H8C7,7 6,8 6,9V14.5L9.5,18V21H14.5V18L18,14.5V9C18,8 17,7 16,7Z"
                  style="fill: currentcolor;"
                ></path>
              {:else if key === "panels"}
                <path
                  fill="currentColor"
                  d="M10 5v6h11V5m-5 13h5v-6h-5M4 18h5V5H4m6 13h5v-6h-5z"
                />
              {:else if key === "enums"}
                <path
                  fill="currentColor"
                  d="M7 13v-2h14v2zm0 6v-2h14v2zM7 7V5h14v2zM3 8V5H2V4h2v4zm-1 9v-1h3v4H2v-1h2v-.5H3v-1h1V17zm2.25-7a.75.75 0 0 1 .75.75c0 .2-.08.39-.21.52L3.12 13H5v1H2v-.92L4 11H2v-1z"
                />
              {:else if key === "structs"}
                <path
                  fill="currentColor"
                  d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4s8-1.79 8-4s-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4"
                />
              {:else}
                <path
                  fill="currentColor"
                  d="M13.64 21.97a.99.99 0 0 1-1.33-.47l-2.18-4.74l-2.51 2.02c-.17.14-.38.22-.62.22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1c.24 0 .47.09.64.23l.01-.01l11.49 9.64a1.001 1.001 0 0 1-.44 1.75l-3.16.62l2.2 4.73c.26.5.02 1.09-.48 1.32z"
                />
              {/if}
            </svg>
            <span>{value.name}</span>
          </div>
        </button>
      {/if}
    {/each}
    <button
      class="tab tab-search"
      on:click={() => {
        visible = !visible;
        console.log(project);
      }}
    >
      <div>
        <svg viewBox="0 0 24 24" role="presentation"
          ><path
            fill="currentColor"
            d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5"
          /></svg
        >
        <span>Search</span>
      </div>
    </button>
  </div>
  <div class="menu-container" class:active={menuOpen}>
    {#key project}
      {#if activeTab && project[activeTab]}
        {#each Object.values(project[activeTab].subcategories).sort( (a, b) => shortForcefully(clear_label(a.name), clear_label(b.name)) ) as subcategory, i (`${activeTab}-${subcategory.name}`)}
          {@const key = `${activeTab}-${subcategory.name}`}

          {#if subcategory.item.startsWith("category") && "subcategories" in subcategory}
            {@const content = Object.values(subcategory.subcategories).sort(
              (a, b) =>
                shortForcefully(clear_label(a.name), clear_label(b.name))
            )}

            <SubCategory
              href="/{activeTab}/{subcategory.name}"
              label={clear_label(subcategory.name)}
              count={content.length}
            >
              {#each content as item, i}
                <ItemLink
                  {item}
                  parentLink={`/${activeTab}/${subcategory.name}`}
                  on:click={closeMenu}
                />
              {/each}
            </SubCategory>
          {:else}
            <ItemLink
              stacked={true}
              item={subcategory}
              parentLink={`/${activeTab}`}
              on:click={closeMenu}
            />
          {/if}

          <!-- <a use:link href="/{activeTab}/{subcategory.name}" class="subcategory"
            >{subcategory.name}</a
          > -->
        {/each}
      {/if}
    {/key}
    <!-- TODO -->
  </div>
  {#if visible}
    <SearchPane {project} bind:visible bind:searchText />
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
    box-shadow:
      0px 0px 4px -1px rgba(0, 0, 0, 0.2),
      0px 0px 5px 0px rgba(0, 0, 0, 0.14),
      0px 0px 10px 0px rgba(0, 0, 0, 0.12);
    position: relative;
  }

  .tabs-container {
    display: flex;
    flex-direction: column;
    width: 6.4rem;
    background: var(--sideMenu-background);
    color: var(--sideMenu-text);
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab {
    display: block;
    width: 100%;
    cursor: pointer;
    height: 6.4rem;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    background-color: transparent;
    border: none;
    border-bottom: 2px solid var(--sideMenu-divider);
    color: inherit;
    font-family: inherit;
    font-size: inherit;
  }

  .tab-search {
    margin-top: auto;
  }

  .tab.active {
    background-color: var(--sideMenu-active);
  }

  .tab div:hover {
    background: var(--sideMenu-hover);
  }

  .tab div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding-top: 1.1rem;
    transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .tab div svg {
    width: 2.4rem;
    height: 2.4rem;
    margin-bottom: 0.4rem;
  }

  .tab div span {
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.2rem;
    user-select: none;
  }

  .menu-container {
    --container-width: 35rem;
    width: var(--container-width);
    max-width: 0;
    overflow-x: hidden;
    transition: max-width 250ms cubic-bezier(0.4, 0, 0.2, 1);
    padding-top: 0.4rem;
    background: var(--colors-background_4);
    scrollbar-width: thin;
  }

  .menu-container.active {
    max-width: var(--container-width);
  }

  .menu-container > * {
    width: var(--container-width);
  }

  .menu-container > a:first-child {
    display: inline-block;
    margin-top: 0.4rem;
  }

  .menu-container > a > div {
    padding-left: 2rem;
  }

  @media (max-width: 1000px) {
    .tabs-container {
      z-index: 120;
    }

    .menu-container {
      position: absolute;
      z-index: 100;
      left: 6.4rem;
      height: 100%;
      box-shadow:
        0px 0px 4px -1px rgba(0, 0, 0, 0.2),
        0px 0px 5px 0px rgba(0, 0, 0, 0.14),
        0px 0px 10px 0px rgba(0, 0, 0, 0.12);
    }
  }

  @media (max-width: 400px) {
    .menu-container {
      width: calc(90vw - 6.4rem);
    }
  }
</style>
