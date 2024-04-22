import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './About.jsx'
import Product from './Product.jsx'
import './index.css'
import './custom.css';

import { Provider } from 'react-redux';
import store from './redux/store';
/* ========= Router ========= */
import {
	BrowserRouter,
	Routes,
	Route
  } from "react-router-dom";
/* ========= Router ========= */


ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index />
					<Route path="product" element={<Product />} />
					<Route path="*" element={<>404</>} />
				</Route>
			</Routes>
    	</BrowserRouter>
	</Provider>
);
