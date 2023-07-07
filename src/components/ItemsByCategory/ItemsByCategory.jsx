import { React, useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Item from '../ItemListContainer/ItemList/Item/Item'

import { ItemsContext } from '../../context/ItemsContext';


function ItemsByCategory() {
  const [itemsByCat, setItemsByCat] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  const { data } = useContext(ItemsContext)
  const { category } = useParams()
  
  

  
  useEffect(() => {
    const filteredItems = data.filter((item) => item.category === category);
    setItemsByCat(filteredItems);
    setIsLoading(false);
  }, [category]);
  
  return (
    <div className="items-list">
      {itemsByCat &&
        itemsByCat.map((itemsByCat, i) => (
          <div key={i}>
            <Item item={itemsByCat} />
          </div>
        ))}
    </div>
  );
}


export default ItemsByCategory