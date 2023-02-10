<script>
  import meetupsStore from "./meetups-store";
  import Button from "../UI/Button.svelte";
  import Badge from "../UI/Badge.svelte";
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  export let title;
  export let subtitle;
  export let imgUrl;
  export let description;
  export let address;
  export let contactEmail;
  export let id;
  export let isFavorite;
  let isLoading = false;
  const dispatch = createEventDispatcher();
  const imgParts = imgUrl?.split(".");
  const imgBase = imgParts.slice(0, imgParts.length - 1).join(".");
  const imgExtension = imgParts.at(-1);
  async function toggleFavorite() {
    isLoading = true;
    const res = await fetch(
      `https://svelte-course-b7877-default-rtdb.firebaseio.com/meetups/${id}.json`,
      {
        method: "PATCH",
        body: JSON.stringify({ isFavorite: !isFavorite }),
        headers: { "Content-Type": "application/json" },
      }
    );
    isLoading = false;
    if (!res.ok) {
      throw new Error("Could not toggle favorite");
    }
    meetupsStore.toggleFavorite(id);
  }
</script>

<article>
  <header>
    <h1>
      {title}
      {#if isFavorite}
        <span transition:fade>
          <Badge>Fav</Badge>
        </span>
      {/if}
    </h1>
    <h2>{subtitle}</h2>
    <p>{address}</p>
  </header>
  <div class="image">
    <img src={`${imgBase}_x500.${imgExtension}`} alt={title} />
  </div>
  <div class="content">
    <p>{description}</p>
  </div>
  <footer>
    <Button mode="outline" on:click={() => dispatch("edit", id)}>Edit</Button>
    {#if isLoading}
      <span class="favoriting">Favoriting...</span>
    {:else}
      <Button
        mode="outline"
        type="button"
        color={isFavorite ? "" : "success"}
        on:click={toggleFavorite}
        >{isFavorite ? "Unfavorite" : "Favorite"}</Button
      >
    {/if}

    <Button type="button" on:click={() => dispatch("showdetails", id)}
      >Show Details</Button
    >
  </footer>
</article>

<style>
  article {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    background: white;
    margin: 1rem;
    color: #1e293b;
  }

  header,
  .content,
  footer {
    padding: 1rem;
  }

  .image {
    width: 100%;
    height: 14rem;
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h1 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
    font-family: "Roboto Slab", sans-serif;
  }

  h1.is-favorite {
    background: #01a129;
    color: white;
    padding: 0 0.5rem;
    border-radius: 5px;
  }

  h2 {
    font-size: 1rem;
    color: #808080;
    margin: 0.5rem 0;
  }

  p {
    font-size: 1.25rem;
    margin: 0;
  }

  div {
    text-align: right;
  }

  .content {
    height: 4rem;
  }

  .favoriting {
    display: inline-block;
  }
</style>
