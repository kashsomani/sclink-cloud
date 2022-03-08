<script>
  import { detailsInformation } from './detailsInformation.js'
  import ProductDetails from './ProductDetails.svelte'
  import Table from './Table.svelte'
</script>

<style lang="postcss" scoped>
  .detail-text {
    @apply  ml-8 mb-6;
  }
  #container {
    @apply mx-0 text-xl pb-2;
  }
  .heading {
    border-bottom: 3px solid #00969b;
    @apply mx-4 mb-2;
  }
</style>

<div id="container">
  {#each detailsInformation as detail}
    <div class="heading">
      <h2>
        {@html detail.heading}
      </h2>
    </div>
    <div class="detail-text">
      {@html detail.text}
    </div>
    {#if detail.table}
    <Table/>
    {/if}
  {/each}
  <ProductDetails />
</div>
