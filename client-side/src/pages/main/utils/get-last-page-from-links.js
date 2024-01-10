export const getLastPageFromLinks = (links) => {
	const result = links.match(/_page=(\d{1,4})&_limit=\d{1,3}>; rel="last"/) ?? 1;
	console.log(links);
	console.log('res:', result);
	console.log(result[1]);
	return result ? Number(result[1]) : 1;
};
