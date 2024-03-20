import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Chloe Phan</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#skills" className="footer__link">Skills</a>
          </li>
          <li>
            <a href="#experience" className="footer__link">Experience</a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/chloepn"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-github-alt"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/chloe-phan/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-linkedin-alt"></i>
          </a>

        </div>

        <span className="footer__copy">
          &#169; Chloe Phan. All rigths reserved
        </span>
      </div>
    </footer>
  );
}