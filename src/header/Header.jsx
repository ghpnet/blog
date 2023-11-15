import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="#">
            <Logo className="logo" />
          </a>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/">Inicial</a>
          </li>

          <li className="option" onClick={closeMobileMenu}>
            <a href="/login">Login</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/novo-post">Novo Post</a>
          </li>
          {/* <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="/login" className="sign-up">
              Login
            </a>
          </li> */}
          <li className="option" onClick={closeMobileMenu}>
            <a href="/contato">Contato</a>
          </li>
        </ul>
      </div>
      {/* <ul className="signin-up">
        <li className="sign-in" onClick={closeMobileMenu}>
          <a href="/login">Login</a>
        </li>
        <li onClick={closeMobileMenu}>
          <a href="/login" className="signup-btn">
            Login
          </a>
        </li>
      
      </ul> */}
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
