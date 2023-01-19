<script>
  import { createEventDispatcher } from 'svelte';
  export let productTitle;
  const dispatch = createEventDispatcher();
</script>

<article>
  <h1>{productTitle}</h1>
  <button on:click={() => dispatch('add-to-cart', { id: 'p1' })}
    >Add to Cart</button
  >
  <button on:click={() => dispatch('delete')}>Delete</button>
</article>
