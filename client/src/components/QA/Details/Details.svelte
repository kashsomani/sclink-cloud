<script>
  import { detailsInformation } from './detailsInformation.js'

</script>

<style lang="postcss" scoped>
  .detail-text {
    @apply mx-8 mb-6;
  }
  .detail{
    background-color:var(--dark-background);
    @apply my-4 p-2 rounded;
  }
  #container {
    @apply mx-0 sm:text-xl pb-2 text-justify px-6;
  }
  .heading {
    border-bottom: 3px solid var(--secondary-color);
    @apply mx-4 mb-2 text-xl;
  }
  img {
    @apply px-16;
  }
  img {
    @apply px-16;
  }
</style>

<div id="container">
  {#each detailsInformation as detail}
    <div class="detail">
      <div class="heading">
        <h2>
          {@html detail.heading}
        </h2>
      </div>
      <div class="detail-text">
        {@html detail.text}
      </div>
      {#if detail.illustration}
        <div id="illustration">
          <img src="./linking-illustration.png" alt="" />
  
        </div>
        <div class="detail-text text-center">{@html detail.illustrationText}</div>
      {/if}

    </div>
  {/each}
</div>
