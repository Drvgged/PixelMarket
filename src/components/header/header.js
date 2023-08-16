import React, { useState } from "react";
import spritesImport from "../../assets/sprites/spritesImports";
import './header.css';

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
    };

    return (
        <header className="header">
            <nav className="navigation">
              <ul className={isNavOpen ? 'nav-links show' : 'nav-links'}>
                {isNavOpen && (
                    <div className='close-btn' onClick={toggleNav}>
                        &times;
                    </div>
                )}

                <li><a href="/">HOME</a></li>
                <li><a href="/about">ABOUT US</a></li>
                <li><a href="/products">PRODUCTS</a></li>
              </ul>

              <div className="mainlogo">
                <a href="/"><img src={ spritesImport.logoPixel } alt=""></img></a>
              </div>

              <ul className={isNavOpen ? 'nav-links2 show2' : 'nav-links2'}>
                <li><a href="/contact">CONTACT</a></li>
                <li><a href="/login">LOGIN</a></li>
                <li><a href="/cart">CART</a></li>
              </ul>
            </nav>

            <div className={`burger ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}>
              &#9776;
            </div>
        </header>
    )
}

export default Header

