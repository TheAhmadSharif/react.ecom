
import '../App.css'


import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../redux/actionCreators/productsActions.js';
import { addCartItem } from '../redux/actionCreators/cartActions.js';
import axios from "axios";


import { Grid, Typography, Card, CardContent, CardMedia, Button, CardActionArea, CardActions} from '@mui/material';
import { deepOrange, green, grey } from '@mui/material/colors';

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

         {
           data_list && data_list.products && data_list.products.map((obj) =>
             <Grid item xs={4} key={ obj.id }>
           <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="240"
                    image={ obj.images[0] }
                    alt={ obj.title }
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      { obj.title.substring(0, 20)  } - {obj.price} Dollar
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    { obj.title.substring(0, 20) }
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button 
                  sx = {{ 
                    "bgcolor": 'grey',
                    "&:hover": { bgcolor: grey[600] }
                  }}
                  size="small" 
                  variant="outlined" 
                  color="primary"
    
                  startIcon={<ShoppingCartCheckout />}
                  style={{textTransform: 'none'}} 
                  onClick={(event)=> addtocart(event, obj)}
              
                  >
                    Add To Cart
                  </Button>

                  
                </CardActions>
            </Card>
                </Grid>
         )}

      </Grid>
    </div>
    </>
  )
}
export default Product;
