
import { createContext, useEffect, useState } from "react";
import {products_list} from '../assets/assets'

export const StoreContext = createContext(null)


const StoreContextProvider=(props)=>{

    const [cartItems, setCartItems]=useState({})

    // Addtocart
    const addToCart=(itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev, [itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))  
        }

    }
    // RemoveToCart Logic
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))  


    }

     useEffect(()=>{
        console.log(cartItems);
        
      },[cartItems])

    const contextValue={
        products_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    };
   
    

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;