import React, { useContext, useEffect, useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const [itemsToCart] = useContext(CartContext);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const calculateTotalQuantity = () => {
      let quantity = 0;
      itemsToCart.forEach((item) => {
        quantity += item.quantity;
      });
      setTotalQuantity(quantity);
    };

    calculateTotalQuantity();
  }, [itemsToCart]);

  return (
    <div>
      <Link to={'/cart'}>
        <ShoppingCartIcon sx={{ color: '#ffffff' }} />
        <div className="cart-total">{totalQuantity}</div>
      </Link>
    </div>
  );
};

export default CartWidget;
