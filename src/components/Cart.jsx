import '../App.css'
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function Cart() {
  let __state = useSelector((state) => {
    return state;
  });
  const data_list = __state;
  console.log(data_list.cart, 'cart')
  let grand_total = data_list && (data_list.cart.length > 0) && data_list.cart.reduce  ( 
    (accumulator, currentValue) => {
      console.log(parseFloat(currentValue.product.price), '_________ Acc ', currentValue.product.price, '________', '\n')
      return parseFloat(currentValue.product.price) + accumulator;
    }, 0)
  console.log(grand_total);
  let rows = [{
    "calories": 12
  }] 
  return (
    <>
          <Grid container spacing={4}>
          <>
            {data_list.cart.length === 0 && (
              <Grid item xs={12} className="d-flex justify-content-center align-items-center mh empty-cart">
                <div>
                  <h2 className="text-center">You don't have any items in your cart. Let's get shopping!</h2>
                  <div className="text-center">
                    <Button className="btn btn-success" href="/shopping-page">
                      Go To Shopping Page
                    </Button>
                  </div>
                </div>
              </Grid>
            )}
          </>
          <>
          {data_list && data_list.cart.length > 1 ? (
                <>
                <Grid item xs= {12} className="d-flex justify-content-center align-items-center">
                     <Typography className="text-uppercase" sx={{ my: 4 }}>Shopping Cart</Typography>
                </Grid>
                  <Grid item xs= {12}>
                  <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell> # </TableCell>
                            <TableCell align="left"> Items </TableCell>
                            <TableCell align="right">Qty</TableCell>
                            <TableCell align="right">Price </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {
                          data_list && data_list.cart && data_list.cart.map((obj, index) => (
                            <TableRow
                              key={index}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >

                              <TableCell align="center">  { index + 1 } </TableCell>
                              <TableCell component="th" scope="row">
                                    <img src={obj.product.images[0] }  height="120"/>
                                    {obj.product.title} 
                                   
                              </TableCell>
                              <TableCell align="right">  1 </TableCell>
                              <TableCell align="right">  {obj.product.price} </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                 
                      <Grid item xs={12}>
                          <div className="d-flex justify-content-end">
                              Grand Total = {(Math.round(grand_total * 100) / 100).toFixed(2)} Dollar
                          </div>
                      </Grid>
                </>
) : null}
          </>
              </Grid>
    </>
  )
}
export default Cart;
