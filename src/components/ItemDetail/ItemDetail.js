import './ItemDetail.css'

const ItemDetail = ( {data} ) => {
    return(
        <div className="card" style={{width: '18rem'}}>
            <img src={data.image} className="card-img-top" alt={data.title} />
            <div className="card-body">
                <p className="card-text">{data.title} </p>
            </div>
            <div className="card-body">
                <p className="card-text">{data.description}</p>
            </div>
            <div className="card-body">
                <p className="card-text">$ {data.price}</p>
            </div>
        </div>
    )
}

export default ItemDetail; 