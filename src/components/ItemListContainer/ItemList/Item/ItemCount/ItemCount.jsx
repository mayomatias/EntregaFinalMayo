import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../../../../../context/CartContext';
import { ItemsContext } from '../../../../../context/ItemsContext';

const ItemCount = ({ stock, initial, id }) => {
  const [itemsToCart, setItemsToCart, logState] = useContext(CartContext);
  const { data } = useContext(ItemsContext)
  const [cant, setCant] = useState(initial);

  const onAdd = () => {
    if (cant < stock) {
      setCant(cant + 1);
    }
  };

  const onSub = () => {
    if (cant > 0) {
      setCant(cant - 1);
    }
  };

  const addToCart = () => {
    if (cant <= stock) {
      
      setItemsToCart((currItems) => {
        const isItemsFound = currItems.find((item) => item.id === id);
        if (isItemsFound) {
          return currItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + cant };
            } else {
              return item;
            }
          });
        } else {
          return [...currItems, { id, quantity: cant }];
        }
      });
    } 
  };
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
    <>
      <div className='item-count'>
        <button onClick={onSub}>-</button>
        <p>{cant}</p>
        <button onClick={onAdd}>+</button>
      </div>
      <div className='item-count-controller'>
        <p>Unidades disponibles: {stock}</p>
        <button onClick={addToCart} disabled={cant === 0}>Agregar al carrito</button>
      </div>
    </>
  );
};

export default ItemCount;
