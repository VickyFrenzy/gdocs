<script lang="ts">
  import { location, link } from "svelte-spa-router";

  export let href: string;
  export let label: string;
  export let count: number;

  let collapsed = $location.startsWith(href);
  $: active = $location === href;
</script>

<div class="container">
  <a {href} use:link>
    <button
      class="head"
      class:collapsed
      class:active
      on:click={() => (collapsed = !collapsed)}
    >
      <svg viewBox="0 0 24 24" role="presentation"
        ><path
          d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
          style="fill: currentcolor;"
        ></path></svg
      >

      <span>{label}</span>
    </button>
  </a>

  <div class="body" style="--count: {count}" class:collapsed>
    <slot />
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
  }

  .head {
    width: 100%;
    text-align: left;
    height: 4rem;
    display: flex;
    align-items: center;
    color: var(--text-background-high);
    cursor: pointer;
    transition:
      background 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .head.active {
    color: var(--colors-main);
  }

  .head:hover {
    background: var(--text-background-hover);
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
    margin: 0 2rem 0 2rem;
    transform: rotate(0deg);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .collapsed svg {
    transform: rotate(90deg);
  }

  span {
    font-family: var(--roboto);
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.1px;
    user-select: none;
  }

  .body {
    overflow: hidden;
    margin-bottom: 0;
    max-height: 0;
    overflow-y: hidden;
    transition:
      max-height 250ms cubic-bezier(0.4, 0, 0.2, 1),
      height 250ms cubic-bezier(0.4, 0, 0.2, 1),
      margin-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .body.collapsed {
    margin-bottom: 1.2rem;
    max-height: calc(var(--count, 0) * 3.2rem);
  }
</style>
