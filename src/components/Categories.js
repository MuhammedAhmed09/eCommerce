import React from 'react'
import { Container } from 'react-bootstrap'


const Categories = ({ propsOnCategories , propsOnProductsInCat}) => {
    const categories = propsOnCategories;
    const getProductsInCat = propsOnProductsInCat;
    return (
        <>
        <Container>
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
