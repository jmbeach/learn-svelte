<script>
  export let member;
</script>

<h1>{member.name}</h1>
{#if member.isParent && member.children?.length}
  <ul>
    {#each member.children as child}
      <svelte:self member={child} />
    {/each}
  </ul>
{/if}
<hr />
