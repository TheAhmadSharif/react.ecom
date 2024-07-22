import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cart from './components/Cart.jsx'
import Product from './components/Product.jsx'
import './index.css'
import './custom.css';

import { Provider } from 'react-redux';
import store from './redux/store';
/* ========= Router ========= */
import {
	BrowserRouter,
	Routes,
	Route,
	HashRouter
  } from "react-router-dom";
/* ========= Router ========= */


ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<HashRouter>
			<Routes>
				<Route path="/" element={<App />}>
					
						<Route index element={<Product />} />
						<Route path="product" element={<Product />} />
						<Route path="cart" element={<Cart />} />
					<Route path="*" lement={<Product />} />
				</Route>
			</Routes>
    	</HashRouter>
	</Provider>
);
