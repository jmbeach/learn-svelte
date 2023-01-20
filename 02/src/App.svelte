<script>
  import Product from './Product.svelte';
  function addToCart(e) {
    console.log(e.detail.id);
  }
  const products = [
    {
      id: 'p1',
      title: 'A book',
      price: 9.99,
    },
  ];
</script>

{#each products as product (product.id)}
  <Product
    {...product}
    on:add-to-cart={addToCart}
    on:delete={() => alert('Delete')}
  />
{/each}
