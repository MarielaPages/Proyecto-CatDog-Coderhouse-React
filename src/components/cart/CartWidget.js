import cart from "./cart-img/cart-icon.png";
import "./CartWidget.css";
import { Link } from 'react-router-dom'
import React, { useContext } from "react"
import { ProductsContext } from "../../CartContext/CartContext"

const CartWidget = () => {

    //Calculo el total variable de items
    const [addedProducts] = useContext(ProductsContext);

    const itemsPerProduct = []

    let itemsAmount = 0

    addedProducts.forEach(product => {
        itemsPerProduct.push(product.quantity)
    });

    for (let i=0; i < itemsPerProduct.length; i++){
        itemsAmount = itemsAmount + itemsPerProduct[i]; 
    }

    if(itemsAmount !== 0){
        return(
            <div>
                <Link to="/cart" className="cart">
                  <img src={cart} alt="Cart logo" />
                </Link>
                <p className="cartNumberProds">{itemsAmount}</p>
            </div>
        )
    }
    else{
        return(<div className="nothing"></div>)
    }
}

export default CartWidget;
