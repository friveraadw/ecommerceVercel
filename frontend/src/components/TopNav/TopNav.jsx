import React, { useContext } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BsPerson, BsHeart, BsCart3 } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import './TopNav.css';

const TopNav = () => {
  const { isLoggedIn, login } = useContext(AppContext);
  const email = 'fabian@adwise.cl'; // Correo electrónico a verificar

  return (
    <Navbar expand="lg">
      <Navbar.Brand as={Link} to="/">
        GatoEspecialista
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/">
            Inicio
          </Nav.Link>
          <Nav.Link as={NavLink} to="/productos">
            Productos
          </Nav.Link>
          <Nav.Link as={NavLink} to="/info">
            Acerca de
          </Nav.Link>
          {isLoggedIn && email === 'fabian@adwise.cl' && (
            <Nav.Link as={NavLink} to="/añadir-productos">
              Añadir Productos
            </Nav.Link>
          )}
          {isLoggedIn ? (
            <NavDropdown title="Cuenta" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/productos/nuevo">
                Crear Productos
              </NavDropdown.Item>
              <NavDropdown.Item href="#favorites">
                <BsHeart /> Favoritos
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Nav.Link as={NavLink} to="/login">
              <BsPerson /> Iniciar sesión
            </Nav.Link>
          )}
          <Nav.Link as={NavLink} to="/cart">
            <BsCart3 /> Carrito
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNav;
