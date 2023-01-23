<script>
  import CustomInput from './CustomInput.svelte';
  import Toggle from './Toggle.svelte';
  let val = 'Jared';
  let selectedOption = 1;
  let price = 0;
  let agreed;
  let favColor = ['green'];
  let singleFavColor = 'red';
  let usernameInput;
  let customInput;
  let someDiv;
  function saveData() {
    console.log(someDiv);
    customInput.empty();
  }
  $: console.log(customInput);
</script>

<CustomInput bind:val type="text" bind:this={customInput} />
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

<select bind:value={singleFavColor}>
  <option value="green">Green</option>
  <option value="red">Red</option>
  <option value="blue">Blue</option>
</select>

<hr />

<input type="text" bind:this={usernameInput} />
<button on:click={saveData}>Save</button>

<div bind:this={someDiv} />
