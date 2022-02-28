import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import '../ItemDetailContainer/ItemDetailContainer.css'
import { useParams } from 'react-router-dom'
import { db } from '../../firebaseConfig/firebaseConfig'
import { collection, query, where, getDocs, documentId } from  "firebase/firestore"

const ItemDetailContainer = () => {

    const [prodDetail, setProdDetail] = useState([]);

    const [isLoading,setIsLoading] = useState(true);

    let idObj = useParams();
    
    let idProd = idObj.id;

    useEffect(() => {
        const getItem = async () => {
            const q = query(collection(db, "Products"), where(documentId(), "==", idProd));
            const querySnapshot = await getDocs(q);
            const getItem = [];
            querySnapshot.forEach(prod => {
                getItem.push({...prod.data(), id: prod.id})
            });
            setProdDetail(getItem);
            setIsLoading(false);
        }
        getItem();
    }, [idProd]);

    return(
        <div className="productDetail">
            {isLoading 
                ?
            <p className="text-center">Is loading...</p>
                :
            prodDetail.map(prod =>{
                return(
                    <div key={prod.id}>
                        <ItemDetail data={prod}/>
                    </div>
                )
            })
            }
        </div>
    )
}

export default ItemDetailContainer;