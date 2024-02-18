<script>
	// @ts-nocheck
	export let photos, searchTerm;
	import { slugSignal } from '$lib/signals';
	import { chunkArray } from '$lib/utils';
	import { onDestroy, onMount } from 'svelte';
	$: columns = 3;
	$: items = chunkArray(photos, columns);

	let divElem;

	const resizeObserver = new window.ResizeObserver((entries) => {
		for (const entry of entries) {
			if (entry.contentBoxSize) {
				const contentBoxSize = entry.contentBoxSize[0];
				if (columns !== 1 && contentBoxSize.inlineSize < 500) {
					columns = 1;
				}
				if (columns !== 2 && contentBoxSize.inlineSize >= 500 && contentBoxSize.inlineSize < 900) {
					columns = 2;
				}
				if (columns !== 3 && contentBoxSize.inlineSize >= 900) {
					columns = 3;
				}
			}
		}
	});
	onMount(() => {
		divElem = document.querySelector('.wrapper');
		resizeObserver.observe(divElem);
		if (slugSignal.value) {
			setTimeout(() => {
				const el = document.getElementById(slugSignal.value);
				if (el) {
					el.scrollIntoView({ behavior: 'instant' });
				}
			}, 100);
		}
	});
	onDestroy(() => {
		resizeObserver.unobserve(divElem);
	});
</script>

<h1>{searchTerm.toUpperCase()}{columns}</h1>
<div class="wrapper">
	{#each [0, 1, 2].slice(0, columns) as idx}
		<div>
			{#each items[idx] as photo}
				<div id={photo.slug} class="image-container">
					<a on:click={(slugSignal.value = photo.slug)} href={`/photos/${searchTerm}/${photo.slug}`}
						><img
							src={photo.urls.small}
							alt={photo.description || photo.alt_description || 'No description'}
						/></a
					>
				</div>
			{/each}
		</div>
	{/each}
</div>

<style>
	.image-container {
		margin-bottom: 8px;
	}
	.image-container img {
		max-width: 100%;
		width: 100%;
		border-radius: 5px;
		object-fit: contain;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
	}
	.wrapper {
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 10px;
	}
</style>
