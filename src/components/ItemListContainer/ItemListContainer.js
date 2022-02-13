import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ heading, subheading1, subheading2 }) => {
    return(
        <>
            <section>
                <div className="textoBienvenida">
                    <article>
                        <h1>{heading}</h1>
                        <p className="subheading">{subheading1}</p>
                        <p className="subheading">{subheading2}</p>
                    </article>
                </div> 
            </section>
            <ItemList />
        </>
    )
}

export default ItemListContainer;