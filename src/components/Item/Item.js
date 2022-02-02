const Item = ( {data} ) => {
    return(
        <div className="card" style={{width: '18rem'}}>
            <img src={data.image} className="card-img-top" alt={data.title} />
            <div className="card-body">
                <p className="card-text">{(data.title).toUpperCase()}</p>
                <p className="card-text">usd {data.price}</p> 
            </div>
        </div>
    )
}

export default Item;