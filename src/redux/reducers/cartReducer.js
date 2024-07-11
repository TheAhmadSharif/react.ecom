import {
    INIT_CART,
    ADD_CART_ITEM,
    REMOVE_CART_ITEM,
    EMPTY_CART,
    UPDATE_CART_ITEM_AMOUNT

} from '../../tests/constants/redux.js';



const cartReducer = (state = [], action) => {
	
	switch(action.type) {
		case INIT_CART:
			return [action.payload];
		case EMPTY_CART:
			return [action.payload];
		case ADD_CART_ITEM:
			return [action.payload, ...state];
		case UPDATE_CART_ITEM_AMOUNT:
			const { id, price, description, image } = action.payload;
			const objIndex = state.findIndex((obj => obj.id === id));
			if(objIndex > -1) {
				state[objIndex].price = price;
				state[objIndex].description = description;
				state[objIndex].image = image;
				return state;
			} 
			return state;
		case REMOVE_CART_ITEM:
			return state.filter(obj => (
				obj.id !== action.payload.id
			));
		default:
			return state;
	}
};

export default cartReducer;
