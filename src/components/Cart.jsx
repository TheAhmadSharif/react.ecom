import { dataTestIds } from '../tests/constants/components.js';
import axios from "axios";
import { createNotification } from '../redux/actionCreators/notificationsActions.js';
import { addCartItem, removeCartItem } from '../redux/actionCreators/cartActions.js';
import { useSelector, useDispatch } from 'react-redux';
const Cart = () => {
	const global_store = useSelector((state) => {
		return state;
	});
	let data_list = global_store.cart;
	const removeItem = (obj) => {
		dispatch(removeCartItem(obj));
		localStorage.setItem('cart', JSON.stringify(data_list));
	}
	const dispatch = useDispatch();
	
	if(data_list.length == 0) {
		const local_storage = JSON.parse(localStorage.getItem("cart"));
		if(local_storage.length > 0) {
			local_storage.map((obj) => {
				dispatch(addCartItem(obj));
			})	
		}
				
	}
	const grand_total = data_list.reduce((total, obj) => {
		return total + (obj.product.price * obj.quantity);
	}, 0);
	let orderItems = (event) => {
		const order_items = data_list.map(item=>{
			const __item = {
				"product": {
				  "id": item.product.id,
				  "name": item.product.name,
				  "price": item.product.price,
				  "description": item.product.description,
				},
				"quantity": item.quantity
			  }
			return __item;
		})
		const order_data = {
			"customerId": global_store.auth.id,
			"items": order_items
		} 
		event.preventDefault();
    	axios.post(`${window.base_url}/api/orders`, order_data)
        .then((response) => {
				log(response);
		}).catch((error) => {
			const err_msg = error.response;
			log(err_msg)
			let payload = { 
				"message": "Error"
			}
			if(error.response.data && error.response.data.error) {
				payload = { 
					"message": error.response.data.error
				}
			}
		
			dispatch(createNotification(payload));
			setTimeout(() => {
				const payload = { 
					"message": 'No New Notification', 
				}
				dispatch(createNotification(payload));
			}, 5000);
		});
	};


	
	return (
			
			<div className="row" id="data-list" data-testid={dataTestIds.containerId}>
				<div>
					Cart
				</div>
				<table className="table">
					<tbody>
					{data_list && data_list.map((obj, index) => 
						<tr key={index}>
							<td> 
							    <img src={`${obj.product.image}`} height="140" />
								{ obj.product.name }
							</td>
							<td>
								$ { obj.product.price } x { obj.quantity } = { obj.product.price * obj.quantity}
							</td>

							<td>
							<button className="btn btn-danger" onClick={(e) => { removeItem(obj.product) }}>Remove </button>
							</td>
						</tr>
					)}
					<tr>
						<td>Grand Total</td>
						<td> { grand_total } $</td>
						<td> 
							<button className="btn btn-success" onClick={(e) => { orderItems(e) }}>Order </button>
						</td>
					</tr>
					</tbody>
				</table>
					
			</div>
	)
}
export default Cart;