export const ssr = false;
export async function load({ parent }) {
	const photos = await parent();
	return photos;
}
