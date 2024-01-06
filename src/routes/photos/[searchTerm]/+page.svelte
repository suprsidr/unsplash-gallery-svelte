<script>
	import { page } from '$app/stores';
	import Masonry from '$lib/components/Masonry.svelte';
	export let data;
	$: ({ photos } = data);
	$: ({ searchTerm } = $page.params);
</script>

<svelte:head>
	<title>{searchTerm.toUpperCase()}</title>
	<meta name="description" content="Photo Gallery" />
</svelte:head>

<Masonry reset={searchTerm}>
	{#each photos as photo}
		<div class="container">
			<a href={`/photos/${searchTerm}/${photo.slug}`}
				><img
					src={photo.urls.small}
					alt={photo.description || photo.alt_description || 'No description'}
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
