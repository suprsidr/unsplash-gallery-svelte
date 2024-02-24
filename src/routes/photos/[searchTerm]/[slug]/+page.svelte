<script>
	import { page } from '$app/stores';
	export let data;
	$: ({ photo } = data);
	$: ({ searchTerm } = $page.params);
	$: srcSet = `${photo.urls.full} 1920w, ${photo.urls.regular} 1080w, ${photo.urls.small} 400w`;
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
<picture>
	<source
		{srcSet}
		sizes="(max-width: 600px) 400px, (max-width: 1280px) 1080px, (max-width: 1920px) 100vw, 1920px"
	/>
	<img
		src={photo.urls.full}
		{srcSet}
		sizes="(max-width: 600px) 400px, (max-width: 1280px) 1080px, (max-width: 1920px) 100vw, 1920px"
		alt={photo.description || photo.alt_description || 'No description'}
		style={`width: 100%; aspect-ratio: ${photo.width}/${photo.height}`}
	/>
</picture>
<h3>
	Photo by: <a
		href={photo.user.links.html}
		title={`${photo.user.first_name || ''} ${photo.user.last_name || ''}`}
		target="_blank">{`${photo.user.first_name || ''} ${photo.user.last_name || ''}`}</a
	>
</h3>

<style>
	img {
		max-width: 100%;
		border-radius: 5px;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
	}
</style>
