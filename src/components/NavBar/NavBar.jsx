import React from 'react';
import "../../css/style.css"
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CartWidget from '../CartWidget/CartWidget';

let dropDowMenu = "nav-drop-menu-invisible" 

const NavBar = () =>{
  const [navBarState, setNavBarSatate] = useState(1)
  const imprimir = () => {
    console.log("Hola desde una funcion")
    if(navBarState == 0) {
      dropDowMenu = "nav-drop-menu-invisible"
      setNavBarSatate(1);
    } else {
      dropDowMenu = "nav-drop-menu-visible"
      setNavBarSatate(0);
    }
  }
  
  return( 
  
     
      <nav> 
        <div id='brand'>
          <h1>GammerShop</h1>
        </div>
        <div id='nav-drop-down-container'>
          <ul className={dropDowMenu} id='nav-drop-menu'>
            <li className="nav-item"><a>Productos</a></li>
            <li className="nav-item"><a>Nosotros</a></li>
            <li className="nav-item"><a>Ayuda</a></li>
          </ul>
          <div>
            {navBarState ? <MenuIcon onClick={imprimir} /> : <CloseIcon onClick={imprimir} />}
          </div>
          <div id='search-box'>
            <input type='text' />
          </div>
          <CartWidget />
        </div>
      </nav>
   
  );
}

export default NavBar;