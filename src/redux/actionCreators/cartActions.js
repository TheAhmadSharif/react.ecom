import {
    INIT_CART,
    ADD_CART_ITEM,
    REMOVE_CART_ITEM,
    EMPTY_CART,
    UPDATE_CART_ITEM_AMOUNT

} from '../../tests/constants/redux.js';

export const initCart = () => {
	return (dispatch) => {
		dispatch({
			type: INIT_CART,
		});
	};
};

export const addCartItem = (product) => {
	return (dispatch) => {
		dispatch({
			type: ADD_CART_ITEM,
            payload: product
		});
	};
};

export const removeCartItem = (id) => {
	return (dispatch) => {
		dispatch({
			type: REMOVE_CART_ITEM,
            payload: id
		});
	};
};


export const emptyCart = () => {
	return (dispatch) => {
		dispatch({
			type: EMPTY_CART,
		});
	};
};


export const incrementCartItem = (id) => {
    return (dispatch) => {
		dispatch({
			type: UPDATE_CART_ITEM_AMOUNT,
			payload: id
		});
	};

}

