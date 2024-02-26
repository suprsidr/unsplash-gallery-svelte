<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	export let data;
	$: ({ photo } = data);
	$: ({ searchTerm } = $page.params);
	$: srcSet = `${photo.urls.full} 1920w, ${photo.urls.regular} 1080w, ${photo.urls.small} 400w`;
	onMount(() => {
		setTimeout(() => {
			const el = document.querySelector('[title="Back"]');
			if (el) {
				el.scrollIntoView({ behavior: 'instant' });
			}
		}, 100);
	});
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
		on:load={() => {
			const el = document.querySelector('.lds-ellipsis');
			if (el) {
				el.style.display = 'none';
			}
		}}
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
		display: block;
		position: relative;
	}
	img {
		max-width: 100%;
		border-radius: 5px;
		box-shadow:
			inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075),
			/* shadow ring 👇 */ 0 0 0 1px hsla(0, 0%, 0%, 0.05),
			/* multiple soft shadows 👇 */ 0 0.3px 0.4px hsla(0, 0%, 0%, 0.02),
			0 0.9px 1.5px hsla(0, 0%, 0%, 0.045),
			0 3.5px 6px hsla(0, 0%, 0%, 0.09);
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
		height: 13px;
	}
	.lds-ellipsis div {
		position: absolute;
		top: 33px;
		width: 13px;
		height: 13px;
		border-radius: 50%;
		background: var(--color-link);
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
