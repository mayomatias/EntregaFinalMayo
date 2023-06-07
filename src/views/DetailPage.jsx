import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function DetailPage() {
    let { id } = useParams();
    const [item, setItem] = useState({});
   
    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${id}`).then((res) => {
            setItem(res);
            console.log(item)
        })
        
    }, [])


    return (
        <div>
            <h2>Detail Page</h2>
        </div> 
            
    );
}

export default DetailPage;