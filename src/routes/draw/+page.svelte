<script>
	import Sketchpad from '$lib/components/Sketchpad.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	/** @type Array<Array<Array<Number>>> */
	let paths = [];
</script>

<svelte:head>
	<title>Draw | Machine Learning</title>
</svelte:head>

<div>Draw a {data.label.title}.</div>

<Sketchpad bind:paths />

<form method="post">
	<input type="hidden" name="labelId" value={data.label.id} />
	<input type="hidden" name="paths" value={JSON.stringify(paths)} />
	<button
		class="bg-neutral-700 hover:bg-neutral-600 cursor-pointer px-2 py-1 rounded disabled:opacity-50 disabled:hover:bg-neutral-700 disabled:cursor-not-allowed"
		disabled={paths.length === 0}>Done</button
	>
</form>
