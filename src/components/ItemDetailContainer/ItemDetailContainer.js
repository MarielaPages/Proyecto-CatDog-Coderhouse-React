import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import '../ItemDetailContainer/ItemDetailContainer.css'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [prodDetail, setProdDetail] = useState({})

    const [isLoading,setIsLoading] = useState(true);

    let idObj = useParams();
    
    let idProd = idObj.id;

    let getItem = () => {
        fetch(`https://fakestoreapi.com/products/${idProd}`)
            .then((res) => res.json())
            .then((prod) => setProdDetail(prod))
            .catch((error) => console.log(error))
            setTimeout(() => {setIsLoading(false)}, 2000);
    }

    useEffect(() => {
        getItem();
    }, [idProd]);

    return(
        <div className="productDetail">
            {isLoading 
                ?
            <p>Is loading...</p>
                :
            <ItemDetail data={prodDetail}/>
            }
        </div>
    )
}

export default ItemDetailContainer;