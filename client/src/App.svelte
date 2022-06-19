<script>
  import Navbar from './components/shared/Navbar.svelte'
  import Footer from './components/shared/Footer.svelte'
  import Router from 'svelte-spa-router'
  import {routes} from './components/router/index.js'
</script>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  main {
    color: rgb(255, 255, 255);
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
  <Router {routes}/>
  <Footer/>
</main>
