import React from 'react';
import "../../css/style.css"
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

let dropDowMenu = "nav-drop-menu-invisible" 

const NavBar = () => {
  const [navBarState, setNavBarSatate] = useState(1)
  const [btnHambStyle, setBtnHambStyle] = useState("")

  const changeDeviceSize = (windowWidth) => {
    if (windowWidth >= 1200) {
        
        console.log("Dispositivo grande");
      } else if (windowWidth >= 768) {
        
        console.log("Dispositivo mediano");
      } else {
      
        console.log("Dispositivo pequeño");
      }
  }

  let match = window.matchMedia("(min-width: 1200px)").matches

  useEffect(() => {
    const handleResize = () => changeDeviceSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    if (match) {
      setBtnHambStyle("nav-btn-hamb-container")
    }
  }, [])

  // Resto del código del componente NavBar
};
