import { shopApi } from "../../API/api";

const SET_ITEMS = 'SET_ITEMS';
const LIKE_SUCCESS = 'LIKE_SUCCESS';
const DISLIKE_SUCCESS = 'DISLIKE_SUCCESS';

let initialState = {
	shopItems: []
}

const shopReducer = (state = initialState, action) => {
	// debugger
	switch (action.type) {
		case SET_ITEMS:
			return {
				...state,
				shopItems: action.items
			}
		case LIKE_SUCCESS:
			return {
				...state,
				shopItems: state.shopItems.map(i => {
					if (i.id === action.itemId) {
						return {
							...i,
							favorite: true,
						}
					}
					return i;
				})
			}
		case DISLIKE_SUCCESS:
			return {
				...state,
				shopItems: state.shopItems.map(i => {
					if (i.id === action.itemId) {
						return {
							...i,
							favorite: false,
						}
					}
					return i;
				})
			}
		default:
			return state;
	}
}
//ActionCreators
export let setItems = (items) => ({ type: SET_ITEMS, items });
export let likeSuccess = (itemId) => ({type: LIKE_SUCCESS, itemId});
export let dislikeSuccess = (itemId) => ({type: DISLIKE_SUCCESS, itemId});

//ThunkCreators

export const getItems = () => {
	return (dispatch) => {
		// dispatch(toggleIsFetching(true));
		shopApi.getItems()
			.then(response => {
				// dispatch(toggleIsFetching(false));
				dispatch(setItems(response));
			})
	}
}
export const like = (itemId) => {
	return (dispatch) => {
		// dispatch(toggleIsFetching(true));
		shopApi.like(itemId)
			.then(response => {
				// dispatch(toggleIsFetching(false));
				dispatch(likeSuccess(itemId));
			})
	}
}
export const dislike = (itemId) => {
	return (dispatch) => {
		// dispatch(toggleIsFetching(true));
		shopApi.dislike(itemId)
			.then(response => {
				// dispatch(toggleIsFetching(false));
				dispatch(dislikeSuccess(itemId));
			})
	}
}


export default shopReducer;