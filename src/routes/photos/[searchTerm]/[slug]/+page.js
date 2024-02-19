import { photoArray } from '$lib/signals';

export async function load({ params }) {
	// const { photos } = await parent();
	return {
		photo: photoArray.value[params.searchTerm].find((photo) => photo.slug === params.slug)
	};
}
