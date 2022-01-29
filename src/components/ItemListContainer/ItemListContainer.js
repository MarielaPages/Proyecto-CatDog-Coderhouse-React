import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import React, { useState } from "react"

const ItemListContainer = ({ heading, subheading1, subheading2 }) => {
    const initial = 1;
    const stock = 5;

    const [items, setItems] = useState(initial);

    const onAdd = () => {
        if(items < stock){
            setItems(items + 1)
        }
    }

    const onLess = () => {
        if(items > initial){
            setItems(items - 1)
        }
    }


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
            <ItemCount
                stock={stock}
                items={items}
                onAdd={onAdd}
                onLess={onLess}
            />
        </>
    )
}

export default ItemListContainer;