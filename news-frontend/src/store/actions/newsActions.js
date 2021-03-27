import axiosApi from "../../axiosApi";

export const POST_POST_REQUEST = 'POST_POST_REQUEST';
export const POST_POST_SUCCESS = 'POST_POST_SUCCESS';
export const POST_POST_FAILURE = 'POST_POST_FAILURE';

export const postPostRequest = () => ({type: POST_POST_REQUEST});
export const postPostSuccess = () => ({type: POST_POST_SUCCESS});
export const postPostFailure = error => ({type: POST_POST_FAILURE});

export const postPost = post => {
	return async dispatch => {
		try {
			dispatch(postPostRequest());
			await axiosApi.post('/', post);
			dispatch(postPostSuccess());
		} catch (e) {
			dispatch(postPostFailure());
		}
	}
};