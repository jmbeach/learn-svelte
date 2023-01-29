<script>
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import Button from "./UI/Button.svelte";
  import meetupsStore from "./Meetups/meetups-store";

  let editMode = undefined;

  function onToggleFavorite(e) {
    meetupsStore.toggleFavorite(e.detail);
  }

  function addMeetup(e) {
    meetupsStore.add(e.detail);
  }

  function closeModal() {
    editMode = undefined;
  }
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
  <MeetupGrid meetups={$meetupsStore} on:togglefavorite={onToggleFavorite} />
</main>

<style>
  main {
    margin-top: 5rem;
  }
  .meetup-controls {
    margin: 1rem;
  }
</style>
