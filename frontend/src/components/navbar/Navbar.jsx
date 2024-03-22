import { useState } from 'react'
import './Navbar.css'
import {CiSearch} from 'react-icons/ci'
import {FaShoppingBasket} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu]=useState("Home")
  return (
    <div className='navbar'>
      <img className='logo' src="https://cdn6.aptoide.com/imgs/f/0/7/f074edf38cb78a1111b91ccf849f4cfa_fgraphic.png" />
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setMenu('Home')} className={menu==='Home'?'active':''}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu('Menu')} className={menu==='Menu'?'active':''}>Menu</a>
        <a href='#Mobile app' onClick={()=>setMenu('Mobile App')} className={menu==='Mobile App'?'active':''}>Mobile App</a>
        <a href='#footer' onClick={()=>setMenu('Contact Us')} className={menu==='Contact Us'?'active':''}>Contact Us</a>
      </ul>
      <div className='navbar-right'>
      <CiSearch />
        <div className='navbar-search-icon'>
        <FaShoppingBasket />
        <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
