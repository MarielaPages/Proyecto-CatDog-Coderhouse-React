import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import '../ItemDetailContainer/ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const [prodDetail, setProdDetail] = useState({})

    const [isLoading,setIsLoading] = useState(true);

    let getItem = () => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((prods) => setProdDetail(prods.find(prod => prod.id === 1)))
            .catch((error) => console.log(error))
            setTimeout(() => {setIsLoading(false)}, 2000);
    }

    useEffect(() => {
        getItem();
    }, []);

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