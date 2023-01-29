<script>
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import Button from "./UI/Button.svelte";
  import meetupsStore from "./Meetups/meetups-store";
  import { onDestroy } from "svelte";

  let editMode = undefined;
  let meetups = [];

  const unsubscribe = meetupsStore.subscribe((x) => (meetups = x));

  function onToggleFavorite(e) {
    meetupsStore.update((x) => {
      const copy = [...x];
      const meetupI = copy.findIndex((x) => x.id == e.detail);
      const meetup = {
        ...x[meetupI],
        isFavorite: !copy[meetupI].isFavorite,
      };
      copy[meetupI] = meetup;
      return copy;
    });
  }

  function addMeetup(e) {
    meetupsStore.update((x) => [e.detail, ...x]);
    editMode = undefined;
  }

  function closeModal() {
    editMode = undefined;
  }

  onDestroy(() => unsubscribe());
</script>

<Header />

<main>
  <div class="meetup-controls">
    <Button on:click={() => (editMode = "add")}>New Meetup</Button>
  </div>

  {#if editMode === "add"}
    <EditMeetup
      on:save={addMeetup}
      on:cancel={closeModal}
      on:close={closeModal}
    />
  {/if}
  <MeetupGrid {meetups} on:togglefavorite={onToggleFavorite} />
</main>

<style>
  main {
    margin-top: 5rem;
  }
  .meetup-controls {
    margin: 1rem;
  }
</style>
