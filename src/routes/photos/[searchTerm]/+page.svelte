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

<Masonry {photos} {searchTerm} />
