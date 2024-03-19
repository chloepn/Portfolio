import React, { useState } from "react";
import "./header.css";

export default function Header() {
    /*=============== Toggle Menu ===============*/
    const[Toggle,showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Chloe Phan
        </a>

        <div className = {Toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
                <i className="uil uil-user nav__icon"></i> About
            </li>

            <li className="nav__item">
                <i className="uil uil-file-alt nav__icon"></i> Skills
            </li>

            <li className="nav__item">
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
            </li>

            <li className="nav__item">
                <i className="uil uil-scenery nav__icon"></i> Portfolio
            </li>

            <li className="nav__item">
                <i className="uil uil-message nav__icon"></i> Contact
            </li>
          </ul>
          <i className="uil uil-times nav__close" onClick = {() => showMenu(!Toggle)}></i>
        </div>

        <div className ="nav_toggle" onClick = {() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};
