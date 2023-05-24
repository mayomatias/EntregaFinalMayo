import React from "react";
import ItemCount from "./ItemCount/ItemCount";

const ProductCard = () => {


    return(
        <div className="product-card-container">
            <p>Nombre del producto</p>
            <ItemCount stock={450} initial={1} />
        </div>

    )
}


export default ProductCard;