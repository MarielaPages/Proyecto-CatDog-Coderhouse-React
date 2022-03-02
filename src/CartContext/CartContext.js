import React, { createContext, useState} from 'react';

export const ProductsContext = createContext(); 

export const ProductsProvider = ({ children }) => {
    const [addedProducts, setAddedProducts] = useState([]);
    const [total, setTotal] = useState(0);

    //Creo funciones para borrar elementos del carrito y para eliminar todos los elementos
    const deleteProduct = (productName) => {
        const updatedProducts = addedProducts.filter(product => productName !== product.title);
        setAddedProducts(updatedProducts);
        countTotal();
    }
    const clearAll = () => {
        setAddedProducts([]);
        countTotal();
    }

    //Creo funcion que calcula el total de los productos primero pasando los subtotales a un array y luego sumandolos
    const countTotal = () => {
        const totalPerProduct = [];
    
        addedProducts.forEach(product => {
            let totalPrice = product.price * product.quantity;
            totalPerProduct.push(totalPrice);
        })

        let totalToPay = 0

        for (let i=0; i < totalPerProduct.length; i++){
            totalToPay = totalToPay + totalPerProduct[i];
        }
        
        setTotal(totalToPay);
    }

    return (
        <ProductsContext.Provider value={{addedProducts, setAddedProducts, total, setTotal, deleteProduct, clearAll, countTotal}}>
            {children}
        </ProductsContext.Provider>
    )
}

