import './App.css';
import React from 'react';
import logo from './img/logo.png';

function Footer() {
  return (
    <footer className="section">
      <ul className="menu">
        <li>
          <br /><br />
		  <img class="logo" src={logo}/>
          <a className="link" href="reci.html">Gustari reci</a>
          <a className="link" href="calde.html">Bucate calde</a>
          <a className="link" href="salate.html">Salate</a>
          <a className="link" href="deserturi.html">Deserturi</a>
          <a className="link" href="bauturi.html">Băuturi</a>
        </li>
      </ul>
      <h2>© 2024 Ratatui</h2>
    </footer>
  );
}
export default Footer;
