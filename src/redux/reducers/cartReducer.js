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
			return [];
		case EMPTY_CART:
			return [];
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
			
			return state.filter(obj => {
				console.log(obj.product.id, '___ ID __', action.payload, '__ action.payload __')
				return obj.product.id == action.payload;  
			});
		default:
			return state;
	}
};

export default cartReducer;
