<script>
	import { page } from '$app/stores';
	import Masonry from '$lib/components/Masonry.svelte';
	export let data;
	$: ({ photos } = data);
	$: ({ searchTerm } = $page.params);
</script>

<Masonry reset={searchTerm}>
	{#each photos as photoItem}
		<div class="container">
			<a href={`/photos/${searchTerm}/${photoItem.slug}`}
				><img
					src={photoItem.urls.small}
					alt={photoItem.description || photoItem.alt_description || 'No description'}
				/></a
			>
		</div>
	{/each}
</Masonry>

<style>
	.container img {
		max-width: 100%;
		border-radius: 5px;
		object-fit: contain;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
	}
</style>
