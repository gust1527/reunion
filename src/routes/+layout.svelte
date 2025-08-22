<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>8.Z Reunion 2025</title>
	<link rel="icon" type="image/png" href="/hue-cap.png" />
	<style>
		body {
			font-family: 'ui-sans-serif', system-ui, sans-serif;
		}
	</style>
</svelte:head>

{@render children?.()}
