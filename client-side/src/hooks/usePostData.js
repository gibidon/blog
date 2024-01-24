import { useState, useEffect } from 'react';

export const usePostData = (searchPhrase, page, PAGINATION_LIMIT) => {
	const [posts, setPosts] = useState([]);
	const [lastPage, setLastPage] = useState(1);

	useEffect(() => {
		fetch(`/posts?search=${searchPhrase}&page=${page}&limit=${PAGINATION_LIMIT}`)
			.then((res) => res.json())
			.then(({ data: { posts, lastPage } }) => {
				setPosts(posts);
				setLastPage(lastPage);
			});
	}, [page, searchPhrase, PAGINATION_LIMIT]);

	return [posts, lastPage];
};
