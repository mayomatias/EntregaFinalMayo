import React, { useEffect, useState, useContext } from "react";
import Item from "./Item/Item";
import CircularProgress from '@mui/material/CircularProgress';
import { ItemsContext } from "../../../context/ItemsContext";

// Firebase


const ItemList = () => {

  const { data } = useContext(ItemsContext)

  //if (loading) return <div className="center"> <CircularProgress /> </div>;

  return (
    <div className="items-list">
      {data &&
        data.map((data, i) => (
          <div key={i}>
            <Item item={data} />
          </div>
        ))}
    </div>
  );
};

export default ItemList;
