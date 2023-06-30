import React, { useEffect, useState } from "react";
import Item from "./Item/Item";
import useAxios from '../../../hooks/useAxios';
import CircularProgress from '@mui/material/CircularProgress';

// Firebase
import { doc, collection, query, where, getDocs, getDoc } from "firebase/firestore";
import { db } from '../../../firebase/firebaseConfig';

const ItemList = () => {
 // const { data, loading } = useAxios('https://fakestoreapi.com/products/category/electronics');
  const [todos, setTodos] = useState([])

  const fetchPost = async () => {   
    await getDocs(collection(db, "products"))
        .then((querySnapshot)=>{              
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setTodos(newData);                
            console.log(todos, newData);
    })  
  }

  useEffect(() => {
  
    fetchPost();

  }, []);

  //if (loading) return <div className="center"> <CircularProgress /> </div>;

  return (
    <div className="items-list">
      {todos &&
        todos.map((todos, i) => (
          <div key={i}>
            <Item item={todos} />
          </div>
        ))}
    </div>
  );
};

export default ItemList;
