<script>
</script>

<style lang="postcss" scoped>
  img {
    @apply w-9;
  }
  #heading {
    @apply grid grid-cols-1 place-items-center;
  }
  #container {
    color: var(--secondary-color);
    border-bottom: 2px solid var(--secondary-color);
    @apply p-2 px-4 m-0 h-20 grid grid-cols-12 place-items-center gap-3;
  }
  .logo-c {
    font-family: 'Stick No Bills';
  }
  button{
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
    @apply w-full rounded-2xl p-1;
  }
  button:hover{
    background-color: var(--primary-color);
    color: white;
    box-shadow: 0 0 10px var(--primary-color), 0 0 40px var(--primary-color), 0 0 80px var(--primary-color);
  }
</style>

<div id="container">
  <div id="heading">
    <div>
      <a href="#/"><img src="./logo.png" alt="logo" /></a>
    </div>
    <div>
      S<span class="logo-c">C</span>LINK
    </div>
  </div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <button><a href="#/Q&A">QA</a></button>
  <button><a href="#/Support">Support</a></button>
</div>
