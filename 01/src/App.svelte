<script>
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

  function changeName() {
    name = 'Jared';
  }
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {uppercaseName}, age {age + 1}!</h1>
<button on:click={incrementAge}>change age</button>
<button on:click={changeName}>change name</button>