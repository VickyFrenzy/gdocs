<script lang="ts">
  import { getContext, onDestroy, onMount } from "svelte";
  import { parsedData } from "../stores";
  import type { Category, ProjectStructure } from "../utils/parsed";
  import { location, link } from "svelte-spa-router";
  import SubCategory from "./SubCategory.svelte";
  import clear_label from "../utils/clearLabel";

  let tabs: [string, Category][] = [];
  let loaded = false;

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
      console.log(d.structure);
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
    console.log(urlTab);
  });

  onDestroy(() => {
    unSub();
  });
</script>

<div class="container">
  <div class="tabs-container">
    {#each tabs as [key, value]}
      {#if value.subcategories && Object.values(value.subcategories).length !== 0}
        <button
          class="tab"
          class:active={menuOpen}
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
              {:else}
                <text>{key}</text>
              {/if}
            </svg>
            <span>{value.name}</span>
          </div>
        </button>
      {/if}
    {/each}
  </div>
  <div class="menu-container" class:active={menuOpen}>
    {#key project}
      {#if activeTab && project[activeTab]}
        {#each Object.values(project[activeTab].subcategories).sort( (a, b) => a.name.localeCompare(b.name) ) as subcategory}
          {@const key = `${activeTab}-${subcategory.name}`}

          {#if subcategory.item.startsWith("category") && "subcategories" in subcategory}
            {@const content = Object.values(subcategory.subcategories).sort(
              (a, b) => a.name.localeCompare(b.name)
            )}

            <SubCategory
              {key}
              href="/{activeTab}/{subcategory.name}"
              label={clear_label(subcategory.name)}
              count={content.length}
            >
              {#each content as item}
                <a
                  use:link
                  href="/{activeTab}/{subcategory.name}/{item.name}"
                  class="subcategory"
                  on:click={closeMenu}
                >
                  <div class="sub-container">
                    <span>{clear_label(item.name)}</span>
                  </div>
                </a>
              {/each}
            </SubCategory>
          {/if}

          <!-- <a use:link href="/{activeTab}/{subcategory.name}" class="subcategory"
            >{subcategory.name}</a
          > -->
        {/each}
      {/if}
    {/key}
    <!-- TODO -->
  </div>
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
    width: 25.6rem;
    max-width: 0;
    overflow-x: hidden;
    transition: max-width 250ms cubic-bezier(0.4, 0, 0.2, 1);
    padding-top: 0.4rem;
    background: var(--colors-background_4);
    scrollbar-width: thin;
  }

  .menu-container.active {
    max-width: 25.6rem;
  }

  .menu-container > * {
    width: 25.6rem;
  }

  .menu-container > a:first-child {
    display: inline-block;
    margin-top: 0.4rem;
  }

  .menu-container > a > div {
    padding-left: 2rem;
  }

  .subcategory {
    height: 3.2rem;
    display: flex;
    align-items: center;
    padding-left: 6.4rem;
    color: var(--text-background-medium);
    cursor: pointer;
    transition:
      background 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .subcategory.active {
    color: var(--colors-main);
  }
  .subcategory:hover {
    background: var(--text-background-hover);
  }

  .subcategory span {
    font-family: Roboto;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.1px;
    user-select: none;
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
