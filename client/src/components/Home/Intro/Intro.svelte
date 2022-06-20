<script>
  import Rain from './Rain.svelte'
</script>

<style lang="postcss" scoped>
  #main{
    position: relative;
  }
  #rain{
    position: absolute;
    @apply w-full;
    z-index: -1;
  }
  img {
    @apply w-1/4;
  }
  #intro-text {
    color: white;
    @apply grid grid-cols-1 place-items-center;
    @apply text-center text-2xl;
    @apply p-4;
  }
  .emphasis {
    font-size: xxx-large;
    font-weight: 800;
    color: var(--secondary-color);
  }
  div {
    @apply grid grid-cols-1 place-items-center;
  }
  #container {
    @apply p-2 m-6;
  }
</style>

<div id="main">
  <div id="rain">
    <Rain />
  </div>
  <div id="container">
    <div>
      <img src="./cloud.png" alt="cloud" />
    </div>
    <div id="intro-text">
      <h1>
        LINKING THE
        <br />
        <span class="emphasis">CLOUD</span>
        <br />
        TO
        <br />
        <span class="emphasis">YOUR SCHOOL</span>
      </h1>
    </div>
  </div>
</div>
