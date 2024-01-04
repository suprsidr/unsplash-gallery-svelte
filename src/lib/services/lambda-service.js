const LAMBDA_URL = 'https://3lxfopan2i.execute-api.us-east-1.amazonaws.com';

/**
 * @param {number} id
 * @param {function} fetch
 * @returns {Promise<{error: string | null, results: photos[]}>}
 */
export const getDownloadUrl = async (id, fetch) => {
	const response = await fetch(`${LAMBDA_URL}/download/${id}`);
	return await response.json();
};

/**
 * @param {{page: number, query: string}} params
 * @param {function} fetch
 * @returns {Promise<{error: string | null, results: photos[]}>}
 */
export const getPhotos = async ({ page, query }, fetch) => {
	const response = await fetch(`${LAMBDA_URL}/search/photos/${query}/${page}`);
	return await response.json();
};

/**
 * @param {{page: number, query: string}} params
 * @param {function} fetch
 * @returns {Promise<{error: string | null, results: photos[]}>}
 */
export const getCollectionList = async ({ page, query }, fetch) => {
	const response = await fetch(`${LAMBDA_URL}/search/collections/${query}/${page}`);
	return await response.json();
};

/**
 * @param {{page: number, id: number}} params
 * @param {function} fetch
 * @returns {Promise<{error: string | null, results: photos[]}>}
 */
export const getCollectionPhotos = async ({ page, id }, fetch) => {
	const response = await fetch(`${LAMBDA_URL}/collections/${id}/photos/${page}`);
	return await response.json();
};

/**
 * @param {{id: number}} params
 * @param {function} fetch
 * @returns {Promise<{error: string | null, results: photos[]}>}
 */
export const getRelatedCollections = async ({ id }, fetch) => {
	const response = await fetch(`${LAMBDA_URL}/collections/${id}/related`);
	return await response.json();
};

/**
 * @param {{id: number}} params
 * @param {function} fetch
 * @returns {Promise<{error: string | null, results: photos[]}>}
 */
export const getCollectionInfo = async ({ id }, fetch) => {
	const response = await fetch(`${LAMBDA_URL}/collections/${id}`);
	return await response.json();
};

/**
 * @param {{page: number, userName: string}} params
 * @param {function} fetch
 * @returns {Promise<{error: string | null, results: photos[]}>}
 */
export const getUserCollections = async ({ page, userName }, fetch) => {
	const response = await fetch(`${LAMBDA_URL}/users/${userName}/collections/${page}`);
	return await response.json();
};
