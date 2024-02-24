const findLowest = (arr) => {
	const sorted = [...arr].sort((a, b) => a - b);
	let lowest = sorted[0];
	let index = arr.findIndex((el) => el === lowest);
	return index;
};

export const chunkArray = (arr = [], noCols = 3) => {
	const heightAcc = [0, 0, 0].slice(0, noCols);
	const acc = [[], [], []].slice(0, noCols);
	arr.reduce((prev, next) => {
		const idx = findLowest(heightAcc);
		prev[idx].push(next);
		heightAcc[idx] += next.height;
		return prev;
	}, acc);

	return acc;
};
