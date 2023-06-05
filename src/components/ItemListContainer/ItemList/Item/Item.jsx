import React, { useState } from "react";
import ItemCount from "./ItemCount/ItemCount";


const Item = ({ item }) => {


    return (
        <div className="item-card">
            <h2>{item.title}</h2>
            <img src={item.image}/>
            <p>Price: {item.price}</p>
            <ItemCount 
                stock={item.rating.count}
                initial={0}
            />
        </div>
    )

}

export default Item;