import { api } from '../apis';

export const fetchPosts = () => {
    return {
        type: 'FETCH_POSTS',
        payload: {}
    }
};

export const fetchPostsAsync = () => {
    return async (dispatch/* , getState */) => {
        const response = await api.get('/posts');

        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        });
    }
}