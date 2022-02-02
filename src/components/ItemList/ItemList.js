import React, { useState, useEffect} from 'react'
import "./ItemList.css"
import Item from "../Item/Item"

const ItemList = () => {

    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((prods) => setProducts(prods))
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false))
    }, []);

    return(
        <div className="container products">
            <div className="row">
                {isLoading 
                    ?
                <p className="text-center">Is loading...</p>
                    :    
                (products.map((product) => {
                    return(
                        <div key={product.id} className="col-sm-12 col-md-3">
                            <Item data={product} />
                        </div>
                    )
                }))
                }
            </div>
        </div>
    )
}

export default ItemList;