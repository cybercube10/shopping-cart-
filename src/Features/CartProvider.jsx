import React,{createContext, useState,useReducer} from "react";
import CartReducer from "./CartReducer";
export const CartContext = createContext()

const CartProvider = (props)=>{
//  const[item,setItem] = useState([])
 const [cart,dispatch] = useReducer(CartReducer,[])
 const [searchItem,setSearchItem] = useState('')
return (<CartContext.Provider value={{cart,dispatch,searchItem,setSearchItem}}>
   {props.children}
</CartContext.Provider>);
}

export default CartProvider;