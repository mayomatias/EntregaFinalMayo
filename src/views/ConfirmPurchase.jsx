import React, { useState, useContext } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { CartContext } from '../context/CartContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ConfirmPurchase() {
    const [itemsToCart, setItemsToCart, logState] = useContext(CartContext);

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
          const docRef = await addDoc(collection(db, "cart"), {
            itemId: cartItem.id,
            cantidad: cartItem.quantity,
          });
          toast.success(`Documento generado: ${docRef.id}`);
        }
  
        setItemsToCart([]);
        console.log("Compra realizada exitosamente");
      } catch (error) {
        console.error("Error al realizar la compra:", error);
        toast.error("Error al realizar la compra");
      }
    };
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
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
        <ToastContainer />
      </form>
    </div>
  );
}

export default ConfirmPurchase;
