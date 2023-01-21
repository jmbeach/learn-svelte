<script>
  import Header from './UI/Header.svelte';
  import MeetupGrid from './Meetups/MeetupGrid.svelte';
  import TextInput from './UI/TextInput.svelte';
  import Button from './UI/Button.svelte';
  let meetups = [
    {
      id: 'm1',
      title: 'Coding Bootcamp',
      subtitle: 'Learn to code in 2 hours',
      description:
        'In this meetup, we will have some experts that teach you how to code',
      imgUrl:
        'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
      address: '27th Nerd Road, 32523 New York',
      contactEmail: 'code@test.com',
      isFavorite: false,
    },
    {
      id: 'm2',
      title: 'Swim Together',
      subtitle: "Let's go swimming!",
      description: 'We will simply swim some rounds!',
      imgUrl:
        'https://images.unsplash.com/photo-1589584556363-b90f6bcc7149?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
      address: '27th Nerd Road, 32523 New York',
      contactEmail: 'swim@test.com',
      isFavorite: false,
    },
  ];
  function addMeetup() {
    meetups = [
      {
        id: new Date().getTime(),
        title,
        subtitle,
        imgUrl,
        description,
        address,
        contactEmail,
        isFavorite: false,
      },
      ...meetups,
    ];
  }
  export let title = '';
  export let subtitle = '';
  export let imgUrl = '';
  export let description = '';
  export let address = '';
  export let contactEmail = '';
  function onToggleFavorite(e) {
    const meetupI = meetups.findIndex(x => x.id == e.detail);
    const meetup = {
      ...meetups[meetupI],
      isFavorite: !meetups[meetupI].isFavorite,
    };
    meetups[meetupI] = meetup;
    meetups = [...meetups];
  }
</script>

<Header />

<main>
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
    <Button type="submit" text={'Save'} />
  </form>
  <MeetupGrid {meetups} on:togglefavorite={onToggleFavorite} />
</main>

<style>
  main {
    margin-top: 5rem;
  }
  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }
</style>
