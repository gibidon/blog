import { useState, useEffect, useMemo } from 'react';

import { usePostData } from '../../hooks';

import { Pagination, PostCard, Search } from './components';
import { PAGINATION_LIMIT } from '../../constants';
import { debounce } from './utils';
import { request } from '../../utils/request';
import { styled } from 'styled-components';

export const MainContainer = ({ className }) => {
	// const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	// const [lastPage, setLastPage] = useState(1);
	const [shouldSearch, setShouldSearch] = useState(false);
	const [searchPhrase, setSearchPhrase] = useState('');

	const [posts, lastPage] = usePostData(searchPhrase, page, PAGINATION_LIMIT);
	console.log('posts: ', posts);
	// useEffect(() => {
	// 	request(`/posts?search=${searchPhrase}&page=${page}&limit=${PAGINATION_LIMIT}`).then(
	// 		({ data: { posts, lastPage } }) => {
	// 			setPosts(posts);
	// 			setLastPage(lastPage);
	// 		},
	// 	);
	// }, [page, shouldSearch, searchPhrase]);

	const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 2000), []);
	//debounce return func that can accept args,in our case !shouldSearch
	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelayedSearch(!shouldSearch);
	};

	return (
		<div className={className}>
			<div className="posts-and-search">
				<Search searchPhrase={searchPhrase} onChange={onSearch} />

				{posts.length > 0 ? (
					<div className="post-list">
						{posts.map(({ id, title, imageUrl, publishedAt, comments }) => (
							<PostCard
								key={id}
								id={id}
								imageUrl={imageUrl}
								title={title}
								publishedAt={publishedAt}
								commentsCount={comments.length}
							/>
						))}
					</div>
				) : (
					<div className="no-posts-found"> Статьи не найдены</div>
				)}
			</div>

			{lastPage > 1 && posts.length > 0 && (
				<Pagination page={page} lastPage={lastPage} setPage={setPage} />
			)}
		</div>
	);
};

export const Main = styled(MainContainer)`
	& .posts-and-search {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	& .post-list {
		display: flex;
		flex-wrap: wrap;
		padding: 20px 20px 80px;
	}

	& .no-posts-found {
		text-align: center;
		font-size: 18px;
		margin-top: 40px;
	}
`;
