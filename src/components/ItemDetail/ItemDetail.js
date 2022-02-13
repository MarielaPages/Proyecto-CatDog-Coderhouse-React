import './ItemDetail.css'
import React, { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

const ItemDetail = ( {data} ) => {

    const initial = 1;
    const stock = 5;

    const [items, setItems] = useState(initial);
    const [cartAdd, setCartAdd] = useState(false);

    const onAdd = () => {
        if(items < stock){
            setItems(items + 1)
        }
    }

    const onLess = () => {
        if(items > initial){
            setItems(items - 1)
        }
    }

    const onAddCart = () => {
        setCartAdd(true);
    }

    return(
        <>
        <div className="card mb-3 cardContainer" style={{maxWidth: '540px'}}>
            <div className="row g-0">
                <div className="col-md-4 imgContainer">
                    <img src={data.image} className="img-fluid rounded-start" alt={data.title} />
                </div>
                <div className="col-md-8 productBody">
                    <div className="card-body">
                        <p className="card-title productTitle">{(data.title).toUpperCase()}</p>
                        <p className="card-text productPrice">usd {data.price}</p>
                        <p className="card-text">{data.description}</p>
                    </div>
                </div>
            </div>
        </div>
            {cartAdd 
                ? 
            <Link to="/cart" className="buttonContainer"><button className="cartButton">Go to Cart</button></Link>
                :
            <ItemCount
                stock={stock}
                items={items}
                onAdd={onAdd}
                onLess={onLess}
                onAddCart={onAddCart}
            />
            }
        </>
    )
}

export default ItemDetail; 