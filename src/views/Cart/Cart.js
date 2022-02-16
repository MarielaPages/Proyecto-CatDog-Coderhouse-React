import React, { useState, useContext} from "react"
import { ProductsContext } from '../../CartContext/CartContext'
import '../Cart/Cart.css'

const Cart = () => {
    const [addedProducts, setAddedProducts] = useContext(ProductsContext);

    const deleteProduct = (productName) => {
        const updatedProducts = addedProducts.filter(product => productName !== product.title);
        setAddedProducts(updatedProducts);
    }
    const clearAll = (e) => {
        setAddedProducts([])
        e.target.setAttribute("style", "display:None;")
    }

    return(
        <>
            <div className="container">
                <div className="row">
                    {(addedProducts.map(product => {
                        return(
                            <div key={product.id} className="col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                <div className="card cardContainer" style={{width: '18rem'}}>
                                    <div className="imageContainer">
                                        <img src={product.image} className="card-img-top" alt={product.title} />
                                    </div>
                                    <div className="card-body cardBodyContainer">
                                        <p className="card-text text-center">{(product.title).toUpperCase()}</p>
                                        <p className="card-text text-center itemPrice">usd {product.price}</p> 
                                        <p className="card-text text-center">{(product.quantity)}</p>
                                    </div>
                                    <button className="deleteButton1" onClick={() => deleteProduct(product.title)}>Delete</button>
                                </div>
                            </div>
                        )
                    }))}
                </div>
            </div>
            <div className="d-flex justify-content-center deleteButton2">
                <button onClick={clearAll}>Delete all</button>
            </div>
        </>
    )
}

export default Cart