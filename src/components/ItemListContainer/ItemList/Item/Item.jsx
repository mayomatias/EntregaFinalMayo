import React, { useState } from "react";
import ItemCount from "./ItemCount/ItemCount";
import { Link } from 'react-router-dom';


const Item = ({ item }) => {


    return (
        <div className="item-card">
            <Link to={`/detail/${item.id}`}>
                <div className='item-card-title-container'>

                    <h2>{item.title}</h2>

                </div>

                <div className='card-img-container'>
                    <img src={item.image} />
                </div>
            </Link>
            <p>Price: {item.price}</p>
            <ItemCount
                stock={item.rating.count}
                initial={0}
            />
        </div>
    )

}

export default Item;