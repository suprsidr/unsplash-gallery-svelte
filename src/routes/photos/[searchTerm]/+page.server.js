export async function load({ parent }) {
	const photos = await parent();
	return photos;
}
