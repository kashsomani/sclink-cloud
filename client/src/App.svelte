<script>
  import Navbar from './components/Navbar.svelte'
  import Intro from './components/Intro.svelte'
  import Details from './components/Details/index.svelte'
</script>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  main {
    color: rgb(167, 167, 167);
    @apply p-0 m-0 h-screen;
  }
</style>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css?family=Roboto Condensed"
    rel="stylesheet" />
</svelte:head>
<main>
  <Navbar />
  <Intro />
  <Details />
</main>
