<script>
  import CartItem from "./CartItem.svelte";
  import cartStore from "./cart-store";
  import timer from "../timer-store";
  import { onDestroy } from "svelte";
  const unsubscribe = timer.subscribe((count) => {
    console.log("Cart: ", count);
  });
  function onRemove(id) {
    cartStore.update((items) => {
      return items.filter((x) => x.id !== id);
    });
  }
  onDestroy(() => unsubscribe());
</script>

<section>
  <h1>Cart</h1>
  <ul>
    {#each $cartStore as item (item.id)}
      <CartItem
        id={item.id}
        title={item.title}
        price={item.price}
        on:remove={() => onRemove(item.id)}
      />
    {:else}
      <p>No items in cart yet!</p>
    {/each}
  </ul>
</section>

<style>
  section {
    width: 30rem;
    max-width: 90%;
    margin: 2rem auto;
    border-bottom: 2px solid #ccc;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
