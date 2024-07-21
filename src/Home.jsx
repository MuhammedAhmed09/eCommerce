import React from 'react'
import Slide from './components/Slide';
import ProductList from './components/ProductList';
import Categories from './components/Categories';
import CopyRight from "./CopyRight"
import Footer from "./Footer"


const Home = ({propsOnProducts , propsOnCategories , propsOnProductsInCat}) => {
    return (
        <>
        <Slide />
        <Categories propsOnCategories={propsOnCategories} propsOnProductsInCat={propsOnProductsInCat} />
        <ProductList productList={propsOnProducts} />
        <Footer />
        <CopyRight />
        </>
    )
}

export default Home
