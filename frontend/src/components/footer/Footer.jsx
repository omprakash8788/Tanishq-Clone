import { assets } from '../../assets/assets'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
       <div className="footer-content">
        <div className="footer-content-left">
            <img src="https://cdn6.aptoide.com/imgs/f/0/7/f074edf38cb78a1111b91ccf849f4cfa_fgraphic.png" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <div className="footer-social-icons">
             <img src={assets.facebook_icon} alt="" />
             <img src={assets.twitter_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>Delivery Information</li>
                <li>Payment Options</li>
                <li>Track your Order</li>
            </ul>
        </div>

        <div className="footer-content-right">
            <h2>Get In Touch</h2>
            <ul>
                <li>18001805454</li>
                <li>Contact@tanishq.in</li>
            </ul>
        </div>
       </div>
       <hr />
       <p className='footer-copyright'>
        Copyright 2024@ Tanishq.co - All Right Reserved. 
       </p>
    </div>
  )
}

export default Footer
