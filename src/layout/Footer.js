import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './footer.css'

export default function Footer() {
    return (
        <footer className="main-footer">
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} className="text-center">
                        <span className='text-black' >&copy; Made With Monica | 2023 - </span>
                        <span className="text-center text-black">{new Date().getFullYear()}</span>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}