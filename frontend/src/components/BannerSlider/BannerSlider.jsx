import React from 'react';
import { Carousel } from 'react-bootstrap';

const BannerSlider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://placekitten.com/1920/600"
          alt="Banner 1"
        />
        <Carousel.Caption>
          <h3>¡Bienvenido a nuestra tienda en línea!</h3>
          <p>Descubre nuestras últimas ofertas y promociones.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://placekitten.com/1920/600"
          alt="Banner 2"
        />
        <Carousel.Caption>
          <h3>Envío gratis en todos los pedidos</h3>
          <p>Aprovecha nuestra promoción por tiempo limitado.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://placekitten.com/1920/600"
          alt="Banner 3"
        />
        <Carousel.Caption>
          <h3>Descuentos exclusivos para miembros</h3>
          <p>Regístrate y obtén beneficios adicionales.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default BannerSlider;
