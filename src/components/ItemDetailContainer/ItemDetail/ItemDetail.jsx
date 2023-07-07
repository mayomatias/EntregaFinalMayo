import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

// Firebase
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase/firebaseConfig';
import { useParams } from 'react-router-dom';

function ItemDetail() {
  const [product, setProduct] = useState(null);
  const [productId, setProductId] = useState()
  
  
  
  const { id } = useParams();
  useEffect(() => {
    
    setProductId(id)
    const fetchProduct = async () => {
      try {
        
        const productRef = doc(db, 'products', productId);
        const docSnapshot = await getDoc(productRef);

        if (docSnapshot.exists()) {
          const productData = docSnapshot.data();
          setProduct(productData);
        } 
      } catch (error) {
        console.error('Error al consultar el producto item detail:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) return <div className="center"> <CircularProgress /> </div>;

  return (
    <div className="item-detail">
      <h2>{product.title}</h2>
      <p>Precio: {product.price}</p>
      <p>Descripción: {product.description}</p>
    </div>
  );
}

export default ItemDetail;
