import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return(
    <div>
      <a href="">
      <Link to={'/cart'}>
        <ShoppingCartIcon sx={{ color: '#ffffff' }} />
      </Link>
        
      </a>
    </div>
  )
}

export default CartWidget;