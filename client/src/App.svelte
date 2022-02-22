<script>
  import Navbar from "./components/Navbar.svelte";
  import Intro from "./components/Intro.svelte";
  import Details from "./components/Details.svelte";
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css?family=Roboto Condensed"
    rel="stylesheet"
  />
</svelte:head>
<main>
  <Navbar />
  <Intro />
  <Details />
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  main {
    color: white;
    background-color: #0e1535;
    @apply p-0 m-0 h-full;
  }
</style>
