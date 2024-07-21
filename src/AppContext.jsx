import React, { createContext, useState } from 'react'

export const ProductContext = createContext();


const ProductProvider = ({children }) => {
    const [cart, setCart] = useState([]);
    
    const addToCart = (product)  => {
        setCart([...cart, product ]);
    }


    
    return (
        <ProductContext.Provider value={{ cart , addToCart }}>
        {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider
