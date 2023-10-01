import React from 'react';
import innovate_codes_logo from '../../assets/images/innovate_codes-logo.svg';
import innovate_codes_favicon from '../../assets/images/innovate_codes-favicon.svg';

export default function Header() {
  return (
    <header>
      <nav aria-label="Primary Navigation">
        <button className="toggle" type="button" aria-label="Open menu" aria-pressed="false" aria-haspopup="true"
          aria-expanded="false" aria-controls="menu">
          <span id="bar"></span>
        </button>
        <a id="logo" href="/" aria-label="Homepage">
          <img src={innovate_codes_logo} width="120" height="29.45"
            alt="Logo" />
        </a>
        <ul id="menu" role="menu">
          <li>
            <div className="vertical-align" id="favorite-icon">
              <img src={innovate_codes_favicon} width="35"
                height="35" alt="Favorite Icon" />
            </div>
          </li>
          <li><a href="/"><i className="fa-solid fa-house"></i>Início</a></li>
          <li><a href="#about"><i className="fa-solid fa-circle-info"></i>Sobre</a></li>
          <li><a href="#experience"><i className="fa-solid fa-code"></i>Experiência</a></li>
          <li><a id="last-link" href="#contact"><i className="fa-solid fa-envelope"></i>Contato</a></li>
        </ul>
        <div id="overlay"></div>
        <label for="theme" tabindex="0">
          {/* <input type="checkbox" id="theme"> */}
          <i className="fa-sharp fa-solid fa-circle-half-stroke"></i>
        </label>
      </nav>
    </header>
  );
}
