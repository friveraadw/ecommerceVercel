import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import './Crearproductos.css';

const CrearProducto = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [activo, setActivo] = useState(false);
  const [imagen, setImagen] = useState('');
  const [precioOferta, setPrecioOferta] = useState('');

  const handleCrearProducto = async () => {
    try {
      const response = await axios.post('http://localhost:3000/productos/crear', {
        nombre,
        descripcion,
        precio,
        activo,
        imagen,
        precio_oferta: precioOferta
      });
      console.log(response.data.message); // Success message from the backend
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='fondo'>
    <div className="crearproductos">
      <h2>Crear Productos</h2>
      <Form>
        <Form.Group controlId="nombre">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="descripcion">
          <Form.Label>Descripción:</Form.Label>
          <Form.Control type="text" value={descripcion} onChange={e => setDescripcion(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="precio">
          <Form.Label>Precio:</Form.Label>
          <Form.Control type="number" value={precio} onChange={e => setPrecio(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="activo">
          <Form.Check
            type="checkbox"
            label="Activo"
            checked={activo}
            onChange={e => setActivo(e.target.checked)}
          />
        </Form.Group>
        <Form.Group controlId="imagen">
          <Form.Label>Imagen:</Form.Label>
          <Form.Control type="text" value={imagen} onChange={e => setImagen(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="precioOferta">
          <Form.Label>Precio Oferta:</Form.Label>
          <Form.Control type="number" value={precioOferta} onChange={e => setPrecioOferta(e.target.value)} />
        </Form.Group>
        <Button variant="primary" onClick={handleCrearProducto}>Crear Producto</Button>
      </Form>
    </div>
    </div>
  );
};

export default CrearProducto;
