import React, { useState } from "react";
import ItemCount from "./ItemCount/ItemCount";


const Item = ({ item }) => {


    return (
        <>
            <h2>{item.title}</h2>
            <img src={item.pictureUrl}/>
            <p>Price: {item.price}</p>
            <ItemCount 
                stock={item.rating.count}
                initial={0}
            />
        </>
    )

}

export default Item;