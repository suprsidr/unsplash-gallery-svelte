<script>
	import { page } from '$app/stores';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';
	import Masonry from '$lib/components/Masonry.svelte';
	import Toast from '$lib/components/Toast.svelte';
	import { getPhotos } from '$lib/services/lambda-service';
	import { pages, photoArray } from '$lib/signals';
	export let data;

	$: ({ searchTerm } = $page.params);
	$: eod = false;
	// initial
	if (!photoArray.value[$page.params.searchTerm]) {
		pages.value = {
			...pages.value,
			[$page.params.searchTerm]: 1
		};
		photoArray.value = {
			...photoArray.value,
			[$page.params.searchTerm]: data.photos
		};
	}

	const perPage = 30;

	const fetchMore = async () => {
		if (eod) return;
		pages.value[searchTerm] = pages.value[searchTerm] + 1;
		let results = [];
		const json = await getPhotos(
			{ page: pages.value[searchTerm], query: searchTerm },
			window.fetch
		);
		if (json.results) {
			results = json.results.map(
				({ id, slug, description, alt_description, urls, links, likes, user, height, width }) => ({
					id,
					slug,
					description,
					alt_description,
					urls,
					links,
					likes,
					user,
					height,
					width
				})
			);
		}
		eod = !json.error && results.length < perPage;
		const photos = [...photoArray.value[searchTerm], ...results];
		photoArray.value = {
			...photoArray.value,
			[searchTerm]: photos
		};
	};
</script>

<svelte:head>
	<title>{searchTerm.toUpperCase()}</title>
	<meta name="description" content="Photo Gallery" />
</svelte:head>

<Masonry photos={photoArray.value[searchTerm]} {searchTerm} />

{#if eod}
	<Toast message="Sorry no more." />
{:else}
	<IntersectionObserver callback={fetchMore} />
{/if}
