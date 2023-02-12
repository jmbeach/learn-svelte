<script context="module">
  console.log("hello world");
  let deactivate;
</script>

<script>
  export let member;
  let isActive = false;
  console.log("every time");
  function activate() {
    if (deactivate) deactivate();
    isActive = true;
    deactivate = deactivateNode;
  }
  function deactivateNode() {
    isActive = false;
  }
</script>

<div on:click={activate} class:active={isActive}>
  <h1>{member.name}</h1>
  {#if member.isParent && member.children?.length}
    <ul>
      {#each member.children as child}
        <svelte:self member={child} />
      {/each}
    </ul>
  {/if}
  <hr />
</div>

<style>
  .active {
    color: red;
  }
</style>
