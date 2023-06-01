import React, { useState } from "react";
import ItemCount from "./ItemCount/ItemCount";


const Item = ({ item }) => {

    const [itemObj, setItemObj] = useState({
        id: 1,
        title: "Pan",
        price: 5500,
        pictureUrl: "http://dsadad"
    })

    return (
        <>
            <h2>Titulo del prod</h2>
            <img src=""/>
            <p>Descripcion</p>
            <ItemCount 
                stock={20}
                initial={10}
            />
        </>
    )

}

export default Item;