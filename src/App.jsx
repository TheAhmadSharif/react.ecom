import * as React from 'react';
import './App.css'
import './bootstrap.min.css'
import { Outlet, Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Badge, Container, CssBaseline, Box } from '@mui/material';
import { ShoppingCartCheckout } from '@mui/icons-material';

const primary = {
  main: '#1976d2',
  light: '#42a5f5',
  dark: '#1565c0',
  contrastText: '#fff',
};
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
        default: "#dbdbdb"
      },
    primary: {
      main: primary.dark,
    },
    secondary: {
      main: '#333',
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


  return (
    <>
    <React.Fragment>
    <ThemeProvider theme = { theme }>
      <CssBaseline />
      <Container sx={{ bgcolor: "white", height: "auto", paddingBottom: "24px"}} maxWidth="md" container="true">
        <Box>
        <li><Link  to={`/`}><img src="logo.png" alt="" style={{ height : '100px' }}/> </Link></li>
          
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

             <div className="mt-2 mb-2">
               <hr className=""/>
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
