<script>
  import { createEventDispatcher } from 'svelte';

  const dispatcher = createEventDispatcher();
  let agreed = false;
</script>

<div class="backdrop" on:click={() => dispatcher('cancel')} />
<div class="modal">
  <header>
    <slot name="header" />
  </header>
  <div class="content">
    <slot />
  </div>
  <div class="disclaimer">
    <p>Before you close you need to agree to our terms!</p>
    <button on:click={() => (agreed = true)}>Agree</button>
  </div>
  <footer>
    <slot name="footer" didAgree={agreed}>
      <button on:click={() => dispatcher('close')} disabled={!agreed}
        >Close</button
      >
    </slot>
  </footer>
</div>

<style>
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }

  .modal {
    padding: 1rem;
    position: fixed;
    top: 10vh;
    left: 10%;
    width: 80%;
    max-height: 80vh;
    background: white;
    border-radius: 5px;
    z-index: 100;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }
  header {
    border-bottom: 1px solid black;
  }
</style>
