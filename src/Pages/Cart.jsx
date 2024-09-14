import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../Features/CartProvider'
import CartProducts from '../components/CartProducts'
const Cart = () => {
  const {cart} = useContext(CartContext)
  const totalPrice = cart.reduce(function(sum,curr){
    sum += (curr.price * curr.quantity)
    return sum
  },0)
  let newPrice = totalPrice.toFixed(2)
  return (
    <div className='h-screen w-full p-8  '>
     {cart.map((items,id)=>(<CartProducts product={items} key={id} ></CartProducts>))}
     <div className="h-35 fixed right-0 top-16 border w-[300px] p-4">
      <h4>Total items: {cart.length}</h4>
      <h4>Total price: ${newPrice}</h4>
     </div>
    </div>
  
  )
}

export default Cart
