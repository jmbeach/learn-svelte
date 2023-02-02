<script>
  import { writable } from "svelte/store";
  import { tweened } from "svelte/motion";
  import { cubicIn } from "svelte/easing";
  import { fade, fly, slide, scale } from "svelte/transition";
  import Spring from "./Spring.svelte";

  const progress = tweened(0, {
    delay: 0,
    duration: 700,
    easing: cubicIn,
  });

  setTimeout(() => {
    progress.set(0.5);
  }, 1500);

  let boxes = [];
  let boxInput;
  function addBox() {
    boxes = [...boxes, boxInput.value];
  }
  function discard(item) {
    boxes = boxes.filter((x) => x !== item);
  }
</script>

<!-- <progress value={$progress} /> -->
<!-- <Spring /> -->

<input type="text" bind:this={boxInput} />
<button on:click={addBox}>Add</button>

{#each boxes as box}
  <div transition:fly={{ x: -300, y: 300 }} on:click={() => discard(box)}>
    {box}
  </div>
{/each}

<style>
  div {
    width: 10rem;
    height: 10rem;
    background-color: #ccc;
    margin: 1rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    border-radius: 5px;
    padding: 1rem;
  }
</style>
