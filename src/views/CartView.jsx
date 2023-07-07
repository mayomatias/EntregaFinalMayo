import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ItemsContext } from '../context/ItemsContext';
import { Link } from 'react-router-dom';

function CartView() {
  const [itemsToCart, setItemsToCart] = useContext(CartContext);
  const { data } = useContext(ItemsContext);

  // Función para buscar los detalles de un item según su ID
  const getItemDetails = (itemId) => {
    return data.find((item) => item.id === itemId);
  };

  // Función para eliminar un elemento del carrito
  const removeFromCart = (itemId) => {
    setItemsToCart((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  const handlePurchase = () => {
    // Lógica para realizar la compra
    console.log('Compra realizada');
  };

  return (
    <div>
      {itemsToCart.length === 0 ? (
        <p >No posee productos</p>
      ) : (
        itemsToCart.map((cartItem) => {
          const item = getItemDetails(cartItem.id);
          if (item) {
            return (
              <div className='item-cart' key={cartItem.id}>
                <h3>{item.title}</h3>
                <p>Quantity: {cartItem.quantity}</p>
                <p>Price: {item.price}</p>
                <button onClick={() => removeFromCart(cartItem.id)}>
                  Eliminar
                </button>
              </div>
            );
          } else {
            return null;
          }
        })
      )}
      {itemsToCart.length > 0 && (

        <Link to={'/confirmPurchase'}><button onClick={handlePurchase}>Realizar Compra</button> </Link>
      )}
    </div>
  );
}

export default CartView;
