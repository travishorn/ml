<script>
	import { capitalizeFirstLetter } from '$lib/util.js';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="flex flex-col gap-5">
	{#each Object.entries(data.drawings) as [label, drawings]}
		<div>
			<h2 class="text-2xl">{capitalizeFirstLetter(label)}</h2>

			<div class="flex flex-wrap">
				{#each drawings as drawing}
					<div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 p-2">
						<img
							class="bg-neutral-900 border-2 border-neutral-700 w-full h-auto"
							alt={`Drawing of ${label}`}
							src={drawing.imgData}
						/>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>
