export async function load({ params, parent }) {
	const { photos } = await parent();

	return {
		photo: photos.find((photo) => photo.slug === params.slug)
	};
}
