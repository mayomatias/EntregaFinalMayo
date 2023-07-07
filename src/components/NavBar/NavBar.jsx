import React from 'react';
import "../../css/style.css"
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

let dropDowMenu = "nav-drop-menu-invisible"
let dropDownSubMenu = "nav-drop-submenu-invisible"

const categories = [
  { name: 'Monitores', url: '/category/monitor' },
  { name: 'Almacenamiento', url: '/category/storage' },
  // Agrega más categorías según sea necesario
];


const NavBar = () => {
  const [navBarState, setNavBarSatate] = useState(1)
  const [navBarSubState, setNavBarSubSatate] = useState(1)
  const [btnHambStyle, setBtnHambStyle] = useState("")

  const imprimir = () => {
    if (navBarState == 0) {
      dropDowMenu = "nav-drop-menu-invisible";
      setNavBarSatate(1);
    } else {
      dropDowMenu = "nav-drop-menu-visible";
      setNavBarSatate(0);
    }
  }
  const imprimirsub = () => {
    if (navBarSubState == 0) {
      dropDownSubMenu = "nav-drop-submenu-invisible";
      setNavBarSubSatate(1);
    } else {
      dropDownSubMenu = "nav-drop-submenu-visible";
      setNavBarSubSatate(0);
    }
  }

  return (
    <nav>
      <div id='brand'>
        <Link className='brand-link' to="/"><h1>GammerShop</h1></Link>
      </div>
      <div id='nav-drop-down-container'>
        <ul className={dropDowMenu} id='nav-drop-menu'>
          <li><Link onClick={imprimir} to="/" className="nav-item">Productos</Link></li>
          <li><Link onClick={imprimir} to="/nosotros" className="nav-item">Nosotros</Link></li>
          <li><Link onClick={imprimir} to="/ayuda" className="nav-item">Ayuda</Link></li>
          <li className="nav-item">
            <a onClick={imprimirsub}>Categorías</a>
            <ul
              
              style={navBarSubState === 1 ? { display: 'none' } : { display: 'flex' }}
              id="nav-drop-submenu">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link to={category.url} className="nav-item ">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <div className='nav-btn-hamb-container'>
          {navBarState ? <MenuIcon onClick={imprimir} /> : <CloseIcon onClick={imprimir} />}
        </div>

        <div id='search-box'>
          <input type="text" placeholder="Buscar..." />
          <button type="submit" id='search-btn'>Search</button>
        </div>
        <CartWidget />
      </div>
    </nav>

  );
}

export default NavBar;