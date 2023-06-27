import React, { useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import './ProductCarousel.css'; // Importar el archivo CSS

const ProductCarousel = () => {
  const products = [
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripción del producto 1',
      image: 'https://placekitten.com/200/200',
    },
    {
      id: 2,
      name: 'Producto 2',
      description: 'Descripción del producto 2',
      image: 'https://placekitten.com/200/200',
    },
    {
      id: 3,
      name: 'Producto 3',
      description: 'Descripción del producto 3',
      image: 'https://placekitten.com/200/200',
    },
    {
      id: 4,
      name: 'Producto 4',
      description: 'Descripción del producto 4',
      image: 'https://placekitten.com/200/200',
    },
    {
      id: 5,
      name: 'Producto 5',
      description: 'Descripción del producto 5',
      image: 'https://placekitten.com/200/200',
    },
    {
      id: 6,
      name: 'Producto 6',
      description: 'Descripción del producto 6',
      image: 'https://placekitten.com/200/200',
    },
    {
      id: 7,
      name: 'Producto 7',
      description: 'Descripción del producto 7',
      image: 'https://placekitten.com/200/200',
    },
    {
      id: 8,
      name: 'Producto 8',
      description: 'Descripción del producto 8',
      image: 'https://placekitten.com/200/200',
    },
    {
      id: 9,
      name: 'Producto 9',
      description: 'Descripción del producto 9',
      image: 'https://placekitten.com/200/200',
    },
    {
      id: 10,
      name: 'Producto 10',
      description: 'Descripción del producto 10',
      image: 'https://placekitten.com/200/200',
    },
    {
      id: 11,
      name: 'Producto 11',
      description: 'Descripción del producto 11',
      image: 'https://placekitten.com/200/200',
    },
    {
      id: 12,
      name: 'Producto 12',
      description: 'Descripción del producto 12',
      image: 'https://placekitten.com/200/200',
    }
  ]
;  

  const carouselRef = useRef(null);

  const groupedProducts = [];
  const itemsPerSlide = 6;

  for (let i = 0; i < products.length; i += itemsPerSlide) {
    groupedProducts.push(products.slice(i, i + itemsPerSlide));
  }

  const handleNext = () => {
    carouselRef.current.next();
  };

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  return (
    <div className="product-carousel">
      <div className="carousel-controls">
        <button className="carousel-control-prev" onClick={handlePrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true" />
        </button>
        <button className="carousel-control-next" onClick={handleNext}>
          <span className="carousel-control-next-icon" aria-hidden="true" />
        </button>
      </div>
      <Carousel fade interval={3000} pause={false} ref={carouselRef}>
        {groupedProducts.map((group, groupIndex) => (
          <Carousel.Item key={groupIndex}>
            <div className="product-group">
              {group.map((product) => (
                <div className="product" key={product.id}>
                  <img src={product.image} alt={product.name} className="product-img" />
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
