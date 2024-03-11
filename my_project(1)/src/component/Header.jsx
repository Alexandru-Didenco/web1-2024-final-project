import './App.css';
import React from 'react';
import logo from './img/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
   <>
   <div class="container_menu">
		<ul class="menu">
				<li>
					
					<img class="logo" src={logo}/>
					<Link to="/"><a class="link">Gustari reci</a></Link>
					<Link to="/Calde"><a class="link" >Bucate Calde</a></Link>
					<Link to="/Salate"><a class="link">Salate</a> </Link>
					<Link to="/Desert"><a class="link">Deserturi</a> </Link>
					<Link to="/Bauturi"><a class="link">Bauturi</a> </Link>
				</li>
			</ul>
</div>
   
   </>
  );
}

export default Header;
