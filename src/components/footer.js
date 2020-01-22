import React from 'react';
import logo from '../images/footer_icon.svg'
import phone from '../images/icon-email.svg'
import email from '../images/icon-phone.svg'
const Footer = () => (
    <footer className="footer">
        <div className="foot_head_icon">
            <div className="foot_icon_div">
                <img className="footer_icon" src={logo} alt="Logo" /> 
            </div>
        </div>
        <div className="foot_container">

            <ul className="foot_email">
               <li> <img className="email_icon" src={phone} alt="email" />huddle@gmail.com</li>
               
                <li><img  className="phone_icon"src={email} alt="phone"/>898989898989</li>
            </ul>
        
             <ul className="foot_left">
                 <li>email: huddle@gmail.com</li>
                 <li>Contact: 9898989898</li>
            </ul>
            <ul className="foot_center">
                 <li>About</li>
                 <li>Contact</li>
                 <li>Jobs</li>
                 <li>Press</li>
            </ul>
            <ul className="foot_right">
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>facebook</li>
            </ul>
        </div>
    </footer>
)
export default Footer;