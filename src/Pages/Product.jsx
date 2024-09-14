import React from 'react'
import Data from '../Data.json' 
import Card from '../components/Card'
import { useState } from 'react'

const Product = ({searchItem,toggle}) => {
  const[products,setProducts] = useState(Data.products)
  
  return (

    <div className='w-full h-screen p-5 '>
    <div className="w-full grid grid-cols-4 gap-2">
   {
   
     products.filter((product)=>{
      return searchItem.toLowerCase() === ''? product:product.name.toLowerCase().includes(searchItem)
    }).map((product)=>(
      <Card product = {product} key={product.id} />

     ))
    
   } 


   
    </div>
    </div>
  )
}

export default Product
