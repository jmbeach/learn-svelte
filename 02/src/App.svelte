<script>
  import Product from './Product.svelte';
</script>

<Product
  productTitle="A Book"
  on:add-to-cart={a => alert('add to cart' + JSON.stringify(a))}
  on:delete={() => alert('Delete')}
/>
