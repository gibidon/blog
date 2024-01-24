import { useState, useEffect } from 'react';

export default function useFetch(url, options = {}) {
	// let [done, setDone] = useState(false);
	let [data, setData] = useState(null);
	let [error, setError] = useState(null);

	useEffect(() => {
		fetch(url, options)
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((e) => setError(e));
		// .finally(() => setDone(true));
	}, [url, options]);

	return { data, error };
	// return { done, data, error };
}
