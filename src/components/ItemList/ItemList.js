import React, { useState, useEffect} from 'react'
import Item from "../Item/Item"

const ItemList = () => {

    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((prods) => {setProducts(prods)
                            setIsLoading(false)});
    }, []);


    return(
        <div className="container">
            {isLoading 
                ?
            <h3>Is loading...</h3>
                :    
            (products.map((product) => {
                <div key={product.id} className="col-md-4 col-sm-12">
                    <Item data={product} />
                </div>
            }))
            }
        </div>
    )
}

export default ItemList;