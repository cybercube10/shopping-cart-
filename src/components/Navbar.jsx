import React, { useContext, useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { CartContext } from '../Features/CartProvider';
import { CiSearch } from "react-icons/ci";

const Navbar = ({searchItem,setSearchItem,toggle,setToggle}) => {
  
  const handleSearch = (e)=>{
   setSearchItem(e.target.value)
  }
  const {cart} = useContext(CartContext)
  return (
    <div className='w-full h-10 bg-blue-950 flex justify-between text-white  items-center p-5 py-8'>
      <h1 className="font-bold">Shopify+</h1>
      <ul className='flex gap-4 items-center cursor-pointer'>
        <input onChange={handleSearch} value={searchItem} className='text-black border px-4 rounded-lg outline-none ' type="text" placeholder='search' />
      <Link to="/">Products</Link>
      <Link to="/cart" className='flex items-center gap-1'><FaCartShopping />{cart.length}</Link>
      </ul>
    </div>
  )
}

export default Navbar

