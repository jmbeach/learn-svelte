<script>
	import { onMount } from "svelte";
	let hobbies = [];
	let hobbyInput;
	let isLoading = false;

	const loadHobbies = async () => {
		isLoading = true;
		try {
			const res = await (
				await fetch(
					"https://svelte-course-b7877-default-rtdb.firebaseio.com/hobbies.json"
				)
			).json();
			hobbies = Object.values(res);
			return hobbies;
		} finally {
			isLoading = false;
		}
	};

	async function addHobby() {
		hobbies = [...hobbies, hobbyInput.value];
		isLoading = true;
		let res;
		try {
			res = await fetch(
				"https://svelte-course-b7877-default-rtdb.firebaseio.com/hobbies.json",
				{
					method: "POST",
					body: JSON.stringify(hobbyInput.value),
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
		} finally {
			isLoading = false;
		}

		if (!res.ok) throw new Error("oh noes");
	}
</script>

<label for="hobby">hobby</label>
<input type="text" name="hobby" id="hobby" bind:this={hobbyInput} />
<button on:click={addHobby}>Add Hobby</button>
{#await loadHobbies()}
	<p>Loading...</p>
{:then hobbyData}
	<ul>
		{#each hobbyData as hobby}
			<li>{hobby}</li>
		{/each}
	</ul>
{/await}
