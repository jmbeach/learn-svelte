<script>
  import Modal from './Modal.svelte';
  import Product from './Product.svelte';
  import { tick, afterUpdate } from 'svelte';

  const products = [
    {
      id: 'p1',
      title: 'A book',
      price: 9.99,
    },
  ];
  let showModal = false;
  let text = 'This is some dummy text';

  function addToCart(e) {
    console.log(e.detail.id);
  }
  function onClose() {
    showModal = false;
  }

  function transform(e) {
    if (e.which !== 9) return;
    e.preventDefault();
    const {
      target: { value, selectionStart, selectionEnd },
    } = e;
    text =
      value.slice(0, selectionStart) +
      value.slice(selectionStart, selectionEnd).toUpperCase() +
      value.slice(selectionEnd);
    tick().then(() => {
      e.target.selectionStart = selectionStart;
      e.target.selectionEnd = selectionEnd;
    });
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
  <Modal on:close={onClose} on:cancel={onClose} let:didAgree>
    <h1 slot="header">Hello!</h1>
    <p>This works</p>
    <button slot="footer" disabled={!didAgree} on:click={onClose}
      >Confirm</button
    >
  </Modal>
{/if}

<textarea rows="5" on:keydown={transform}>{text}</textarea>
