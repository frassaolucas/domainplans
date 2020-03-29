import React from 'react';

import './styles.css';
import logo from '../../assets/images/hostgator-logo.svg';

const Header = () => (
 <header className="main-header">
   <div className="main-header__content">
    <img src={logo} alt="Logo" />
   </div>
 </header>
);

export default Header;