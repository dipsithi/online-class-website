import React from 'react';
import banner from '../../Images/banner.jpg';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
         <img src={banner} alt="" />
         <h3>Welcome to our online Class Website</h3>
        </div>
    );
};

export default Header;