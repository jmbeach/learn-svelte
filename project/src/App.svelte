<script>
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import MeetupDetails from "./Meetups/MeetupDetails.svelte";
  import EditMeetup from "./Meetups/EditMeetup.svelte";
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
        on:delete={closeModal}
      />
    {/if}
    <MeetupGrid
      {editMode}
      meetups={$meetupsStore}
      on:showdetails={showDetails}
      on:edit={onEdit}
      on:add={() => (editMode = "add")}
    />
  {:else if page === "details"}
    <MeetupDetails {id} on:close={closeDetails} />
  {/if}
</main>

<style>
  main {
    margin-top: 5rem;
  }
</style>
