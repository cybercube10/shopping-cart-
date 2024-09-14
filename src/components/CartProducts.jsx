import { useContext } from 'react'
import {CartContext} from '../Features/CartProvider'

import React from 'react'

const CartProducts = ({product}) => {
  const {cart,dispatch} = useContext(CartContext)
  const Increase =(id)=>{
    const index = cart.findIndex(p =>p.id === id)
    if (cart[index].quantity < 10){
      dispatch({type:"Increase",id})
    }
  }
  const Decrease = (id)=>{

    const index = cart.findIndex(p=>p.id === id)
    if(cart[index].quantity > 1){
      dispatch({type:"Decrease",id})
    }
   
    
  }
  return (
    <div className=' w-1/2 h-20 rounded-md flex items-center mb-4 border justify-between'>
      <img className='h-full  ' src={product.img} alt="" />
      <div>
        <h4>{product.name}</h4>
        <h5>{product.price}</h5>
      </div>
      <div className='flex'>
        <button className='px-2 rounded-full bg-blue-600 text-white border-none' onClick={()=>Decrease(product.id)}>-</button>
        <button className='mx-2'>{product.quantity}</button>
        <button className='px-2 rounded-full bg-blue-600 text-white border-none' onClick={()=>Increase(product.id)}>+</button>
      </div>
      <button onClick={()=>dispatch({type:"Remove",id:product.id})}>Remove</button>
    </div>
  )
}

export default CartProducts






