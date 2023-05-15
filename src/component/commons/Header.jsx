import React from 'react';
import Logo from '../../assets/images/logo.png';

function Header() {
  return (
    <section id="header-main" className="wrapper">
        <div className="header-main-left h-5 w-5">
            <img src={Logo} alt="Logo" />
        </div>
        <div class="header-main-right">
            <ul>
                <li className="text-white bg-red">About</li>
                <li>Contact</li>
                <li>Resume</li>
            </ul>
        </div>
    </section>
  )
}

export default Header