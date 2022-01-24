import cart from "./cart-img/cart-icon.png";
import "./cart.css";

const Cart = () => {
    return(
        <div>
            <a href="" className="cart">
              <img src={cart} alt="Cart logo" />
            </a>
        </div>
    )
}

export default Cart;
