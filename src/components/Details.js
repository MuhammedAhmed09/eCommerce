import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const Details = () => {
    const api = 'https://fakestoreapi.com/products';
    const [product, setProduct] = useState({});
    const params = useParams();
    

    useEffect(() => {
        fetch(`${api}/${params.productId}`)
        .then((res) => res.json())
        .then((more) => setProduct(more))
    });

    console.log(product);

    return (
        <>
        <img src={product.image} alt="" />
        <h2>{product.title}.</h2> 
        <br />   
        <h2>{product.description}.</h2>  
        <br />  
        <h3>${product.price}</h3>
        </>
    )
}

export default Details