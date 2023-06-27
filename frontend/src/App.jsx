import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Product';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Info from './pages/Info';
import Login from './pages/Login';
import Crearproductos from './pages/Crearproductos';
import { AppContextProvider } from './context/AppContext';

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/productos/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/info" element={<Info />} />
          <Route path="/login" element={<Login />} />
          <Route path="/crear-productos-administrador" element={<Crearproductos/>} /> 
        </Routes>
      </Router>
    </AppContextProvider>
  );
};

export default App;
