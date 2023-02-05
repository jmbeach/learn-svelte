<script>
  import Button from "./Button.svelte";
  import { createEventDispatcher } from "svelte";
  export let title;
  const dispatch = createEventDispatcher();
  import { fade } from "svelte/transition";
</script>

<div
  transition:fade={{ duration: 250 }}
  class="modal-backdrop"
  on:click={() => dispatch("cancel")}
/>
<div class="modal" transition:fade={{ duration: 250 }}>
  <h1>{title}</h1>
  <div class="content"><slot /></div>
  <footer>
    <slot name="footer"
      ><Button on:click={() => dispatch("close")}>Close</Button></slot
    >
  </footer>
</div>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }

  .modal {
    position: fixed;
    top: 10vh;
    left: 10%;
    width: 80%;
    max-height: 80vh;
    background: #1e293b;
    border-radius: 5px;
    z-index: 100;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    overflow: auto;
  }

  h1 {
    padding: 1rem;
    margin: 0;
    border-bottom: 1px solid #ccc;
    font-family: "Roboto Slab", sans-serif;
  }

  .content {
    padding: 1rem;
  }

  footer {
    padding: 1rem;
  }

  @media (min-width: 768px) {
    .modal {
      width: 40rem;
      left: calc(50% - 20rem);
    }
  }
</style>
