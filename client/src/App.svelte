<script>
	import Navbar from './components/Navbar.svelte'
</script>
<svelte:head>
	<link href='https://fonts.googleapis.com/css?family=Roboto Condensed' rel='stylesheet'>
</svelte:head>
<main>
	<Navbar/>
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

	main{
		color: white;
		background-color: #14132C;
		@apply p-0 m-0 h-full;
	}
</style>