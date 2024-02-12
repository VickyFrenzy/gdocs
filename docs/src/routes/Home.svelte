<script lang="ts">
  import { onDestroy } from "svelte";
  import { parsedData } from "../stores";

  let title: string = "Docs";
  let loaded: boolean = false;

  const unSub = parsedData.subscribe((d) => {
    if (d) {
      title = d.title;

      loaded = true;
    }
  });

  onDestroy(() => {
    unSub();
  });
</script>

<div class:loaded>
  <img src="logo.svg" alt="Logo" />
  <h1>{title}</h1>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    place-content: center;
    align-items: center;
    text-align: center;
    opacity: 0;
  }

  div.loaded {
    opacity: 1;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  img {
    width: 250px;
    aspect-ratio: 1;
  }
</style>
