import React from 'react';
import TopNav from '../components/TopNav/TopNav';
import Footer from '../components/Footer/Footer';
import './Info.css';

const Info = () => {
  return (
    <div className="info">
      <TopNav />
      <div className="info-container">
        <div className="info-content">
          <h1>¡Bienvenido a <b>Nuestro GatoEspecialista</b>!</h1>
          <img
            src="https://i.ibb.co/Z8MF86T/Dream-Shaper-v5-cats-playing-with-cat-toys-banner-1.jpg"
            alt="Cats Playing with Cat Toys"
          />
          <p>
            En <b>GatoEspecialista</b>, nos apasiona el cuidado y bienestar de nuestros amigos gatunos.
            Somos un marketplace especializado en brindar una plataforma online a las pequeñas y medianas
            empresas, así como a las tiendas de Instagram que desean expandir su presencia en el mundo
            digital y llegar a más amantes de los gatos como tú.
          </p>
          <p>
            Nuestra misión es ofrecer una amplia variedad de productos de alta calidad que cubran todas
            las necesidades de tus queridos felinos. Desde alimentos saludables y nutritivos, hasta
            productos de higiene y juguetes divertidos, en <b>GatoEspecialista</b> encontrarás todo lo que
            necesitas para el bienestar de tu peludo compañero.
          </p>
          <p>
            Nuestra visión es convertirnos en el destino preferido de los amantes de los gatos, ofreciendo
            una experiencia de compra única y personalizada. Queremos ser el lugar donde puedas encontrar
            los mejores productos para mimar a tu gato y cuidarlo como se merece.
          </p>
          <p>
            En <b>GatoEspecialista</b>, entendemos el amor y la conexión especial que tienes con tu gato. Por
            eso, nos esforzamos por brindarte no solo productos de calidad, sino también un servicio de
            atención al cliente excepcional. Nuestro equipo está aquí para ayudarte en todo momento y
            asegurarnos de que tu experiencia de compra sea puramente encantadora.
          </p>
          <p>
            Explora nuestra tienda y descubre todos los productos que tenemos para consentir a tu gato. ¡Estamos
            seguros de que te enamorarás de cada artículo y encontrarás todo lo que necesitas para hacer feliz
            a tu amigo felino!
          </p>
          <p>¡Gracias por formar parte de <b>GatoEspecialista</b>!</p>

          <div className="contact-info">
            <h2>Contáctanos:</h2>
            <p>Teléfono: 123-456-789</p>
            <p>Correo electrónico: info@gatoespecialista.com</p>
            <p>Síguenos en Instagram: @gatoespecialista</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Info;
