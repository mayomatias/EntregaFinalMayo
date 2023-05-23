import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({greetting}) => {
    return(
        <>
            <h2 style={{marginTop:'1rem', textAlign:'center'}}>{greetting}</h2>
            <ItemCount />
        </>
    )
}

export default ItemListContainer;