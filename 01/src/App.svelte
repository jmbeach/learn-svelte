<script>
  import ContactCard from "./ContactCard.svelte";

	export let name = 'Joe';
  export let age;

  $: uppercaseName = name.toUpperCase();
  $: console.log(name)
  $: if (name === 'Jared') {
    age = 28
  }

  function incrementAge() {
    age += 1;
  }

  function onNameChange(e) {
    name = e.target.value;
  }
</script>

<style>
	h1 {
		color: #fde68a;
	}
</style>

<h1>Hello {uppercaseName}, age {age + 1}!</h1>
<button on:click={incrementAge}>change age</button>
<input type="text" bind:value={name} />
<ContactCard />