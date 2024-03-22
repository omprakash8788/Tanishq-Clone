import { useContext } from 'react'
import './JwellaryDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import ProductsItem from '../productsItem/ProductsItem'


const JwellaryDisplay = ({category}) => {

   
    const {products_list}=useContext(StoreContext)

  return (
    <div className='jwellary' id='jwellary'>
        <h2>Top jewellery near you</h2>
        <div className='jwellary-display-item'>
          {
            products_list.map((item, index)=>{
              if(category==='All' || category===item.category){
                return <ProductsItem key={index} id={item.id} name={item.name}  price={item.price}   description={item.description}  category={item.category}  image={item.image} />

              }
            })
          }
       
        </div>
   
    </div>
  )
}

export default JwellaryDisplay
