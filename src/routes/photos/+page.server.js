import { getPhotos } from '$lib/services/lambda-service';
import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
	const photos = await getPhotos({ page: 1, query: 'cats' }, fetch);
	if (photos.error) throw error(404);

	return {
		photos: photos.results
	};
}
