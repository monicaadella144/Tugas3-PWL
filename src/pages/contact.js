import React, { useState, useContext } from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const MessageContext = React.createContext();

export default function Contact() {
    return (
        <Container>
            <h1 style={{ marginTop: '10%' }}>
                Contact <span style={{ color: '#5BCEFF' }}>Us</span>
            </h1>
            <MessageProvider>
                <MessagesForm />
                <MessageList />
            </MessageProvider>
        </Container>
    );
}

function MessageProvider({ children }) {
    const [messages, setMessages] = useState([]);
    return (
        <MessageContext.Provider value={{ messages, setMessages }} >
            {children}
        </MessageContext.Provider>
    )
}

function MessagesForm() {
    const { messages, setMessages } = useContext(MessageContext);
    const [newMessages, setNewMessages] = useState('');

    const handleInputChange = (event) => {
        setNewMessages(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!newMessages.trim === "") return;

        const Object = {
            text: newMessages,
        }

        setMessages([...messages, Object])
        setNewMessages("");
    }

    return (
        <Row >
            <Col className='mt-5'>
                <Form>
                    <Form.Group>
                        <Form.Control type="text" onChange={handleInputChange} value={newMessages} />
                        <Button className="btn btn-secondary mt-3" onClick={handleSubmit} style={{ width: '100%' }}>Submit</Button>
                    </Form.Group>
                </Form>
            </Col>
            <Col className="mt-0">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15889.060759560141!2d105.27799865!3d-5.376475999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40db3ae0664557%3A0x3424bee91e5e5eca!2sStadion%20Sumpah%20Pemuda!5e0!3m2!1sid!2sid!4v1697383125793!5m2!1sid!2sid" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="test"></iframe>
            </Col>
        </Row>
    );
}

function MessageList() {
    const { messages } = useContext(MessageContext);

    return (
        <>
            <h3 style={{ marginTop: '20%', marginBottom: '20%' }}>
                Hasil Pesan Anda
                {messages.map((message, index) => (
                    <ul>
                        <li key={index}>{message.text}</li>
                    </ul>
                ))}
            </h3>
        </>
    );
}
