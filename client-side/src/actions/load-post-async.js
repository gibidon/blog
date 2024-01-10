import { setPostData } from './set-post-data';
import { request } from '../utils/request';

export const loadPostAsync = (postId) => (dispatch) =>
	request(`/posts/${postId}`).then((postData) => {
		console.log('all pd :', postData);
		console.log('postData: ', postData.data);

		if (postData.data) {
			dispatch(setPostData(postData.data));
		}

		return postData;
	});
