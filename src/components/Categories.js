import React from 'react'
import { Container } from 'react-bootstrap'

const Categories = ({propsOnProducts , propsOnCategories , propsOnProductsInCat}) => {
    const getAllProducts = propsOnProducts;
    const categories = propsOnCategories;
    const getProductsInCat = propsOnProductsInCat;
    return (
        <>
        <Container>
        <button 
        onClick={()=> {getAllProducts()}}
        className='btn btn-info' 
        >
            All
        </button>
            {categories.map((cat) => {
                return (

                    <button 
                    onClick={() => {
                        getProductsInCat(cat)
                    }} 
                    className='btn btn-info' 
                    key={cat}
                    >
                        {cat}
                    </button>

                )
            })}
            
        </Container>
        </>
    )
}

export default Categories
