import { setPostData } from './set-post-data';
import { request } from '../utils/request';

export const savePostAsync = (id, newPostData) => (dispatch) => {
	const saveRequest = id
		? request(`/posts/${id}`, 'PATCH', newPostData)
		: request('/posts', 'POST', newPostData);

	return saveRequest.then((updatedPost) => {
		dispatch(setPostData(updatedPost.data));
		console.log('updated data:', updatedPost.data);
		return updatedPost.data;
	});
};
