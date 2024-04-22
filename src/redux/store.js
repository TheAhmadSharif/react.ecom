import { createStore, legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import { thunk } from 'redux-thunk';
import productsReducer from './reducers/productsReducer';


// Redux-devtools extension library
// import { composeWithDevTools } from '@redux-devtools/extension';

export const reducers = combineReducers({
	products: productsReducer
});

export default legacy_createStore(
	reducers,
	composeWithDevTools(applyMiddleware(thunk))
);
