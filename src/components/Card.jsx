import React from 'react';
import { CartContext } from '../Features/CartProvider';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ product }) => {
  
  // const cart = useContext(CartContext)
  // console.log(cart)
  const {dispatch} = useContext(CartContext)
  const handleAddToCart = () => {
    dispatch({ type: "Add", product });
    toast.success('Added to Cart!', {
      position: 'top-right',
      autoClose: 2000,
    });
  };
  return (
    <div className="max-w-sm border border-blue-50 rounded overflow-hidden shadow-lg flex flex-col">
      <img className="w-full h-38 object-cover object-center" src={product.img} alt="Product" />
      <div className="flex-grow px-6 py-4 flex flex-col">
        <h3 className="font-bold text-xl mb-2">{product.name}</h3>
        <h4 className="font-bold text-xl mb-4">${product.price}</h4>
        <div className="mt-auto">
          <button onClick={handleAddToCart} className='p-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-sm w-full'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
