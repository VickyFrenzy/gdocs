<script lang="ts">
  import GetTypes from "../../components/GetTypes.svelte";
  import function_name from "../../utils/funName";
  import type {
    FunctionPage,
    FunctionParameters,
    FunctionReturns,
  } from "../../utils/parsed";

  export let item: FunctionPage;
  export let category: string;

  const returns: FunctionReturns[] = item.returns ?? [];
  const parameters: FunctionParameters[] = item.parameters ?? [];

  let func_name: string = "";
  let isMethod: boolean;

  $: {
    [func_name, isMethod] = function_name(item.name);
  }
</script>

<div class="function-signature">
  <span class={`realm ${item.realm || ""}`}></span>

  <span class="funct">
    {#each returns as ret}
      <GetTypes types={ret.type} list={true} />
    {/each}
    {#if returns.length > 0}
      <span>{" "}</span>
    {/if}
    {#if isMethod}
      <GetTypes types={category} />
      <span>{":"}</span>
    {/if}
    <span>{func_name}</span>

    <span>(</span>

    {#each parameters as param, i}
      <GetTypes types={param.type} list={true} /><span>{" " + param.name}</span>
      {parameters.length > 1 && i < parameters.length - 1 ? ", " : ""}
    {/each}

    <span>)</span>
  </span>
</div>

<style>
  .function-signature {
    display: inline-flex;
    padding: 1.6rem;
    color: var(--codeBlocks-color);
    font-family: var(--code);
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.8rem;
    margin: 0.8rem 0;
    background: var(--codeBlocks-background);
  }

  .realm {
    flex: 0 0 1.8rem;
    height: 1.8rem;
    width: 1.8rem;
    display: inline-block;
    align-self: center;
    vertical-align: top;
    margin-right: 0.8rem;
    border-radius: 0.4rem;
  }

  .realm:global(.server) {
    background: var(--realms-server);
  }

  .realm:global(.client) {
    background: var(--realms-client);
  }

  .realm.shared {
    background: linear-gradient(
      45deg,
      var(--realms-client) 50%,
      var(--realms-server) 50.001%
    );
  }

  .funct {
    display: inline-flex;
    white-space: pre;
    flex-flow: wrap;
  }
</style>
