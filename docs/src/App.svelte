<script>
  import Router from "svelte-spa-router";
  import routes from "./routes";
  import { onMount, setContext } from "svelte";
  import { fetchParsedData } from "./utils/parsed";
  import { parsedData } from "./stores";
  import { get } from "svelte/store";
  import SideMenu from "./components/SideMenu.svelte";

  import "./styles/global.css";
  import "./styles/themes/dark.css";
  //   import "./styles/themes/light.css";

  let parsed = {};

  setContext("parsed", {
    getData: () => get(parsedData),
  });

  onMount(async () => {
    parsed = await fetchParsedData();
    // routes = generateRoutes(data.structure);
    // console.log(routes);
  });
</script>

<svelte:head>
  {#if $parsedData && $parsedData.title}
    <title>{$parsedData.title}</title>
  {:else}
    <title>Loading...</title>
  {/if}
</svelte:head>

<main>
  <div class="container">
    {#if $parsedData && $parsedData.structure}
      <SideMenu />
      <div class="content">
        <!-- #/plugins/MonoSuite.Administration/MonoSuite.Administration:RemoveIncognito -->
        <Router {routes} />
      </div>
    {:else}
      <h1>Loading...</h1>
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

  div.content > * {
    min-height: 100%;
  }
</style>
