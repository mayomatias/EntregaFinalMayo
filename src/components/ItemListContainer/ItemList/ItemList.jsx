import React, { useEffect } from "react";
import Item from "./Item/Item";
import useAxios from '../../../hooks/useAxios';
import CircularProgress from '@mui/material/CircularProgress';

// Firebase
import { doc, collection, query, where, getDocs, getDoc } from "firebase/firestore";
import { db } from '../../../firebase/firebaseConfig';

const ItemList = () => {
  const { data, loading } = useAxios('https://fakestoreapi.com/products/category/electronics');

  useEffect(() => {
    const verificarProductosCargados = async (productos) => {
      for (const producto of productos) {
        const querySnapshot = await getDocs(
          query(collection(db, 'products'), where('title', '==', producto.title))
        );

        if (querySnapshot.empty) {
          console.log('El producto no se creó en la base de datos:', producto.title);
        } else {
          console.log('El producto creado en la base de datos:', producto.title);
        }
      }
    };

    const consultarProductoPorId = async (productId) => {
      try {
        const productRef = doc(db, 'products', productId);
        const docSnapshot = await getDoc(productRef);

        if (docSnapshot.exists()) {
          const productData = docSnapshot.data();
          console.log('Producto encontrado:');
          console.log('ID:', docSnapshot.id);
          console.log('Título:', productData.title);
          console.log('Precio:', productData.price);
          console.log('Descripción:', productData.description);
        } else {
          console.log('No se encontró ningún producto con el ID proporcionado.');
        }
      } catch (error) {
        console.error('Error al consultar el producto:', error);
      }
    };

    if (data) {
      verificarProductosCargados(data);
      consultarProductoPorId('J5deKjJvBFqmxDosdrDQ');
    }
  }, [data]);

  if (loading) return <div className="center"> <CircularProgress /> </div>;

  return (
    <div className="items-list">
      {data &&
        data.map((data) => (
          <div key={data.id}>
            <Item item={data} />
          </div>
        ))}
    </div>
  );
};

export default ItemList;
