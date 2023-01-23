<script>
  import CustomInput from './CustomInput.svelte';
  import Toggle from './Toggle.svelte';
  let val = 'Jared';
  let selectedOption = 1;
  let price = 0;
  let agreed;
  let favColor = ['green'];
  $: console.log(favColor);
</script>

<CustomInput bind:val type="text" />
<Toggle bind:chosenOption={selectedOption} />
<input type="number" bind:value={price} />
<label><input type="checkbox" bind:checked={agreed} />Agree to terms?</label>
<label>
  <input type="checkbox" name="color" value="red" bind:group={favColor} />
  Red
</label>
<label>
  <input type="checkbox" name="color" value="green" bind:group={favColor} />
  Green
</label>
<label>
  <input type="checkbox" name="color" value="blue" bind:group={favColor} />
  Blue
</label>
