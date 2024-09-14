import { useState } from 'react'
import { useContext } from 'react'
import Cart from './Pages/Cart'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Pages/Product'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { CartContext } from './Features/CartProvider';  


const App= ()=>{
  const { searchItem, setSearchItem } = useContext(CartContext);
return(<BrowserRouter>
  <Navbar searchItem={searchItem} setSearchItem={setSearchItem}/>
  <Routes>
    <Route path='/' element={<Product searchItem={searchItem} />}></Route>
    <Route  path='/cart' element={<Cart/>}></Route>
  </Routes>

  </BrowserRouter>
    
  )
}

export default App
