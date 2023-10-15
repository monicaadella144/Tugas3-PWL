import { Row, Col, Container, Image } from 'react-bootstrap';

export default function About() {
    return (
        <Container>
            <Row style={{ marginBottom: '10%', marginTop: '10%' }}>
                <Col lg={6}>
                    <Image src="/Food3.png" />
                </Col>
                <Col className=' align-items-center' style={{ marginTop: '50px' }}>
                    <Row>
                        <Col>
                            <h1>
                                About Us
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            We are a company that connects the world of real estate and finance. We provide a complete service for the sale, purchase or rental of real estate. Our advantage is more than 15 years of experience and soil in attractive locations in Slovakia with branches in Bratislava and Košice.
                            We have a connection to all banks on the Slovak market, so we can solve everything under one roof. By constantly innovating our business activities, we move forward and we are able to offer truly above-standard services that set us apart from the competition.
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}