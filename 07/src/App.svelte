<script>
  import Product from "./Product.svelte";
  import CartItem from "./CartItem.svelte";
  import FamilyNode from "./FamilyNode.svelte";
  let showProducts = true;
  let familyStructure = [
    {
      isParent: true,
      name: "Chris",
      children: [
        {
          isParent: true,
          name: "Moe",
          children: [{ isParent: false, name: "Julie" }],
        },
      ],
    },
    { isParent: true, name: "Anna" },
  ];
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

{#each familyStructure as familyMember}
  <FamilyNode member={familyMember} />
{/each}
