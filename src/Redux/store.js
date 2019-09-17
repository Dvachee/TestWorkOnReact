import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import shopReducer from "./reducers/shop-reducer";
import appReducer from './reducers/app-reducer';
import typeReducer from "./reducers/type-reducer";

let reducers = combineReducers({
    shop : shopReducer,
    app: appReducer,
    type: typeReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
window.store = store;