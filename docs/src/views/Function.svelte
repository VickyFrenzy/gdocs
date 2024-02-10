<script lang="ts">
  import marked from "../utils/marked";

  import GetTypes from "../components/GetTypes.svelte";
  import function_name from "../utils/funName";
  import type { FunctionParameters, FunctionReturns } from "../utils/parsed";
  import Page from "./Page.svelte";

  export let item: any;
  export let category: string;

  let title: string = "";

  let description = item.description || "";
  let func_name: string = "";
  let isMethod: boolean;

  const examples: string[] = item.examples ?? [];
  const parameters: FunctionParameters[] = item.parameters ?? [];
  const returns: FunctionReturns[] = item.returns ?? [];

  const internalMessage =
    "**This is used internally - although you're able to use it you probably shouldn't.**";

  $: {
    if (item.internal) {
      description = description
        ? `${description}\n\n${internalMessage}`
        : internalMessage;
    }
  }

  $: {
    [func_name, isMethod] = function_name(item.name);
    title = isMethod ? `${category}:${func_name}` : func_name;
  }

  $: htmlDescription = marked(description as string);
</script>

<Page {title}>
  <div class="section-container">
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
          <GetTypes types={param.type} list={true} /><span
            >{" " + param.name}</span
          >
          {parameters.length > 1 && i < parameters.length - 1 ? ", " : ""}
        {/each}

        <span>)</span>
      </span>
    </div>
  </div>

  {#if description}
    <h5 class="section">Description</h5>
    <div class="section-container">
      {@html htmlDescription}
    </div>
  {/if}

  {#if parameters.length !== 0}
    <h5 class="section">Arguments</h5>
    <div class="section-container">
      {#each parameters as param, index (index)}
        <div class="parameter-box">
          <p class="title">
            <GetTypes types={param.type} /><span>{" "}</span>
            <strong>{param.name}</strong>
          </p>
          <p>
            {@html marked(param.description)}
          </p>
          <span>{index + 1}</span>
        </div>
      {/each}
    </div>
  {/if}

  {#if returns.length !== 0}
    <h5 class="section">Returns</h5>
    <div class="section-container">
      {#each returns as ret, index (index)}
        <div class="parameter-box">
          <p class="title">
            <GetTypes types={ret.type} />
          </p>
          <p>
            {@html marked(ret.description)}
          </p>
          <span>{index + 1}</span>
        </div>
      {/each}
    </div>
  {/if}

  {#if examples.length !== 0}
    <h5 class="section">Examples</h5>
    <div class="section-container">
      {@html marked(examples.join("\n\n"))}
    </div>
  {/if}
</Page>

<style>
  .parameter-box {
    position: relative;
    margin-bottom: 2.4rem;
  }

  .parameter-box > span {
    position: absolute;
    left: 0;
    top: 0;
    height: 1.8rem;
    width: 2.8rem;
    text-align: center;
    line-height: 1.8rem;
    font-weight: 700;
    background: var(--arguments-background);
    color: var(--arguments-color);
    user-select: none;
    border-radius: 0.45rem 0.1rem 0.1rem 0.45rem;
    font-size: 1.4rem;
  }

  .parameter-box span,
  .parameter-box strong {
    white-space: pre;
  }

  .parameter-box > p:first-child {
    font-weight: 500;
  }

  .parameter-box > p {
    margin-left: 3.8rem;
  }

  .parameter-box > p.title {
    display: inline-flex;
    margin: 0 0 0 3.8rem;
  }

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
