import { Row, Col, Container, Image } from 'react-bootstrap';

export default function Home() {

    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <Col style={{ color: '#EA2BD7' }} className='mt-5'>
                            <h2>
                                Delecious
                            </h2>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5>
                                Best Menu
                            </h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis aliquet ipsum urna id at ipsum nisi nam urna. Nulla ornare eget ac orci, viverra metus. Felis volutpat at diam, amet, fermentum, in eu. Cras neque vestibulum risus.
                        </Col>
                    </Row>
                </Col>
                <Col lg={{ span: 2, offset: 1 }}>
                    <Image src="/Food1.png" />
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center align-items-center mt-5 mb-5'>
                    <Image src="/Food2.png" />
                </Col>
            </Row>
        </Container>
    );
}