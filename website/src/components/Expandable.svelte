<!-- ExpandableInfo.svelte -->

<script>
    let isExpanded = false;
    export let title = "Default Title";
    export let description = "Default Description";
  
    function toggleExpand() {
      isExpanded = !isExpanded;
    }
  </script>
  
  <div class="expandable-card" on:mouseenter={toggleExpand} on:mouseleave={toggleExpand}>
    <h3 class="title">{title}</h3>
    {#if isExpanded}
      <p class="description">{description}</p>
    {/if}
  </div>
  