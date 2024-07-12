import React from 'react';
import { Card ,  Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductList = ({productList}) => {
    const allProducts = productList;

    return (
        //fetching on products list
        <Container className='card-list'>
            <Row>
                {allProducts.map((product) => (
                <Col lg={3} md={6} sm={12} key={product.id}>
                <Card className='card'>
                    <Card.Img 
                    className='image'
                    variant="top" 
                    src={product.image}                     
                    />
                    <Card.Body className='cart-body'>
                        <Card.Title className='card-title'>{product.title}</Card.Title>
                        <Card.Text className='description'>
                        {product.description}
                        </Card.Text>
                        <Link className='btn ' to={`/product/${product.id}`} variant="primary">More Details</Link>
                        <Link className=' btn  m-1 p-2 ' variant="primary">Add to Cart</Link>
                    </Card.Body>
                </Card>
                </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ProductList
