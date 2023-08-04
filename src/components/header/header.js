import React from "react";
import './header.css';
import logoPixel from './logo2.png';

function Header() {
    return (
        <div className="header">
            <nav className="navigation">
              <div className="mainlog">
                <a href="/"><img src={ logoPixel } alt="Logo"></img></a>
              </div>

              <ul>
                  <li><a href="/">HOME</a></li>
                  <li><a href="/about">ABOUT US</a></li>
                  <li><a href="/products">PRODUCTS</a></li>
                  <li><a href="/contact">CONTACT</a></li>
                  <li><a href="/login">LOGIN</a></li>
                  <li><a href="/cart">CART</a></li>
              </ul>
            </nav>
        </div>
    )
}

export default Header

