import "./ItermCount.css"

const ItemCount = ({ stock, items, onAdd, onLess, onAddCart }) => {
    return(
        <div className="containerCounter">
            <div className="product">
                <div>Items: {items}</div>
                <div className="buttons">
                    <button onClick={onAdd}>+</button>
                    <button onClick={onLess}>-</button>
                </div>
                <div>Stock: {stock}</div>
            </div>
            <div className="buttons addCartButtonContainer">
                <button onClick={onAddCart}>Add to cart</button>
            </div>
        </div>    
    )
}

export default ItemCount;