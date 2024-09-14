import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import CartProvider from './Features/CartProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <App />
    <ToastContainer/>
  </CartProvider>,
)
