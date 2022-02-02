import "./Item.css"

const Item = ( {data} ) => {
    return(
        <div className="card cardContainer" style={{width: '18rem'}}>
            <div className="imageContainer">
                <img src={data.image} className="card-img-top" alt={data.title} />
            </div>
            <div className="card-body casrdBodyContainer">
                <p className="card-text text-center">{(data.title).toUpperCase()}</p>
                <p className="card-text text-center">usd {data.price}</p> 
            </div>
        </div>
    )
}

export default Item;