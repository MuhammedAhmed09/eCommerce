import React from 'react'
import { Container , Row , Col } from 'react-bootstrap';
import { FaFacebookF } from "react-icons/fa";
import { CgCopyright  } from "react-icons/cg";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const CopyRight = () => {
    return (
        <Container>
        <Row  className='copyright'>
            <Col lg={10} sm={12} className='text'>
                <h6>Copyright <span><CgCopyright  /></span> 2023 All right reservd | This template is made by <b>Eng/ Muhammed Ahmed (BA7R)</b></h6>
            </Col>
            <Col lg={2} bsm={12} className='icons'>
                <Link className='link' to="https://www.facebook.com/19muhammad19"><FaFacebookF /></Link>
                <Link className='link' to="https://github.com/Mushsd"><FaGithubSquare /></Link>
                <Link className='link' to="https://www.linkedin.com/in/muhammad-a-ragab-a29078307"><FaLinkedinIn /></Link>
            </Col>
        </Row>
        </Container>
    )
}

export default CopyRight
