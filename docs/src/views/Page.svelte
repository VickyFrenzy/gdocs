<script lang="ts">
  export let title: string | null = null;
</script>

<main class="container">
  <slot name="title">
    {#if title}
      <h4 class="title">
        {title}
      </h4>
    {/if}
  </slot>

  <slot />
</main>

<style>
  .container {
    background: var(--colors-background_2);
    width: 100%;
    max-width: 90rem;
    padding: 2.4rem 3.2rem 1.6rem 3.2rem;

    box-shadow:
      0px 0px 1px -2px rgba(0, 0, 0, 0.2),
      0px 0px 2px 0px rgba(0, 0, 0, 0.14),
      0px 0px 5px 0px rgba(0, 0, 0, 0.12);
  }

  .container :global(a) {
    color: var(--colors-main);
    font-weight: 700;
  }

  h4.title {
    font-family: Roboto;
    font-weight: 500;
    font-size: 3.4rem;
    letter-spacing: 0.025rem;
    line-height: 4.8rem;
    text-align: center;
    color: var(--colors-main);
    margin-bottom: 0.8rem;
    border-bottom: 3px solid var(--colors-main);
    user-select: none;
  }

  .container :global(.section) {
    /* h5 */
    font-family: Roboto;
    font-weight: 500;
    font-size: 2.4rem;
    letter-spacing: 0;
    line-height: 2.8rem;
    color: var(--colors-main);
    margin-bottom: 0.8rem;
    margin-top: 6.4rem;
    border-bottom: 3px solid var(--colors-main);
    user-select: none;
  }
  .container :global(.section-container) {
    /* div */
    margin: 0.8rem 0;
    padding: 0.8rem 0;
  }

  .container :global(.section-container p) {
    /* div */
    margin: 0.8rem 0;
    font-size: 1.6rem;
    line-height: 1.8rem;
  }

  .container :global(.section-container code[class*="language-"]),
  .container :global(.section-container pre[class*="language-"]) {
    color: var(--codeBlocks-color);
    text-shadow: none;
    font-family: "Roboto Mono", monospace;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.8rem;
  }

  .container :global(.section-container pre) {
    overflow-x: auto;
  }

  /* Code blocks */
  .container :global(.section-container pre[class*="language-"]) {
    padding: 1.6rem;
    margin: 1.2rem 0;
  }

  .container :global(.section-container :not(pre) > code[class*="language-"]),
  .container :global(.section-container pre[class*="language-"]) {
    background: var(--codeBlocks-background);
  }

  /* Inline code */
  .container :global(:not(pre) > code[class*="language-"]) {
    padding: 0.2rem;
    border-radius: 0.2rem;
  }

  .container :global(.token.comment),
  .container :global(.token.prolog),
  .container :global(.token.doctype),
  .container :global(.token.cdata) {
    color: var(--codeBlocks-comment);
  }

  .container :global(.token.punctuation) {
    color: var(--codeBlocks-punctuation);
  }

  .container :global(.token.property),
  .container :global(.token.tag),
  .container :global(.token.boolean),
  .container :global(.token.number),
  .container :global(.token.constant),
  .container :global(.token.symbol),
  .container :global(.token.deleted) {
    color: var(--codeBlocks-number);
  }

  .container :global(.token.selector),
  .container :global(.token.attr-name),
  .container :global(.token.string),
  .container :global(.token.char),
  .container :global(.token.builtin),
  .container :global(.token.inserted) {
    color: var(--codeBlocks-string);
  }

  .container :global(.token.operator),
  .container :global(.token.entity),
  .container :global(.token.url),
  .container :global(.language-css .token.string),
  .container :global(.style .token.string) {
    color: var(--codeBlocks-operator);
    background: none;
  }

  .container :global(.token.atrule),
  .container :global(.token.attr-value),
  .container :global(.token.keyword) {
    color: var(--codeBlocks-keyword);
  }

  .container :global(.token.function),
  .container :global(.token.class-name) {
    color: var(--codeBlocks-function);
  }

  /*Table */
  .container :global(.table-container) {
    width: 100%;
  }
  .container :global(.table-container table) {
    width: 100%;
    border-collapse: collapse;
    background: var(--table-background);
    table-layout: fixed;
  }
  .container :global(.table-container td) {
    padding: 0.6rem 1.2rem;
    border: 3px solid var(--colors-background_2);
    word-wrap: break-word;
  }

  .container :global(.table-container td:nth-child(1)),
  .container :global(.table-container td:nth-child(2)) {
    width: 25%;
  }

  .container :global(.table-container td:nth-child(1)) {
    border-left: none;
  }

  .container :global(.table-container td:nth-child(3)) {
    border-right: none;
  }

  .container :global(.table-container tr:nth-child(2n)) {
    background: var(--table-alternative);
  }
</style>
