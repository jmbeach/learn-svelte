<script>
  import ContactCard from './ContactCard.svelte';

  let name = 'Max';
  let title = '';
  let image = '';
  let description = '';
  let formState = 'empty';
  let contacts = [];
  function addContact() {
    if (
      !name.trim().length ||
      !title.trim().length ||
      !image.trim().length ||
      !description.trim().length
    ) {
      formState = 'invalid';
      return;
    }
    contacts = [
      ...contacts,
      {
        name,
        title,
        image,
        description,
      },
    ];
    formState = 'done';
  }
  function deleteFirst() {
    contacts = contacts.slice(1);
  }
  function deleteLast() {
    contacts = contacts.slice(0, -1);
  }
</script>

<div id="form">
  <div class="form-control">
    <label for="userName">User Name</label>
    <input type="text" bind:value={name} id="userName" />
  </div>
  <div class="form-control">
    <label for="jobTitle">Job Title</label>
    <input type="text" bind:value={title} id="jobTitle" />
  </div>
  <div class="form-control">
    <label for="image">Image URL</label>
    <input type="text" bind:value={image} id="image" />
  </div>
  <div class="form-control">
    <label for="desc">Description</label>
    <textarea rows="3" bind:value={description} id="desc" />
  </div>
</div>

<button on:click={addContact}>Add Contact Card</button>
<button on:click={deleteFirst}>Delete First</button>
<button on:click={deleteLast}>Delete Last</button>

{#if formState === 'invalid'}
  <p>Invalid input.</p>
{:else}
  <p>Please fill in all data then press button</p>
{/if}

{#each contacts as contact, i}
  <h2># {i + 1}</h2>
  <ContactCard
    userName={contact.name}
    jobTitle={contact.title}
    description={contact.description}
    userImage={contact.image}
  />
{:else}
  <p>Please add some contacts.</p>
{/each}

<style>
  #form {
    width: 30rem;
    max-width: 100%;
  }
</style>
