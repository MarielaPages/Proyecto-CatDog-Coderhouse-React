import React, { createContext, useState} from 'react'

export const ProductsContext = createContext(); 


export const ProductsProvider = ({ children }) => {
    const [addedProducts, setAddedProducts] = useState([]);
    const [total, setTotal] = useState(0)

    return (
        <ProductsContext.Provider value={{addedProducts, setAddedProducts, total, setTotal}}>
            {children}
        </ProductsContext.Provider>
    )
}

