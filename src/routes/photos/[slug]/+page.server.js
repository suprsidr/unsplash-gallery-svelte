import { getPhotos } from '$lib/services/lambda-service';
import { error } from '@sveltejs/kit';

export async function load({ fetch, params }) {
	const photos = await getPhotos({ page: 1, query: 'cats' }, fetch);

	const photo = photos.results.find((p) => p.slug === params.slug);
	console.log(photo);

	if (photos.error) throw error(404);

	return { photo };
}
