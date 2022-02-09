import React, { useState, useEffect} from 'react'
import './ForCats.css'
import ForCatsItem from './ForCatsItem'
import { useParams } from 'react-router-dom'


const ForCats = () => {
    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    let categoryId = useParams();

    let category = categoryId.categoryId;

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then((res) => res.json())
            .then((prods) => setProducts(prods))
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false))
    }, [category]);

    return(
        <div className="container products">
            <div className="row">
                {isLoading 
                    ?
                <p className="text-center">Is loading...</p>
                    :    
                (products.map((product) => {
                    return(
                        <div key={product.id} className="col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                            <ForCatsItem data={product} />
                        </div>
                    )
                }))
                }
            </div>
        </div>
    )
}

export default ForCats