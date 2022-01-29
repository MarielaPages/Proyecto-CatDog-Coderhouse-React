import "./ItermCount.css"

const ItemCount = ({ stock, items, onAdd, onLess }) => {
    return(
        <div className="container">
            <div className="product">
                <div>Items: {items}</div>
                <div class="buttons">
                    <button onClick={onAdd}>+</button>
                    <button onClick={onLess}>-</button>
                </div>
                <div>Stock: {stock}</div>
            </div>
        </div>    
    )
}

export default ItemCount;