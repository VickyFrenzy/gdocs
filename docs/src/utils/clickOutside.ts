/** Dispatch event on click outside of node */
export function clickOutside(node: HTMLElement) {
  const handleClick = (event: Event) => {
    if (
      event.target && node && !node.contains(event.target as Node) &&
      !event.defaultPrevented
    ) { // @ts-ignore: node type invalid
      node.dispatchEvent(new CustomEvent<HTMLElement>("click_outside", node));
    }
  };

  document.addEventListener("click", handleClick, true);

  return {
    destroy() {
      document.removeEventListener("click", handleClick, true);
    },
  };
}
