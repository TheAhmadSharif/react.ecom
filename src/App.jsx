import * as React from 'react';
import './App.css'
import './bootstrap.min.css'
import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import IconButton from '@mui/material/IconButton';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';


const themeOptions = {
  typography: {
    fontFamily: ['Josefin_Sans', 'sans-serif', 'Domine', 'serif'].join(','),
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


  let __state = useSelector((state) => {
    return state;
  });
  const data_list = __state;

  const { cart } = data_list;
  console.log(cart, 'cart')


  return (
    <>
    <React.Fragment>
    <ThemeProvider theme = { theme }>
      <CssBaseline />
      <Container maxWidth="md" container="true">
        <div>
          <img src="logo.png" alt="" style={{ height : '100px' }}/>
        </div>


             <div style={{ minHeight: '80vh'  }}>
              <div className="nav_menu d-flex">
                    <ul className="list d-flex" id="mainMenu">
                      <li><Link  to={`/`}>Home </Link></li>
                      <li><Link  to={`product`}>Product </Link></li>
                      
                    </ul>
                    <div className="d-flex justify-content-end w-100">
                         <li className=""><Link  to={`cart`}>Cart 

                         <StyledBadge badgeContent={4} color="secondary">
                            <ShoppingCartIcon />
                          </StyledBadge>
                                                  
                         
                         </Link></li>
                    </div>
                </div>
              <Outlet />
             </div>
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
