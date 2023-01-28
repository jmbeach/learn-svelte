<script>
  import TextInput from "../UI/TextInput.svelte";
  import Button from "../UI/Button.svelte";
  import { createEventDispatcher } from "svelte";
  import Modal from "../UI/Modal.svelte";
  import { notEmpty } from "../helpers/validation";

  export let title = "";
  export let subtitle = "";
  export let imgUrl = "";
  export let description = "";
  export let address = "";
  export let contactEmail = "";
  export let titleValid = false;

  const dispatch = createEventDispatcher();

  $: titleValid = !notEmpty(title);

  function addMeetup() {
    dispatch("save", {
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

  function cancel() {
    dispatch("cancel");
  }
</script>

<Modal title="Edit Meetup Data" on:cancel on:close>
  <form on:submit|preventDefault={addMeetup}>
    <TextInput
      label="Title"
      on:input={(e) => (title = e.target.value)}
      id="title"
      value={title}
      valid={titleValid}
      validityMessage={"Please enter a title"}
    />
    <TextInput
      label="Subtitle"
      on:input={(e) => (subtitle = e.target.value)}
      id="subtitle"
      value={subtitle}
      valid={false}
      validityMessage={"You need a subtitle"}
    />
    <TextInput
      label="Address"
      on:input={(e) => (address = e.target.value)}
      id="address"
      value={address}
    />
    <TextInput
      label="Image URL"
      on:input={(e) => (imgUrl = e.target.value)}
      id="imgUrl"
      value={imgUrl}
    />
    <TextInput
      label="Email"
      on:input={(e) => (contactEmail = e.target.value)}
      id="email"
      value={contactEmail}
      inputType="email"
    />
    <TextInput
      label="Description"
      on:input={(e) => (description = e.target.value)}
      id="description"
      value={description}
      controlType="textarea"
      rows={3}
    />
  </form>
  <div slot="footer">
    <Button type="button" on:click={addMeetup}>Save</Button>
    <Button type="button" on:click={cancel} mode={"outline"}>Cancel</Button>
  </div>
</Modal>

<style>
  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }
</style>
