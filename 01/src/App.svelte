<script>
	export let name = 'Joe';
  export let age;
  function incrementAge() {
    age += 1;
  }
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name}, age {age}!</h1>
<button on:click={incrementAge}>change age</button>