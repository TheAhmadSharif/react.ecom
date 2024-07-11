
import '../App.css'

import { Outlet, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


function Cart() {
  const [count, setCount] = useState(0);
  let __state = useSelector((state) => {
    return state;
  });
  
  const data_list = __state;

  console.log(data_list.cart, 'cart')



  return (
    <>
          <Grid container spacing={4}>
   
              <Grid item xs={12}>
                    <h2>Cart</h2>
              </Grid>

               <Grid item xs={12}>
               {
                  data_list && data_list.cart && data_list.cart.map((obj, index) => (

                      <div key={index}>
                              {obj.product.title}  {obj.product.price}
                     </div>
                     
                    )

                )}
               </Grid>

               <Grid item xs={12}>
                  Grand Total = 

               </Grid>
                  
        
            </Grid>
    
    </>
  )
}
export default Cart;
