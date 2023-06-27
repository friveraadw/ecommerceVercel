import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './ProductDetails.css';
import TopNav from '../components/TopNav/TopNav';
import Footer from '../components/Footer/Footer';

const ProductDetails = () => {
  const { id } = useParams();
  const { products, addToCart } = useContext(AppContext); // Agrega el método addToCart del contexto
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/productos/${id}`);
        const data = await response.json();
        setProduct(data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const handleAddToCart = (productId) => {
    addToCart(productId); // Llama al método addToCart del contexto para añadir el producto al carrito
  };

  const handleBuyNow = (productId) => {
    // Lógica para comprar el producto
    console.log('Comprar ahora:', productId);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <TopNav />
      <Container className="product-detail-container">
        <Row>
          <Col md={8} className="product-detail-details">
            <Row>
              <Col md={6} xs={12} className="product-detail-image-container">
                <Image src={product.imagen} alt={product.nombre} className="product-detail-image" fluid />
              </Col>
              <Col md={6} xs={12} className="product-detail-info">
                <h3>{product.nombre}</h3>
                <p>
                  {product.precio_oferta ? (
                    <>
                      <span
                        className={`product-detail-price-offer ${
                          Number(product.precio_oferta) === Number(product.precio) ? 'product-detail-price-strike' : ''
                        }`}
                      >
                        ${product.precio_oferta}
                      </span>
                      {' - '}
                      <span className="product-detail-price">${product.precio}</span>
                    </>
                  ) : (
                    <span className="product-detail-price">${product.precio}</span>
                  )}
                </p>
                <p>{product.descripcion}</p>
                {/* Resto de los campos */}
                <Button variant="primary" onClick={() => handleAddToCart(product.id)}>
                  Add to Cart
                </Button>
                <Button variant="success" onClick={() => handleBuyNow(product.id)}>
                  Buy Now
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ProductDetails;
