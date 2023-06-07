import { useParams } from 'react-router-dom';

function DetailPage() {
    let { id } = useParams()
    return ( 
        <h2>Detail Page</h2>
     );
}

export default DetailPage;