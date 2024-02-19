import { getPhotos } from '$lib/services/lambda-service';
import { photoArray } from '$lib/signals';
import { error } from '@sveltejs/kit';

export async function load({ fetch, params }) {
	const { searchTerm } = params;
	if (photoArray.value[searchTerm]) return { photos: photoArray.value[searchTerm] };
	const photos = await getPhotos({ page: 1, query: searchTerm }, fetch);

	if (photos.error) throw error(404);

	return {
		photos: photos.results
	};
}
