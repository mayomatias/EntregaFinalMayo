import React, { useState, useContext } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { CartContext } from '../context/CartContext'

function ConfirmPurchase() {
  const [itemsToCart, setItemsToCart, logState] = useContext(CartContext)

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    confirmEmail: '',
  });
  const guardarCompra = async () => {
    try {
      for (const cartItem of itemsToCart) {
        await addDoc(collection(db, "cart"), {
          itemId: cartItem.id,
          cantidad: cartItem.quantity,
        });
      }
  
      // Limpia el carrito después de guardar los items en Firestore
      setItemsToCart([]);
      console.log("Compra realizada exitosamente");
    } catch (error) {
      console.error("Error al realizar la compra:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para procesar el formulario de compra
    console.log(formData);
    // Restablecer el formulario
    setFormData({
      nombre: '',
      apellido: '',
      telefono: '',
      email: '',
      confirmEmail: '',
    });
  };

  return (
    <div>
      <h2>Confirm Purchase</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmEmail">Confirmar Email:</label>
          <input
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            value={formData.confirmEmail}
            onChange={handleChange}
            required
          />
        </div>
        <button onClick={guardarCompra} variant="contained" color="primary">Realizar Compra</button>
      </form>
    </div>
  );
}

export default ConfirmPurchase;
