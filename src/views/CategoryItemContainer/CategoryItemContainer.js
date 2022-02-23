import React, { useState, useEffect} from 'react'
import './CategoryItemContainer.css'
import Item from '../../components/Item/Item'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { db } from '../../firebaseConfig/firebaseConfig'
import { collection, query, where, getDocs} from  "firebase/firestore"


const CategoryItemContainer = () => {
    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    let categoryId = useParams(); //me devuelve un objeto con una propiedad categoryId que toma como valor lo que se envia en el to del Link

    let category = categoryId.categoryId;

    useEffect(() => {
        const getProducts = async () => {
            const q = query(collection(db, "Products"), where("categoria", "==", category));
            const querySnapshot = await getDocs(q);
            const prods = []
            console.log(querySnapshot)
            querySnapshot.forEach(prod => {
                prods.push({...prod.data(), id: prod.id});
            });
            setProducts(prods);
            setIsLoading(false);
        }
        getProducts();
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