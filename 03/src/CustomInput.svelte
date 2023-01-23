<script>
  export let val;
  export function empty() {
    val = '';
  }
</script>

<input type="text" bind:value={val} />
