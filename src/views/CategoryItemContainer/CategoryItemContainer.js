import React, { useState, useEffect} from 'react'
import './CategoryItemContainer.css'
import Item from '../../components/Item/Item'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


const CategoryItemContainer = () => {
    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    let categoryId = useParams(); //me devuelve un objeto con una propiedad categoryId que toma como valor lo que se envia en el to del Link

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
                            <Link to={`/detail/${product.id}`} className="itemLink">
                                <Item data={product} />
                            </Link>
                        </div>
                    )
                }))
                }
            </div>
        </div>
    )
}

export default CategoryItemContainer