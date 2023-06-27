import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import TopNav from '../components/TopNav/TopNav';
import Footer from '../components/Footer/Footer';
import './Cart.css';

const Cart = () => {
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [cartMessage, setCartMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/carrito');
        const data = await response.json();
        setProductList(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productList.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const addToCart = async (product) => {
    try {
      const response = await axios.post('http://localhost:3000/carrito', product);
      setCartMessage('Producto añadido al carrito');
    } catch (error) {
      console.log(error);
    }
  };

  const removeAllProducts = async () => {
    try {
      await axios.delete('http://localhost:3000/carrito');
      setProductList([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TopNav />

      <div className="cart-list">
        <h2 className="cart-title">Productos en el carrito:</h2>
        {currentProducts.map((product) => (
          <div key={product.id} className="cart-item">
            <h3 className="cart-name">{product.nombre}</h3>
            <img src={product.imagen} alt={product.nombre} className="product-image" />
            <p className="cart-description">{product.descripcion}</p>
            <p className="cart-price">Precio: ${product.precio}</p>
            {product.precio_oferta && (
              <p className="cart-offer-price">Precio de oferta: ${product.precio_oferta}</p>
            )}
          </div>
        ))}
        {currentProducts.length > 0 && (
          <button className="remove-all-button" onClick={removeAllProducts}>
            Eliminar todos los productos
          </button>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Cart;
