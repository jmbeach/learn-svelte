<script>
  import ContactCard from "./ContactCard.svelte";

	export let name = 'Joe';
  export let age;
  let jobTitle = 'Blacksmith'
  let description = 'Lorem ipsum'
  let imgUrl = 'https://notion-avatar.vercel.app/api/img/eyJmYWNlIjoxNSwibm9zZSI6NywibW91dGgiOjEsImV5ZXMiOjExLCJleWVicm93cyI6MiwiZ2xhc3NlcyI6MiwiaGFpciI6NDUsImFjY2Vzc29yaWVzIjowLCJkZXRhaWxzIjowLCJiZWFyZCI6MCwiZmxpcCI6MCwiY29sb3IiOiJyZ2JhKDI1NSwgMCwgMCwgMCkiLCJzaGFwZSI6Im5vbmUifQ=='

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
<div>
  <span>Name:</span>
  <input type="text" bind:value={name} />
</div>
<div>
  <span>Title:</span>
  <input type="text" value={jobTitle} on:input={e => jobTitle = e.target.value} />
</div>
<div>
  <span>Description:</span>
  <textarea value={description} on:input={e => description = e.target.value} />
</div>
<div>
  <span>Image URL:</span>
  <input type="text" value={imgUrl} on:input={e => imgUrl = e.target.value} />
</div>
<ContactCard userName={name} jobTitle={jobTitle} description={description} imgUrl={imgUrl} />