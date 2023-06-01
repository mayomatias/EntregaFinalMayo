import React, { useState } from 'react'
import '../../../css/style.css'

const ItemCount = ({ stock, initial, onAdd }) => {
    
    
    return (
        <>
            <div>ItemCount</div>
            <div className='item-count-container'>
                <div>
                    <button>+</button>
                    <p>{initial}</p>
                    <button>-</button>
                </div>
                <div>
                    <p>Disponible: {stock}</p>
                </div>
                <div>
                    <button onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount;
