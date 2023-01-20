<script>
  import Product from './Product.svelte';
  function addToCart(e) {
    console.log(e.detail.id);
  }
</script>

<Product
  productTitle="A Book"
  on:add-to-cart={addToCart}
  on:delete={() => alert('Delete')}
/>
