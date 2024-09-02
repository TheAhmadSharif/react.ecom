import {
    INIT_CART,
    ADD_CART_ITEM,
    REMOVE_CART_ITEM,
    EMPTY_CART,
    UPDATE_CART_ITEM_AMOUNT

} from '../../tests/constants/redux.js';

const t = [{
	"product": {
		"id": 1,
		"title": "Essence Mascara Lash Princess",
		"category": "beauty",
		"price": 10,
		"images": [
			"products/shirt.1.jpg"
		]
	},
	"quantity": 1
}]

const cartReducer = (state = [], action) => {
	
	switch(action.type) {
		case INIT_CART:
			return state;
		case EMPTY_CART:
			return [];
		case ADD_CART_ITEM:
			console.log([...state, action.payload])
			return [...state, action.payload];
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
				obj.product.id !== action.payload
			));

			
			
		default:
			return state;
	}
};

export default cartReducer;
