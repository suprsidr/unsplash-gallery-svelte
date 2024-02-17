const findLowest = (arr) => {
	let lowest = arr[0];
	let index = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < lowest) {
			lowest = arr[i];
			index = i;
		}
	}
	return index;
};

export const chunkArray = (arr) => {
	const heightAcc = [0, 0, 0];
	const acc = { 0: [], 1: [], 2: [] };
	arr.reduce((prev, next) => {
		const idx = findLowest(heightAcc);
		prev[idx].push(next);
		heightAcc[idx] += next.height;
		return prev;
	}, acc);

	return acc;
};
