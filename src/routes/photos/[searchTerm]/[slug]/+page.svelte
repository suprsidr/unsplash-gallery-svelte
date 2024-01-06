<script>
	import { page } from '$app/stores';
	export let data;
	$: ({ photo } = data);
	$: ({ searchTerm } = $page.params);
</script>

<svelte:head>
	<title>{photo.description || photo.alt_description || 'No description'}</title>
	<meta name="description" content="Photo" />
</svelte:head>

<a
	href={`/photos/${searchTerm}`}
	title="Back"
	on:click={(e) => {
		e.preventDefault();
		window.history.go(-1);
	}}>Back</a
>
<h2>{photo.description || photo.alt_description || 'No description'}</h2>
<img src={photo.urls.small} alt={photo.description || photo.alt_description || 'No description'} />

<style>
	img {
		max-width: 100%;
		border-radius: 5px;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
	}
</style>
