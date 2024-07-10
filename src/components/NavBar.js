import React from 'react';
import { Container ,Navbar , Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css'



const NavBar = () => {
    
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary navbar">
        <Container>
                <Link style={{fontSize: '22px'}} className='link' to="/">store | ecommerce</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/Cart">Cart</Link>
                <Link className='link' to="/About">About</Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    )
}

export default NavBar
