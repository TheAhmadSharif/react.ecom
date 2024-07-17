import * as React from 'react';
import './App.css'
import './bootstrap.min.css'
import { Outlet, Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Badge, Container, CssBaseline, Box } from '@mui/material';

import { ShoppingCartCheckout } from '@mui/icons-material';

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

  let host = window.location.host; 
  window._server = `http://${host}`;


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
      <Container sx={{ bgcolor: "white", height: "90vh"}} maxWidth="md" container="true">
        <Box>
          <img src="logo.jpg" alt="" style={{ height : '100px' }}/>
        </Box>


             <div style={{ minHeight: '80vh'  }}>
              <div className="nav_menu d-flex">
                    <ul className="list d-flex" id="mainMenu">
                      <li><Link  to={`/`}>Home </Link></li>
                      <li><Link  to={`product`}>Product </Link></li>
                      
                    </ul>
                    <div className="d-flex justify-content-end w-100">
                         <li className=""><Link  to={`cart`}>Cart 

                         <Badge badgeContent={ cart.length } color="primary">
                            <ShoppingCartCheckout color="action" />
                          </Badge>

                                                  
                         
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
