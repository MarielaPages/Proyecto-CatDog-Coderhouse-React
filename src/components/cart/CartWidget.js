import cart from "./cart-img/cart-icon.png";
import "./CartWidget.css";

const CartWidget = () => {
    return(
        <div>
            <a href="" className="cart">
              <img src={cart} alt="Cart logo" />
            </a>
        </div>
    )
}

export default CartWidget;
