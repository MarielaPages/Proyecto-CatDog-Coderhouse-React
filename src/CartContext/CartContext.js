import React, { createContext, useState} from 'react'

export const ProductsContext = createContext(); 

export const ProductsProvider = ({ children }) => {
    const [addedProducts, setAddedProducts] = useState([])

    return (
        <ProductsContext.Provider value={[addedProducts, setAddedProducts]}>
            {children}
        </ProductsContext.Provider>
    )
}

