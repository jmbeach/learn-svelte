<script>
  import Product from "./Product.svelte";
  import CartItem from "./CartItem.svelte";
  let showProducts = true;
  function toggle() {
    showProducts = !showProducts;
  }
</script>

<button on:click={toggle}>Toggle Display</button>
<svelte:component
  this={showProducts ? Product : CartItem}
  title={showProducts ? "test product" : "test cart item"}
  id="p1"
/>
