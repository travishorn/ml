<script>
	import { onMount } from 'svelte';

	/** @type { HTMLCanvasElement }*/
	let canvas;

	/** @type Array<Array<Array<Number>>> */
	export let paths = [];

	let isDrawing = false;

	/** @type { CanvasRenderingContext2D }*/
	let ctx;

	function draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		paths.forEach((path) => {
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
		});
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

	function undo() {
		if (paths.length > 0) {
			paths.pop();
			paths = paths;
			draw();
		}
	}

	function reset() {
		paths = [];
		draw();
	}

	onMount(() => {
		ctx = canvas.getContext('2d');
		document.onmouseup = () => (isDrawing = false);
	});
</script>

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

<div class="flex gap-2 py-3">
	<button
		class="bg-neutral-700 hover:bg-neutral-600 cursor-pointer px-2 py-1 rounded disabled:opacity-50 disabled:hover:bg-neutral-700 disabled:cursor-not-allowed"
		on:click={undo}
		disabled={paths.length === 0}>Undo</button
	>

	<button
		class="bg-neutral-700 hover:bg-neutral-600 cursor-pointer px-2 py-1 rounded disabled:opacity-50 disabled:hover:bg-neutral-700 disabled:cursor-not-allowed"
		on:click={reset}
		disabled={paths.length === 0}>Reset</button
	>
</div>
