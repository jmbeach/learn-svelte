<script>
  import { createEventDispatcher } from 'svelte';
  export let title;
  export let price;
  export let bestSeller = false;
  const dispatch = createEventDispatcher();
</script>

<article>
  <h1>{title}</h1>
  <h2>${price}</h2>
  {#if bestSeller}
    <p>Best Seller</p>
  {/if}
  <button on:click={() => dispatch('add-to-cart', { id: 'p1' })}
    >Add to Cart</button
  >
  <button on:click={() => dispatch('delete')}>Delete</button>
</article>
