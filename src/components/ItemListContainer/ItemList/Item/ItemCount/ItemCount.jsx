import React, {useState } from 'react'

const ItemCount = ({ stock, initial }) => {

    const [cant, setCant] = useState(initial);
    
    const onAdd = () => {
        if(cant < stock) {
            setCant(cant + 1)
            
        }
    }
    const onSub = () => {
        if(cant > 0 ){
            setCant(cant - 1)
           
        }
    }
    const imprimir = () => {
        console.log(cant)
    }

    return (
        <>
            <div>
                <button onClick={onAdd}>+</button>
                <p>{cant}</p>
                <button onClick={onSub}>-</button>
                <p>Unidades disponibles: {stock}</p>
                <button  onClick={imprimir}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount;