import { useState } from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Header from '../../components/header/Header'
import './Home.css'
import JwellaryDisplay from '../../components/jwellaryDisplay/JwellaryDisplay'
const Home = () => {
  const [category , setCategory] = useState("All")
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <JwellaryDisplay category={category}/>
    </div>
  )
}

export default Home
