<script lang="ts">
  import marked from "../utils/marked";

  import GetTypes from "../components/GetTypes.svelte";
  import function_name from "../utils/funName";
  import type {
    FunctionPage,
    FunctionParameters,
    FunctionReturns,
  } from "../utils/parsed";
  import Page from "./Page.svelte";
  import FunctionSignature from "./fragments/FunctionSignature.svelte";

  export let item: FunctionPage;
  export let category: string;

  let title: string = "";

  let description = item.description || "";

  const examples: string[] = item.examples ?? [];
  const parameters: FunctionParameters[] = item.parameters ?? [];
  const returns: FunctionReturns[] = item.returns ?? [];

  const internalMessage =
    "**This is used internally - although you're able to use it you probably shouldn't.**";
  const deprecatedMessage =
    "**We advice agains't using this. It may be changed or removed in a future update.**";
  const stubMessage = "**This article is a stub.**";

  $: {
    if (item.internal) {
      description = description
        ? `${description}\n\n${internalMessage}`
        : internalMessage;
    }

    if (item.deprecated) {
      description = description
        ? `${description}\n\n${deprecatedMessage}`
        : deprecatedMessage;
    }

    if (item.stub) {
      description = description
        ? `${description}\n\n${stubMessage}`
        : stubMessage;
    }
  }
  let func_name: string = "";
  let isMethod: boolean;

  $: {
    [func_name, isMethod] = function_name(item.name);
    title = isMethod ? `${category}:${func_name}` : func_name;
  }

  $: htmlDescription = marked(description as string);
</script>

<Page {title}>
  <div class="section-container">
    <FunctionSignature {item} {category} />
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
</style>
