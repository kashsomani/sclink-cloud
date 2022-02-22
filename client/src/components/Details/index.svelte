<script>
  import { detailsInformation } from './detailsInformation.js'
  import ProductDetails from './ProductDetails.svelte'
</script>

<style lang="postcss" scoped>
  .detail-text {
    @apply  ml-8 mb-6;
  }
  img{
    @apply h-3;
  }
  #container {
    @apply mx-0 text-xl pb-2;
  }
  .heading {
    border-bottom: 3px solid #00969b;
    @apply mx-4 mb-2;
  }
  .table-heading {
    border-bottom: 3px solid #00969b;
    @apply mb-0 pb-0;
  }
  .table{
    @apply grid grid-rows-5 gap-0 space-y-0 place-items-center text-sm py-0 my-0 mx-4;
  }
  .row{
    @apply grid grid-cols-5 place-items-center my-0 py-0 h-full w-full gap-0 space-y-0;
  }
  .first{
    border-right: 3px solid #00969b;
    @apply mx-0 my-0 pt-2 px-2 min-w-full min-h-full;
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
    <div class="table">
      <div class="row table-heading">
        <div class="first"></div>
        <div>Nano</div>
        <div>Micro</div>
        <div>Mega</div>
        <div>Giga</div>
      </div>
      <div class="row">
        <div class="first">Webpage</div>
        <div><img src="./tick.png" alt="tick"></div>
        <div><img src="./tick.png" alt="tick"></div>
        <div><img src="./tick.png" alt="tick"></div>
        <div><img src="./tick.png" alt="tick"></div>
      </div>
      <div class="row">
        <div class="first">Email</div>
        <div></div>
        <div><img src="./tick.png" alt="tick"></div>
        <div><img src="./tick.png" alt="tick"></div>
        <div><img src="./tick.png" alt="tick"></div>
      </div>
      <div class="row">
        <div class="first">Database</div>
        <div></div>
        <div></div>
        <div><img src="./tick.png" alt="tick"></div>
        <div><img src="./tick.png" alt="tick"></div>
      </div>
      <div class="row">
        <div class="first">Email Sending</div>
        <div></div>
        <div></div>
        <div><img src="./tick.png" alt="tick"></div>
        <div><img src="./tick.png" alt="tick"></div>
      </div>
      <div class="row">
        <div class="first">WhatsApp</div>
        <div></div>
        <div></div>
        <div></div>
        <div><img src="./tick.png" alt="tick"></div>
      </div>
    </div>
    {/if}
  {/each}
  <ProductDetails />
</div>
