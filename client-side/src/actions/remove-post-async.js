import { request } from '../utils/request';

export const removePostAsync = (id) => () => request(`/posts/${id}`, 'DELETE');
// export const removePostAsync = (requestServer, id) => requestServer('removePost', id);
