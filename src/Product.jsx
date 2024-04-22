
import './App.css'

import { Outlet, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from './redux/actionCreators/productsActions.js';
import axios from "axios";


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';

function Product() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState({ products: [] });

	const dispatch = useDispatch();
	let __state = useSelector((state) => {
		return state;
	});
	const { auth, cart, notification } = __state;
	const data_list = __state.products;

  useEffect(() => {
			axios.get(`https://dummyjson.com/products?limit=9`)
				.then((response) => {
					const data = response.data;
					dispatch(getProducts(data));
          console.log(data, '_______ data _______')
			}).catch((error) => {
          console.log(error, '_______ error _______')
			});
	}, [])


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
                    height="140"
                    image={ obj.images[0] }
                    alt={ obj.title }
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      { obj.title.substring(0, 20)  }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    { obj.description.substring(0, 40) }
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" variant="outlined" color="primary"
                  style={{textTransform: 'none', border: '2px solid' }}
              
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
