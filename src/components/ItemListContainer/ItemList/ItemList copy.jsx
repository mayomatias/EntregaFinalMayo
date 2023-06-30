import React from "react";
import Item from "./Item/Item";
import useAxios from '../../../hooks/useAxios';
import CircularProgress from '@mui/material/CircularProgress';

import datos from './datos.json';

//base

import { doc, collection, query, getDocs, setDoc } from "firebase/firestore";
import { db } from '../../../firebase/firebaseConfig'

import { useState, useEffect } from "react";




const ItemList = () => {


  const { data, loading } = useAxios('https://fakestoreapi.com/products/category/electronics');
  const [items, setItems] = useState([]);

  


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