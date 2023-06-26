import React from "react";
import Item from "./Item/Item";
import useAxios from '../../../hooks/useAxios';
import CircularProgress from '@mui/material/CircularProgress';

//base
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from '../../../firebase/firebaseConfig'

import { useState, useEffect } from "react";




const ItemList = ({ items }) => {
  const { data, loading } = useAxios('https://fakestoreapi.com/products/category/electronics');

  

  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPlayers = async () => {
      const q = query(collection(db, "gammershop"));

      
     
      
   

    
      const docs = [];
      const querySnapshot = await getDocs(q);
      console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
      console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      
      console.log(data().price);


       console.log(docs);
       setProductData(docs);
    };
    getPlayers();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
}, []);


  if (loading) return <div className="center"> <CircularProgress /> </div>
  return (
    <div className="items-list">
      {data &&
        data.map((data) => {
          return (
            <div key={data.id}>
              <Item item={data} />
            </div>
          );
        })}
    </div>
  )
}

export default ItemList;