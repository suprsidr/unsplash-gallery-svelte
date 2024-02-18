import { photoArray } from '$lib/signals';

export async function load({ params }) {
	// const { photos } = await parent();

	return {
		photo: photoArray.value.find((photo) => photo.slug === params.slug)
	};
}
