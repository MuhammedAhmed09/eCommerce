import React from 'react'
import { Container } from 'react-bootstrap'


const Categories = ({ propsOnCategories , propsOnProductsInCat}) => {
    const categories = propsOnCategories;
    const getProductsInCat = propsOnProductsInCat;
    return (
        <>
        <Container className='cat'>
            <h1>Categories</h1>
            {categories.map((cat) => {
                return (

                    <button 
                    onClick={() => {
                        getProductsInCat(cat)
                    }} 
                    className='btn' 
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
