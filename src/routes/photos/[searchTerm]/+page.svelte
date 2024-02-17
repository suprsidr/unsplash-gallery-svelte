<script>
	import { page } from '$app/stores';
	import { chunkArray } from '$lib/utils';
	export let data;

	$: ({ photos } = { photos: chunkArray(data.photos) });
	$: ({ searchTerm } = $page.params);
</script>

<svelte:head>
	<title>{searchTerm.toUpperCase()}</title>
	<meta name="description" content="Photo Gallery" />
</svelte:head>

<h1>{searchTerm.toUpperCase()}</h1>
<div class="wrapper">
	{#each [0, 1, 2] as idx}
		<div>
			{#each photos[idx] as photo}
				<div class="container">
					<a href={`/photos/${searchTerm}/${photo.slug}`}
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
	.container {
		margin-bottom: 8px;
	}
	.container img {
		max-width: 100%;
		border-radius: 5px;
		object-fit: contain;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
	}
	.wrapper {
		max-width: 100%;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 10px;
	}
</style>
