<script>
  import CustomInput from './CustomInput.svelte';
  import Toggle from './Toggle.svelte';
  let val = 'Jared';
  let selectedOption = 1;
  let price = 0;
  $: console.log(price);
  function setValue(e) {
    val = e.target.value;
  }
</script>

<CustomInput bind:val type="text" />
<Toggle bind:chosenOption={selectedOption} />
<input type="number" bind:value={price} />
