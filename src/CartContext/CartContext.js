import React, { createContext, useState} from 'react'

export const ProductsContext = createContext(); 

let total=0;

export const ProductsProvider = ({ children }) => {
    const [addedProducts, setAddedProducts] = useState([]);

    return (
        <ProductsContext.Provider value={[addedProducts, setAddedProducts, total]}>
            {children}
        </ProductsContext.Provider>
    )
}

