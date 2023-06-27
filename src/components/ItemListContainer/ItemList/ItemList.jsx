import React from "react";
import Item from "./Item/Item";
import useAxios from '../../../hooks/useAxios';
import CircularProgress from '@mui/material/CircularProgress';

//base

import { doc, collection, query, getDocs, setDoc } from "firebase/firestore";
import { db } from '../../../firebase/firebaseConfig'

import { useState, useEffect } from "react";
import { async } from "@firebase/util";



const ItemList = () => {

  const { data, loading } = useAxios('https://fakestoreapi.com/products/category/electronics');
  const [items, setItems] = useState([]);
 
  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const q = query(collection(db, "products"));
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // console.log('DATA:', doc.data(), 'ID:', doc.id);
          docs.push({ ...doc.data(), id: doc.id });
        });
        setItems(docs)
        console.log(items)
      } catch (error) {
        console.log("Error al obtener los datos de Firestore:", error);
      }
    };

    fetchItemData();
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