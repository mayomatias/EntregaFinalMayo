import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

// Firebase
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase/firebaseConfig';

function ItemDetail() {
  const [product, setProduct] = useState(null);
  const productId = 'nWWjwdSdZCM7fW0dcjo4'; // ID del producto a buscar

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, 'products', productId);
        const docSnapshot = await getDoc(productRef);

        if (docSnapshot.exists()) {
          const productData = docSnapshot.data();
          setProduct(productData);
        } else {
          console.log('No se encontró ningún producto con el ID proporcionado.');
        }
      } catch (error) {
        console.error('Error al consultar el producto item detail:', error);
      }
    };

    fetchProduct();
  }, []);

  if (!product) return <div className="center"> <CircularProgress /> </div>;

  return (
    <div className="item-detail">
      <h2>{product.title}</h2>
      <p>Precio: {product.price}</p>
      <p>Descripción: {product.description}</p>
      {/* Mostrar otros campos del producto según necesites */}
    </div>
  );
}

export default ItemDetail;
