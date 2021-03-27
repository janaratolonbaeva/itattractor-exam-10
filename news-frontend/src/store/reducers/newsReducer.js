import {POST_POST_FAILURE, POST_POST_REQUEST, POST_POST_SUCCESS} from "../actions/newsActions";

const initialState = {
	news: [],
	loading: false,
	postError: ''
};

const newsReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_POST_REQUEST:
			return {...state, loading: true}
		case POST_POST_SUCCESS:
			return {...state, loading: false}
		case POST_POST_FAILURE:
			return {...state, loading: false, postError: action.error}
		default:
			return state
	}
};

export default newsReducer;