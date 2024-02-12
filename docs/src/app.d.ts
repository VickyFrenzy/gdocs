/// <reference types="svelte" />
/// <reference types="vite/client" />

declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    "on:click_outside"?: CompositionEventHandler<T>;
  }
}
