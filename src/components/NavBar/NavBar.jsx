import React from 'react';
import "../../css/style.css"
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

let dropDowMenu = "nav-drop-menu-invisible" 

const NavBar = () =>{
  const [navBarState, setNavBarSatate] = useState(1)
  const [btnHambStyle , setBtnHambStyle] = useState("")

  const changeDeviceSize = (windowWidth) => {
    if (windowWidth >= 1200) {
      setBtnHambStyle("nav-btn-hamb-container")
    } else if (windowWidth >= 768) {
      
      console.log("Dispositivo mediano");
    } else {
    
      console.log("Dispositivo pequeño");
    }
  }
    useEffect(() =>{
      const handleResize = () => changeDeviceSize(window.innerWidth);
      window.addEventListener('load', handleResize);
     
    },[])
  
  const imprimir = () => {
      if(navBarState == 0) {
        dropDowMenu = "nav-drop-menu-invisible";
        setNavBarSatate(1);
      } else {
        dropDowMenu = "nav-drop-menu-visible";
        setNavBarSatate(0);
      }  
  }
  
  return( 
      <nav> 
        <div id='brand'>
          <Link className='brand-link' to="/"><h1>GammerShop</h1></Link>
        </div>
        <div id='nav-drop-down-container'>
          <ul className={dropDowMenu} id='nav-drop-menu'>
            <li><Link onClick={imprimir} to="/" className="nav-item">Productos</Link></li>
            <li><Link onClick={imprimir} to="/nosotros" className="nav-item">Nosotros</Link></li>
            <li><Link onClick={imprimir} to="/ayuda" className="nav-item">Ayuda</Link></li>
          </ul>
          <div className='nav-btn-hamb-container'>
            {navBarState ? <MenuIcon onClick={imprimir} /> : <CloseIcon onClick={imprimir} />}
          </div>
          
          <div id='search-box'>
            <input type="text" placeholder="Buscar..."/>
            <button type="submit">Search</button>
          </div>
          <CartWidget />
        </div>
      </nav>
   
  );
}

export default NavBar;