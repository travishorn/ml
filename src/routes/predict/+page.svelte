<script>
	import * as Plot from '@observablehq/plot';
	import { onMount } from 'svelte';
	import { measure } from '$lib/util.js';
	import Sketchpad from '$lib/components/Sketchpad.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	let chart;

	/** @type Array<Array<Array<Number>>> */
	let paths = [];

	$: drawings = [
		...data.drawings,
		{
			width: measure(paths, 'width'),
			height: measure(paths, 'height'),
			label: '!Drawing'
		}
	];

	$: {
		chart?.firstChild?.remove();
		chart?.append(
			Plot.plot({
				style: { backgroundColor: 'transparent', margin: '20px' },
				symbol: { legend: true },
				marks: [
					Plot.ruleX([0, 500]),
					Plot.ruleY([0, 500]),
					Plot.dot(drawings, {
						x: 'width',
						y: 'height',
						stroke: 'label',
						symbol: 'label'
					})
				]
			})
		);
	}
</script>

<svelte:head>
	<title>Predict | Machine Learning</title>
</svelte:head>

<div class="bg-neutral-900 border-2 border-neutral-700 mb-5" role="img" bind:this={chart} />

<Sketchpad bind:paths />

<div>
	<em>To do (under development): Calculate prediction based on nearest neighbors.</em>
</div>
