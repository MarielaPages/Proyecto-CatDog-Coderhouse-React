import React, { useContext } from "react"
import { ProductsContext } from '../../CartContext/CartContext'
import '../Cart/Cart.css'
import { Link } from "react-router-dom"

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

    //Calculo el total de los productos primero pasando los subtotales a un array y luego sumandolos
    const totalPerProduct = [];
    
    addedProducts.forEach(product => {
        let totalPrice = product.price * product.quantity;
        totalPerProduct.push(totalPrice)
    })
    
    let total = 0;

    for (let i=0; i < totalPerProduct.length; i++){
        total = total + totalPerProduct[i];
    }

    if(total === 0){
        return(
            <div className="messageIfNoItems">
                <p className="noItems">There are no items selected</p>
                <Link to="/" className="backHomeSign">Go back to Home</Link>
            </div>
        )
    }
    else{
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
                <div className='total'>
                    <p>Total: {total}</p>
                </div>
                <div className="d-flex justify-content-center deleteButton2">
                    <button onClick={clearAll}>Delete all</button>
                </div>
            </>
        )
    }

}

export default Cart