<script>
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import MeetupDetails from "./Meetups/MeetupDetails.svelte";
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import meetupsStore from "./Meetups/meetups-store";

  let editMode = undefined;
  let page = "overview";
  let id;

  (async () => {
    try {
      const res = await fetch(
        "https://svelte-course-b7877-default-rtdb.firebaseio.com/meetups.json"
      );
      if (!res.ok) {
        throw new Error("Failed to get meetups");
      }
      const meetups = await res.json();
      const withIds = Object.entries(meetups).map(([key, val]) => ({
        id: key,
        ...val,
      }));
      meetupsStore.set(withIds);
    } catch (err) {
      console.log(err);
    }
  })();

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
