
import '../App.css'


import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../redux/actionCreators/productsActions.js';
import { addCartItem } from '../redux/actionCreators/cartActions.js';
import axios from "axios";


import { Grid, Typography, Card, CardContent, CardMedia, Button, CardActionArea, CardActions} from '@mui/material';
import { deepOrange, green, grey, deepPurple } from '@mui/material/colors';

import { ShoppingCartCheckout } from '@mui/icons-material';

function Product() {

	const dispatch = useDispatch();
	let __state = useSelector((state) => {
		return state;
	});
	const data_list = __state.products;

   console.log(__state, '______ State ______', '________ Host __________', window._server);


  useEffect(() => {
			axios.get("https://raw.githubusercontent.com/TheAhmadSharif/react.ecom/main/public/data.json")
				.then((response) => {
					const data = response.data;
					dispatch(getProducts(data));
          console.log(data, '_______ data _______')
			}).catch((error) => {
          console.log(error, '_______ error _______')
			});
	}, [])

  const addtocart = (event, obj, qty=1) => {
    console.log(obj)
		event.preventDefault();
		const _obj = {
			"product": {
				...obj,
			},
			"quantity": qty
		}
		dispatch(addCartItem(_obj));
		localStorage.setItem('cart', JSON.stringify(__state.cart));

    console.log(__state, '_________ State _________')
	}

	


  return (
    <>
    <div>
    <Grid container spacing={4}>
   

        <Grid item xs={12} className="d-flex justify-content-center align-items-center mh">

                  <ul class="list-group">
                    <li class="list-group-item">React App</li>
                    <li class="list-group-item">Ahmad Sharif</li>
                  </ul>
          
        </Grid>


       

      </Grid>
    </div>
    </>
  )
}
export default Product;
