<script>
	import { onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	/** @type { HTMLCanvasElement }*/
	let canvas;

	/** @type { CanvasRenderingContext2D }*/
	let ctx;

	/** @type Array<Array<Array<Number>>> */
	let paths = [];

	let isDrawing = false;

	function draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		for (const path of paths) {
			ctx.strokeStyle = 'white';
			ctx.lineWidth = 3;
			ctx.beginPath();
			ctx.moveTo(...path[0]);
			for (let i = 1; i < path.length; i += 1) {
				ctx.lineTo(...path[i]);
			}
			ctx.lineCap = 'round';
			ctx.lineJoin = 'round';
			ctx.stroke();
		}
	}

	function undo() {
		if (paths.length > 0) {
			paths.pop();
			draw();
		}
	}

	/** @param { MouseEvent } e */
	function mouseCoords(e) {
		const rect = e.currentTarget?.getBoundingClientRect();
		return [Math.round(e.clientX - rect.left), Math.round(e.clientY - rect.top)];
	}

	/** @param { MouseEvent } e */
	function mouseDown(e) {
		const mouse = mouseCoords(e);
		paths.push([mouse]);
		paths = paths;
		isDrawing = true;
	}

	/** @param { MouseEvent } e */
	function mouseMove(e) {
		if (isDrawing) {
			const mouse = mouseCoords(e);
			paths[paths.length - 1].push(mouse);
			paths = paths;
			draw();
		}
	}

	function mouseUp() {
		isDrawing = false;
	}

	/** @param { TouchEvent } e */
	function touchStart(e) {
		mouseDown(e.touches[0]);
	}

	/** @param { TouchEvent } e */
	function touchMove(e) {
		mouseMove(e.touches[0]);
	}

	function touchEnd() {
		mouseUp();
	}

	onMount(() => {
		ctx = canvas.getContext('2d');

		document.onmouseup = () => (isDrawing = false);
	});
</script>

<h2 class="text-2xl">Draw</h2>

<div>Draw a {data.label.title}.</div>

<canvas
	class="bg-neutral-900 border-2 border-neutral-700"
	width="500"
	height="500"
	bind:this={canvas}
	on:mousedown={mouseDown}
	on:mousemove={mouseMove}
	on:mouseup={mouseUp}
	on:touchstart={touchStart}
	on:touchmove={touchMove}
	on:touchend={touchEnd}
/>

<button on:click={undo} disabled={paths.length === 0}>Undo</button>

<form method="post">
	<input type="hidden" name="labelId" value={data.label.id} />
	<input type="hidden" name="paths" value={JSON.stringify(paths)} />
	<button disabled={paths.length === 0}>Done</button>
</form>
