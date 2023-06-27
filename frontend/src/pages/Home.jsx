import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BannerSlider from '../components/BannerSlider/BannerSlider';
import Calugas from '../components/Calugas/Calugas';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel';
import TopNav from '../components/TopNav/TopNav';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      {/* Top Nav */}
      <nav className="top-nav">
        <TopNav />
      </nav>

      {/* Banner Slider */}
      <section className="banner-slider">
        <BannerSlider />
      </section>

      {/* Carruseles */}
      <section className="carrusel">
        {/* Contenido del carrusel 1 */}
        <ProductCarousel />
      </section>

      {/* Sección de calugas */}
      <section className="calugas">
        <Calugas />
      </section>

      {/* Footer */}
      <footer className="footer">
        {/* Contenido del footer */}
        <Footer />
      </footer>
    </>
  );
};

export default Home;