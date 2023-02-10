<script>
  import Modal from "./Modal.svelte";
  export let message;
</script>

<Modal title="An error occurred!" on:cancel on:close>
  <p>{message}</p>
</Modal>
