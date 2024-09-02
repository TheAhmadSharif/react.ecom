import {
	ADD_PRODUCT,
	DELETE_PRODUCT,
	GET_PRODUCT,
	GET_PRODUCTS,
	UPDATE_PRODUCT,
} from '../../tests/constants/redux.js';

/**
 * Implement productsReducer that handles following cases:
 * 1) GET_PRODUCT: adds the single product to an empty state.
 * 2) GET_PRODUCTS: Adds the products to the empty state
 * 3) ADD_PRODUCT: Adds the product as the first entry of the state.
 * 4) UPDATE_PRODUCT: Updates the order in the state and places it as its last entry.
 * 5) DELETE_PRODUCT: Deletes the product from the array.
 * 
 * @param {Array} state old state of products.
 * @param {object} action the action that calls the reducer.
 * @returns {Array} new state for products
 */
const productsReducer = (state = [], action) => {
	
	switch(action.type) {
		case GET_PRODUCT:
			return [action.payload];
		case GET_PRODUCTS:
			console.log(state, '_________27', action)
			return action.payload;
		case ADD_PRODUCT:
			return [action.payload, ...state];
		case UPDATE_PRODUCT:
			const { id, price, description, image } = action.payload;
			const objIndex = state.findIndex((obj => obj.id === id));
			if(objIndex > -1) {
				state[objIndex].price = price;
				state[objIndex].description = description;
				state[objIndex].image = image;
				return state;
			} 
			return state;
		case DELETE_PRODUCT:
			return state.filter(obj => (
				obj.id !== action.payload.id
			));
		default:
			return state;
	}
};

export default productsReducer;
