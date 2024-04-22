import { dataTestIds } from '../tests/constants/components.js';
import axios from "axios";
import React, { useEffect } from "react";
import {
	useParams,
	Link
  } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../redux/actionCreators/productsActions.js';
import { addCartItem, incrementCartItem, decrementCartItem } from '../redux/actionCreators/cartActions.js';
const Products = () => {
	const { id  } = useParams();
	const dispatch = useDispatch();

	let __state = useSelector((state) => {
		return state;
	}); 
	const { auth, cart, notification } = __state;

	const data_list = __state.products;

	useEffect(() => {
			axios.get(`${window.base_url}/api/products`)
				.then((response) => {
					const data = response.data;
					dispatch(getProducts(data));
			}).catch((error) => {

			});
	}, [])
	const addToCart = (event, obj, qty=1) => {
		event.preventDefault();
		const _obj = {
			"product": {
				...obj,
			},
			"quantity": qty
		}
		dispatch(addCartItem(_obj));
		localStorage.setItem('cart', JSON.stringify(__state.cart));
	}

	const incrementItem  = (id) => {
		const payload = {
			productId: id,
			amount: 1
		}

		dispatch(incrementCartItem(payload));
	}
	const decrementItem  = (id) => {
		const payload = {
			productId: id,
			amount: -1
		}
		dispatch(decrementCartItem(payload));
	}



	return (
			
			<div className="row" id="data-list">
					<h4> Product {id }</h4>
					{data_list && data_list.map((obj, index) =>
					<li className="col" key={index}>
						<div className="card p-3">
							<div className="text-center">
								<Link data-testid={dataTestIds.id} to={`${obj.id}`}> 
									<img src={`${obj.image}`} height="140" />
								</Link>
							</div>
							<div className="">
								<span className="d-block" data-testid={dataTestIds.price} >$ {obj.price}</span>
								<span data-testid={dataTestIds.name}>{obj.name}</span>
														<div className="buttons d-flex flex-row">
									<button data-testid={dataTestIds.add} className="btn btn-success" onClick={(event)=> addToCart(event, obj)}>Add to cart </button>

									<button className="btn btn-primary mx-2" onClick={()=> incrementItem(obj.id)}>+</button>
									<button className="btn btn-primary mx-2" onClick={()=> decrementItem(obj.id)}>-</button>
								</div>
							</div>
						</div>
						</li>
						)}
			</div>
	)
}
export default Products;