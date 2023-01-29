<script>
  import Product from "../Products/Product.svelte";
  import products from "./products-store";
</script>

<section>
  <h1>Products</h1>
  {#each $products as product (product.id)}
    <Product
      id={product.id}
      title={product.title}
      price={product.price}
      description={product.description}
    />
  {/each}
</section>

<style>
  section {
    width: 30rem;
    max-width: 90%;
    margin: 2rem auto;
  }
</style>
