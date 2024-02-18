<script>
	import { page } from '$app/stores';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';
	import Masonry from '$lib/components/Masonry.svelte';
	import { getPhotos } from '$lib/services/lambda-service';
	export let data;

	$: ({ photos } = data);
	$: ({ searchTerm } = $page.params);
	$: pageNum = 1;
	$: eod = false;

	const perPage = 30;

	const fetchMore = async () => {
		if (eod) return;
		pageNum++;
		let results = [];
		const json = await getPhotos({ page: pageNum, query: searchTerm }, window.fetch);
		if (json.results) {
			results = json.results;
		}
		eod = !json.error && results.length < perPage;
		photos = [...photos, ...results];
	};
</script>

<svelte:head>
	<title>{searchTerm.toUpperCase()}</title>
	<meta name="description" content="Photo Gallery" />
</svelte:head>

<Masonry {photos} {searchTerm} />

{#if eod}
	<div>End of Data</div>
{:else}
	<IntersectionObserver callback={fetchMore} />
{/if}
