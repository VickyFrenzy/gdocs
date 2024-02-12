<script lang="ts">
  import Router from "svelte-spa-router";
  import routes from "./routes";
  import { onMount, setContext } from "svelte";
  import { fetchParsedData } from "./utils/parsed";
  import { parsedData } from "./stores";
  import { get } from "svelte/store";
  import SideMenu from "./components/SideMenu.svelte";

  import "./styles/global.css";
  import "./styles/themes/dark.css";
  import { BUNDLE_NAME } from "./constants";
  //   import "./styles/themes/light.css";

  let parsed = {};

  setContext("parsed", {
    getData: () => get(parsedData),
  });

  let tracedError: string | null = null;

  onMount(async () => {
    try {
      parsed = await fetchParsedData();
    } catch (e: any) {
      tracedError = `Can't fetch "${BUNDLE_NAME}" :\n ${
        e.message ?? "Unknown error"
      } `;
      console.error(e);
    }
    // routes = generateRoutes(data.structure);
    // console.log(routes);
  });
</script>

<svelte:head>
  {#if tracedError}
    <title>GDocs - Error</title>
  {:else if $parsedData && $parsedData.title}
    <title>{$parsedData.title}</title>
  {:else}
    <title>Loading...</title>
  {/if}
  <meta
    name="theme-color"
    media="(prefers-color-scheme: dark)"
    content="#1c1c1e"
  />
  <meta name="color-scheme" content="light dark" />
</svelte:head>

<main>
  <div class="container">
    {#if tracedError}
      <div class="error">
        <h1>Loading Error</h1>
        <code class="error-trace">{tracedError}</code>
      </div>
    {:else if $parsedData && $parsedData.structure}
      <SideMenu />
      <div class="content">
        <!-- #/plugins/MonoSuite.Administration/MonoSuite.Administration:RemoveIncognito -->
        <Router {routes} />
      </div>
    {:else}
      <!-- Loading -->
    {/if}
  </div>
</main>

<style>
  .container {
    height: 100vh;
    width: 100vw;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
    display: flex;
  }

  div.content {
    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow-y: scroll;
  }

  div.content > :global(*) {
    min-height: 100%;
  }

  .error {
    display: flex;
    flex-direction: column;
    place-content: center;
  }

  .error h1 {
    color: #da5242;
  }
  .error .error-trace {
    margin-top: 1rem;
    padding: 0.5rem 0.75rem;
    background-color: var(--colors-background_2);
    max-width: 800px;
  }
</style>
