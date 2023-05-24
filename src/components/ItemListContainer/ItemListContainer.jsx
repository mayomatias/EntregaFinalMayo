import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ItemListContainer = ({greetting}) => {
    return(
        <>
            <h2 style={{marginTop:'1rem', textAlign:'center'}}>{greetting}</h2>
            <ProductCard />
        </>
    )
}

export default ItemListContainer;