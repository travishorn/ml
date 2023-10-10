<script>
	import * as Plot from '@observablehq/plot';
	import { onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	let chart;

	onMount(() => {
		const plot = Plot.plot({
			style: { backgroundColor: 'transparent', margin: '20px' },
			symbol: { legend: true },
			marks: [
				Plot.dot(data.drawings, {
					x: 'width',
					y: 'height',
					stroke: 'label',
					symbol: 'label',
					tip: {
						fill: '#212121'
					}
				})
			]
		});

		chart.append(plot);
	});
</script>

<svelte:head>
	<title>Predict | Machine Learning</title>
</svelte:head>

<div class="bg-neutral-900 border-2 border-neutral-700 mb-5" role="img" bind:this={chart} />

<div>
	<em
		>To do (under development): a canvas on which to draw will go here. A prediction will be made
		based on the features of the drawing compared to the training data above.</em
	>
</div>
