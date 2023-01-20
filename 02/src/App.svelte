<script>
  import Modal from './Modal.svelte';
  import Product from './Product.svelte';

  const products = [
    {
      id: 'p1',
      title: 'A book',
      price: 9.99,
    },
  ];
  let showModal = false;

  function addToCart(e) {
    console.log(e.detail.id);
  }
  function onClose() {
    showModal = false;
  }
</script>

{#each products as product (product.id)}
  <Product
    {...product}
    on:add-to-cart={addToCart}
    on:delete={() => alert('Delete')}
  />
{/each}

<button on:click={() => (showModal = true)}>Show Modal</button>

{#if showModal}
  <Modal on:close={onClose} on:cancel={onClose}>
    <h1 slot="header">Hello!</h1>
    <p>This works</p>
    <button slot="footer" on:click={onClose}>Confirm</button>
  </Modal>
{/if}
