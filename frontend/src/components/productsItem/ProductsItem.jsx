import { useContext, useState} from 'react';
import './ProductsItem.css'
import { FcRating } from "react-icons/fc";
import {assets} from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';


const ProductsItem = ({name, price, image, id, description}) => {

  // const { cartItems,addToCart,removeFromCart}=useContext(StoreContext)
  const [itemCount, setItemCount]=useState(0)

 

  return (
    <div className='products-item'>
      <div className='products-item-container'>
        <img className='product-item-image' src={image} alt="" />
        {
          !itemCount? <img className='add' onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt="" /> :
           <div className='food-item-counter'>
            <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt="removeicon" />
            <p>{itemCount}</p>
            <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt="" />

           </div>
        }
      </div>
      {/* Product information  */}
      <div className='products-item-info'>
        <div className='food-item-name-rating'>
        <p>{name}</p>
         <FcRating/>
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>$ {price}</p>
      </div>
    </div>
  )
}

export default ProductsItem
