import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
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
        <Container className='details'>
            <Row>
                <Col lg={5} md={3} sm={12}>
                    <img src={product.image} alt="" />
                </Col>
                <Col lg={7} md={9} sm={12} className='right'>
                    <h3>Name: <span>{product.title}.</span></h3> 
                    <br />   
                    <h3>Details: <span>{product.description}.</span></h3>  
                    <br />  
                    <h3>Price: <span>{product.price}$</span></h3>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Details