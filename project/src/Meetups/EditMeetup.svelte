<script>
  import TextInput from '../UI/TextInput.svelte';
  import Button from '../UI/Button.svelte';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  function addMeetup() {
    dispatch('save', {
      id: new Date().getTime(),
      title,
      subtitle,
      imgUrl,
      description,
      address,
      contactEmail,
      isFavorite: false,
    });
  }
  export let title = '';
  export let subtitle = '';
  export let imgUrl = '';
  export let description = '';
  export let address = '';
  export let contactEmail = '';
</script>

<form on:submit|preventDefault={addMeetup}>
  <TextInput
    label="Title"
    on:input={e => (title = e.target.value)}
    id="title"
    value={title}
  />
  <TextInput
    label="Subtitle"
    on:input={e => (subtitle = e.target.value)}
    id="subtitle"
    value={subtitle}
  />
  <TextInput
    label="Address"
    on:input={e => (address = e.target.value)}
    id="address"
    value={address}
  />
  <TextInput
    label="Image URL"
    on:input={e => (imgUrl = e.target.value)}
    id="imgUrl"
    value={imgUrl}
  />
  <TextInput
    label="Email"
    on:input={e => (contactEmail = e.target.value)}
    id="email"
    value={contactEmail}
    inputType="email"
  />
  <TextInput
    label="Description"
    on:input={e => (description = e.target.value)}
    id="description"
    value={description}
    controlType="textarea"
    rows={3}
  />
  <Button type="submit">Save</Button>
</form>

<style>
  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }
</style>
