import './ExploreMenu.css'
import {jewellery_list} from '../../assets/assets'
const ExploreMenu = ({category , setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore New Design jewellery</h1>
      <p className='explore-menu-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque aspernatur delectus eius!</p>
      <div className='explore-menu-list'>
        {
         jewellery_list.map((item,index)=>{
            return <div onClick={()=>setCategory(prev=>prev===item.jewellery_name?'All':item.jewellery_name)} key={index} className='explore-menu-list-item'>
                <img className={category===item.jewellery_name? 'active':""} src={item. jewellery_image} alt="" />
                <p>{item.jewellery_name}</p>
            </div>
         })
        }

      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
