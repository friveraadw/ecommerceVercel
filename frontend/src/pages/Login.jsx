import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import TopNav from '../components/TopNav/TopNav';
import Footer from '../components/Footer/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const { token } = await response.json();
        console.log('Token:', token);

        if (email === 'fabian@adwise.cl') {
          navigate('/crear-productos-administrador');
        } else {
          navigate('/');
        }

        setEmail(email);
      } else {
        const { error } = await response.json();
        console.log('Error:', error);
      }
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  return (
    <>
    <TopNav />
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4} className="custom-form">
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    <Footer />
    </>
  );
};

export default Login;
