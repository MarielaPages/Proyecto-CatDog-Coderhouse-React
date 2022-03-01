import React, { useState, useEffect} from 'react'
import "./ItemList.css"
import Item from "../Item/Item"
import { Link } from "react-router-dom"
//Firebase - Firestore
import { db } from '../../firebaseConfig/firebaseConfig'
import { collection, query, getDocs } from  "firebase/firestore"
import Spinner from '../Spinner/Spinner'

const ItemList = () => {

    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getProducts = async () => {
            const q = query(collection(db, "Products"));
            const querySnapshot = await getDocs(q);
            const prods = []
            querySnapshot.forEach(prod => {
                prods.push({...prod.data(), id: prod.id});
            });
            setProducts(prods);
            setIsLoading(false);
        }
        getProducts();
    }, []);

    return(
        <div className="container products">
            <div className="row">
                {isLoading 
                    ?
                <Spinner />
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

export default ItemList;