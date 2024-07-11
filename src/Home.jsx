import React from 'react'
import Slide from './components/Slide';
import ProductList from './components/ProductList';
import Categories from './components/Categories';


const Home = ({propsOnProducts , propsOnCategories , propsOnProductsInCat}) => {
    return (
        <>
        <Slide />
        <Categories propsOnCategories={propsOnCategories} propsOnProductsInCat={propsOnProductsInCat} />
        <ProductList productList={propsOnProducts} />
        </>
    )
}

export default Home
