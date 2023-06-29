import axios from 'axios';
import React, {useEffect, useState} from 'react';

const useAxios = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
     setLoading(true);
     axios(url).then((res) => {
        setData(res.data);
        
        setTimeout(() => {
            setLoading(false);
        },1500)
        
     }); 
    }, [url])

    return { data, loading }

}

export default useAxios;