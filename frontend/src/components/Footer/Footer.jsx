import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={3} className="footer-column">
            <img src="https://styles.redditmedia.com/t5_357o5/styles/communityIcon_87g6dgw6tssa1.png" alt="Logo" className="footer-logo" />
            <p>¡La mejor tienda en línea para tus compras!</p>
          </Col>
          <Col md={3} className="footer-column">
            <h3>Información de contacto</h3>
            <p>Dirección: 123 Calle Principal, Ciudad</p>
            <p>Teléfono: 555-123-4567</p>
            <p>Email: info@example.com</p>
          </Col>
          <Col md={3} className="footer-column">
            <h3>Enlaces útiles</h3>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/productos">Productos</a></li>
              <li><a href="/nosotros">Nosotros</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </Col>
          <Col md={3} className="footer-column">
            <h3>Suscríbete a nuestro boletín</h3>
            <p>Recibe las últimas noticias y ofertas especiales</p>
            <form>
              <input type="email" placeholder="Ingresa tu correo electrónico" />
              <button type="submit">Suscribirse</button>
            </form>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={12} className="text-center">
            <p>Todos los derechos reservados &copy; 2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
