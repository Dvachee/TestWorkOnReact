const SET_TYPE = 'SET_TYPE';

let initialState = {
  type: null
}

const typeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TYPE:
      return {
        ...state,
        type: action.sort
      }
      default: 
        return state;
  }
}

export let setType = (sort) => ({ type: SET_TYPE, sort });

export default typeReducer;