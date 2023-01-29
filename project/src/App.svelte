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
</script>

<Header />

<main>
  {#if page === "overview"}
    <div class="meetup-controls">
      <Button on:click={() => (editMode = "add")}>New Meetup</Button>
    </div>

    {#if editMode === "add"}
      <EditMeetup on:cancel={closeModal} on:close={closeModal} />
    {/if}
    <MeetupGrid meetups={$meetupsStore} on:showdetails={showDetails} />
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
