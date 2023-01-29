<script>
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import MeetupDetails from "./Meetups/MeetupDetails.svelte";
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import Button from "./UI/Button.svelte";
  import meetupsStore from "./Meetups/meetups-store";

  let editMode = undefined;
  let page = "overview";
  let id;

  function closeModal() {
    editMode = undefined;
  }

  function showDetails({ detail }) {
    page = "details";
    id = detail;
  }

  function closeDetails() {
    page = "overview";
  }

  function onEdit({ detail }) {
    editMode = "edit";
    id = detail;
  }
</script>

<Header />

<main>
  {#if page === "overview"}
    <div class="meetup-controls">
      <Button on:click={() => (editMode = "add")}>New Meetup</Button>
    </div>

    {#if editMode === "add"}
      <EditMeetup
        on:cancel={closeModal}
        on:close={closeModal}
        on:save={closeModal}
      />
    {:else if editMode === "edit"}
      <EditMeetup
        on:cancel={closeModal}
        on:close={closeModal}
        on:save={closeModal}
        {id}
      />
    {/if}
    <MeetupGrid
      meetups={$meetupsStore}
      on:showdetails={showDetails}
      on:edit={onEdit}
    />
  {:else if page === "details"}
    <MeetupDetails {id} on:close={closeDetails} />
  {/if}
</main>

<style>
  main {
    margin-top: 5rem;
  }
  .meetup-controls {
    margin: 1rem;
  }
</style>
