<script>
  import TextInput from "../UI/TextInput.svelte";
  import Button from "../UI/Button.svelte";
  import { createEventDispatcher } from "svelte";
  import Modal from "../UI/Modal.svelte";
  import { notEmpty, isValidEmail } from "../helpers/validation";
  import meetupsStore from "./meetups-store";

  export let id = undefined;
  let meetup;
  if (id) {
    const unsubscribe = meetupsStore.subscribe((meetups) => {
      meetup = meetups.find((x) => x.id === id);
    });
    unsubscribe();
  }

  let title = meetup?.title ?? "";
  let subtitle = meetup?.subtitle ?? "";
  let imgUrl = meetup?.imgUrl ?? "";
  let description = meetup?.description ?? "";
  let address = meetup?.address ?? "";
  let contactEmail = meetup?.contactEmail ?? "";

  const dispatch = createEventDispatcher();

  $: titleValid = !notEmpty(title);
  $: subtitleValid = !notEmpty(subtitle);
  $: imgUrlValid = !notEmpty(imgUrl);
  $: descriptionValid = !notEmpty(description);
  $: addressValid = !notEmpty(address);
  $: emailValid = !notEmpty(contactEmail) && isValidEmail(contactEmail);
  $: formIsValid =
    titleValid &&
    subtitleValid &&
    imgUrlValid &&
    descriptionValid &&
    addressValid &&
    emailValid;

  async function save() {
    const meetup = {
      title,
      subtitle,
      imgUrl,
      description,
      address,
      contactEmail,
      isFavorite: false,
    };
    if (id) {
      const res = await fetch(
        `https://svelte-course-b7877-default-rtdb.firebaseio.com/meetups/${id}.json`,
        {
          method: "PATCH",
          body: JSON.stringify(meetup),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!res.ok) throw new Error("Could not update meetup");
      meetupsStore.update(id, meetup);
    } else {
      try {
        const res = await fetch(
          "https://svelte-course-b7877-default-rtdb.firebaseio.com/meetups.json",
          {
            method: "POST",
            body: JSON.stringify(meetup),
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!res.ok) {
          throw new Error("Failed to add meetup");
        }
        const data = await res.json();
        meetupsStore.add({ id: data.name, ...meetup });
      } catch (err) {
        console.log(err);
      }
    }

    dispatch("save");
  }

  function cancel() {
    dispatch("cancel");
  }

  function deleteMeetup() {
    meetupsStore.delete(id);
    dispatch("delete");
  }
</script>

<Modal title="Edit Meetup Data" on:cancel on:close>
  <form on:submit|preventDefault={save}>
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
      valid={subtitleValid}
      validityMessage={"Please enter a subtitle"}
    />
    <TextInput
      label="Address"
      on:input={(e) => (address = e.target.value)}
      id="address"
      value={address}
      valid={addressValid}
      validityMessage={"Please enter a address"}
    />
    <TextInput
      label="Image URL"
      on:input={(e) => (imgUrl = e.target.value)}
      id="imgUrl"
      value={imgUrl}
      valid={imgUrlValid}
      validityMessage={"Please enter an image URL"}
    />
    <TextInput
      label="Email"
      on:input={(e) => (contactEmail = e.target.value)}
      id="email"
      value={contactEmail}
      inputType="email"
      valid={emailValid}
      validityMessage={"Please enter an email"}
    />
    <TextInput
      label="Description"
      on:input={(e) => (description = e.target.value)}
      id="description"
      value={description}
      controlType="textarea"
      rows={3}
      valid={descriptionValid}
      validityMessage={"Please enter a description"}
    />
  </form>
  <div slot="footer">
    <Button type="button" on:click={save} disabled={!formIsValid}>Save</Button>
    <Button type="button" on:click={cancel} mode={"outline"}>Cancel</Button>
    {#if id}
      <Button type="button" on:click={deleteMeetup}>Delete</Button>
    {/if}
  </div>
</Modal>

<style>
  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }
</style>
