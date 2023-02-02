<script>
  import MeetupItem from "./MeetupItem.svelte";
  import MeetupFilter from "./MeetupFilter.svelte";
  import Button from "../UI/Button.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let meetups;
  $: filtered = favsOnly ? meetups.filter((x) => x.isFavorite) : meetups;
  let favsOnly = false;

  function setFilter(e) {
    favsOnly = e.detail === 1;
  }
</script>

<section id="meetup-controls">
  <MeetupFilter on:select={setFilter} {favsOnly} />
  <Button on:click={() => dispatch("add")}>New Meetup</Button>
</section>

<section id="meetups">
  {#each filtered as meetup (meetup.id)}
    <MeetupItem {...meetup} on:showdetails on:edit />
  {/each}
</section>

<style>
  #meetups {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  #meetup-controls {
    margin: 1rem;
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    #meetups {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
