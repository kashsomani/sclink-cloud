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
    color: #00969b;
    border-bottom: 2px solid #00969b;
    @apply p-2 px-4 m-0 h-20 grid grid-cols-12 place-items-center gap-3 rounded-xl;
  }
  .logo-c {
    font-family: 'Stick No Bills';
  }
  button{
    border: 2px solid #00969b;
    @apply w-full text-white rounded-xl;
  }
  button:hover{
    color: #22bef1;
    background-color: rgba(31, 44, 71, 0.1);
    box-shadow: 0 0 10px #22bef1, 0 0 40px #22bef1, 0 0 80px #22bef1;
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
