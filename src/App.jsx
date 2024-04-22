import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'


import { Outlet, Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";

import { styled, ThemeProvider, createTheme } from '@mui/material/styles';


import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';


const themeOptions = {

  typography: {
    fontFamily: ['Domine', 'serif'].join(','),
    button: {
      fontSize: 16,
      fontWeight: 400,
    },
  },
  palette: {
    background: {
        default: "#F3F3F3"
      },
    primary: {
      main: '#ff7043',
    },
    secondary: {
      main: '#f4ff81',
    },
  },

};
const theme = createTheme(themeOptions);


function App() {
  const [count, setCount] = useState(0);



  return (
    <>

    <React.Fragment>
    <ThemeProvider theme = { theme }>
      <CssBaseline />
      <Container maxWidth="md" container="true">

              <div className="nav_menu">
                  <ul className="list d-flex" id="mainMenu">
                    <li><Link  to={`/`}>Home </Link></li>
                    <li><Link  to={`product`}>Product </Link></li>
                  </ul>

              </div>
            <Outlet />

            <footer className="footer_section">
            copyright &copy; { new Date().getFullYear() }. All rights. Reserved.
            </footer>


      </Container>
      </ThemeProvider>,
    </React.Fragment>


    </>
  )
}
export default App;
