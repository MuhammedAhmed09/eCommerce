import React from 'react'
import Slide from './components/Slide';
import ProductList from './components/ProductList';


const Home = ({propsOnProducts}) => {
    return (
        <>
        <Slide />

        <ProductList productList={propsOnProducts} />
        </>
    )
}

export default Home
