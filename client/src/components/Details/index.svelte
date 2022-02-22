<script>
  import {detailsInformation} from "./detailsInformation.js";
  import ProductDetails from './ProductDetails.svelte'
</script>

<div id="container">
  {#each detailsInformation as detail}
    <div class="heading">
      <h2>{@html detail.heading}</h2>
    </div>
    <div class="detail-text">
      {@html detail.text}
    </div>
  {/each}
  <ProductDetails/>
</div>

<style lang="postcss" scoped>
  .detail-text {
    @apply m-6 ml-3;
  }
  #container {
    @apply mx-8 text-xl pb-2;
  }
  .heading {
    border-bottom: 3px solid #00969b;
  }
</style>
