import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import './Product.css';
import TopNav from '../components/TopNav/TopNav';
import Footer from '../components/Footer/Footer';

const Product = () => {
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [cartMessage, setCartMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/productos');
        const data = await response.json();
        setProductList(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // Calcular el índice del último producto de la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  // Calcular el índice del primer producto de la página actual
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // Obtener los productos de la página actual
  const currentProducts = productList.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const addToCart = async (product) => {
    try {
      const response = await axios.post('http://localhost:3000/carrito', product);
      // Manejar la respuesta del backend según sea necesario
      setCartMessage('Producto añadido al carrito');
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <>
      <TopNav />
      <div className="container">
        <div className="sidebar">
          <img src="https://placekitten.com/1500/250" alt="Imagen Sidebar" className="sidebar-image" />
        </div>
        <div className="products-container">
          {currentProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.imagen} alt={product.nombre} className="product-image" />
              <h3>{product.nombre}</h3>
              <p>
                {product.precio_oferta ? (
                  <>
                    <span
                      className={`price-offer ${Number(product.precio_oferta) === Number(product.precio) ? 'price-strike' : ''
                        }`}
                    >
                      ${product.precio_oferta}
                    </span>
                    {' - '}
                    <span className="price">${product.precio}</span>
                  </>
                ) : (
                  <span className="price">${product.precio}</span>
                )}
              </p>
              <p>{product.descripcion}</p>
              {/* Resto de los campos */}
              <Link to={`/productos/${product.id}`}>Ver detalle</Link>
              <button onClick={() => addToCart(product)}>Añadir </button>
            </div>
          ))}
        </div>
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(productList.length / productsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
      {cartMessage && <p>{cartMessage}</p>}
      <Footer />
    </>
  );
};

export default Product;
