<script>
  import MeetupItem from "./MeetupItem.svelte";
  import MeetupFilter from "./MeetupFilter.svelte";
  import Button from "../UI/Button.svelte";
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";
  import { flip } from "svelte/animate";
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

{#if filtered.length === 0}
  <p id="no-meetups">No meetups found, you can start adding some</p>
{/if}

<section id="meetups">
  {#each filtered as meetup (meetup.id)}
    <div transition:fly={{ x: -300 }} animate:flip={{ duration: 300 }}>
      <MeetupItem {...meetup} on:showdetails on:edit />
    </div>
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

  #no-meetups {
    margin: 1rem;
  }
</style>
