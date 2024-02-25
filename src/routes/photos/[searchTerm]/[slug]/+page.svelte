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
	<div class="lds-ellipsis">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
</picture>
<h3>
	Photo by: <a
		href={photo.user.links.html}
		title={`${photo.user.first_name || ''} ${photo.user.last_name || ''}`}
		target="_blank">{`${photo.user.first_name || ''} ${photo.user.last_name || ''}`}</a
	>
</h3>

<style>
	picture {
		position: relative;
		display: grid;
		width: 100%;
		place-content: center;
	}
	img {
		max-width: 100%;
		border-radius: 5px;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
		z-index: 10;
	}
	.lds-ellipsis {
		display: inline-block;
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		margin: auto;
		width: 80px;
		height: 80px;
		z-index: 0;
	}
	.lds-ellipsis div {
		position: absolute;
		top: 33px;
		width: 13px;
		height: 13px;
		border-radius: 50%;
		background: #fff;
		animation-timing-function: cubic-bezier(0, 1, 1, 0);
	}
	.lds-ellipsis div:nth-child(1) {
		left: 8px;
		animation: lds-ellipsis1 0.6s infinite;
	}
	.lds-ellipsis div:nth-child(2) {
		left: 8px;
		animation: lds-ellipsis2 0.6s infinite;
	}
	.lds-ellipsis div:nth-child(3) {
		left: 32px;
		animation: lds-ellipsis2 0.6s infinite;
	}
	.lds-ellipsis div:nth-child(4) {
		left: 56px;
		animation: lds-ellipsis3 0.6s infinite;
	}
	@keyframes lds-ellipsis1 {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}
	@keyframes lds-ellipsis3 {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(0);
		}
	}
	@keyframes lds-ellipsis2 {
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(24px, 0);
		}
	}
</style>
