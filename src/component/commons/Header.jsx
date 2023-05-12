import React from 'react';
import Logo from '../../assets/images/logo.png'

function Header() {
  return (
    <section id="header-main" className="wrapper">
        <div class="header-main-left">
            <img src={Logo} alt="Logox" />
        </div>
        <div class="header-main-right">
            <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Resume</li>
            </ul>
        </div>
    </section>
  )
}

export default Header