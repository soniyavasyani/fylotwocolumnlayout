import React from 'react';
import logo from '../images/logo.svg'

const Header = () => (
  <header>
    <div className="main_div">
    <div>
      <img className="logo" src={logo} alt="Logo" />
    </div>
    <ul className="header_menu">
      
        <li>Features</li>
        <li>Team</li>
        <li>SignIn</li>
      
    </ul>
   </div>
  </header>

)
export default Header;