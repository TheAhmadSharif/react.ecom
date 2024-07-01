/** @format */

// PRODUCT ACTION CREATORS

import {
	ADD_ITEM,
	REMOVE_ITEM,
	GET_ITEMS,
´	productMsg,
} from '../../tests/constants/redux.js';

/**
 * @description Asynchronous Action creator for getting a single product. Dispatches an action with type GET_PRODUCT through thunk if succesful or NEW_NOTIFICATION-type and error message from db in the payload
 * @param {string} productId - The id of the product to get
 * @return {Function} - Thunk -> action
 */
export const getItem = (productId) => {
	return (dispatch) => {
		dispatch({
			type: ADD_ITEM,
			payload: productId
		});
	};
};

/**
 * @description Asynchronous Action creator that dispatches all the products it receives from DB to the frontends redux-stores product-state. Dispatches GET_PRODUCTS with products as payload if succesfull, or NEW_NOTIFICATION-type and error message from db in the payload
 * @return {Function} - Thunk -> action
 */
export const getProducts = (data) => {
	return (dispatch) => {
		dispatch({
			type: GET_ITEMS,
			payload: data
		});
	};
};

/**
 * @description Asynchronous Action creator that adds a new product to the DB, then dispatches an ADD_PRODUCT-type action with product as payload to the frontends redux-stores product-state, as well as a NEW_NOTIFICATION-type action to the frontends notification-state with the productMsg.added as a successful message. If the response is not ok, it only dispatches a NEW_NOTIFICATION-type action to the frontends notification state along with the error message from db as an unsuccessfull message. If the error itself is an object, then it should pass whatever is inside the object.
 *  * @param {Object} productToAdd - The product to add
 * @return {Function} - Thunk -> action
 */
export const addProduct = (productToAdd) => {
	return (dispatch) => {
		dispatch({
			type: ADD_ITEM,
			payload: productToAdd

		});
	};
};

export const deleteProduct = (productId) => {
	return (dispatch) => {
		dispatch({
			type: REMOVE_ITEM,
			payload: productId

		});
	};
};
