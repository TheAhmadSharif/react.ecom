import { createStore, legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import { thunk } from 'redux-thunk';
import productsReducer from './reducers/productsReducer';
import cartReducer from './reducers/cartReducer';


// Redux-devtools extension library
// import { composeWithDevTools } from '@redux-devtools/extension';

export const reducers = combineReducers({
	products: productsReducer,
	cart: cartReducer
});

export default legacy_createStore(
	reducers,
	composeWithDevTools(applyMiddleware(thunk))
);
