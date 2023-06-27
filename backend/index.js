const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { api_secret, api_token_expired_time, jwt_secret } = require('./config');
const { getListadoProductos } = require('./modules/controlador_productos');
const { getListadoProductosBD, crearProducto } = require('./modules/consultas_productos');
const { getUsuarioPorEmail } = require('./modules/consultas_usuarios');
const pool = require('./modules/conexion');

const app = express();
app.listen(3000, () => console.log('API Server ON!'));

app.use(cors());
app.use(express.json());

// RUTA CONSULTA DE PRODUCTOS
app.get('/productos', async (req, res) => {
  try {
    const { id_categoria, id_subcategoria, id_marca, num_productos, order_by, type_order, activo } = req.body;
    const listado_productos = await getListadoProductos(id_categoria, id_subcategoria, id_marca, num_productos, order_by, type_order, activo);
    res.status(200).json(listado_productos);
  } catch (error) {
    res.status(error.code || 500).send(error.message);
  }
});

app.get('/productos/:id', async (req, res) => {
  try {
    const idProducto = req.params.id;
    const listado_productos = await getListadoProductosBD(idProducto);
    res.status(200).json(listado_productos);
  } catch (error) {
    res.status(error.code || 500).send(error.message);
  }
});

// RUTA DE AUTENTICACIÓN DE USUARIO
app.post('/login', async (req, res) => {
  const { email } = req.body;

  try {
    const usuario = await getUsuarioPorEmail(email);

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado.' });
    }

    const token = jwt.sign({ id: usuario.id, email: usuario.email }, jwt_secret, { expiresIn: api_token_expired_time });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor.' });
  }
});

app.post('/productos/crear', async (req, res) => {
  try {
    const { nombre, descripcion, precio, activo, imagen, precio_oferta } = req.body;
    await crearProducto (nombre, descripcion, precio, activo, imagen, precio_oferta);
    res.status(200).json({ message: 'PRODUCTO CREADO CORRECTAMENTE' });
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

app.post('/carrito', async (req, res) => {
  const { nombre, descripcion, precio, activo, imagen, precio_oferta } = req.body;

  try {
    const query = 'INSERT INTO carrito (nombre, descripcion, precio, activo, imagen, precio_oferta) VALUES ($1, $2, $3, $4, $5, $6)';
    const values = [nombre, descripcion, precio, activo, imagen, precio_oferta];
    await pool.query(query, values);

    res.status(200).send('Producto añadido al carrito');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error al agregar el producto al carrito');
  }
});

app.get('/carrito', async (req, res) => {
  try {
    const query = 'SELECT * FROM carrito';
    const { rows } = await pool.query(query);
    res.status(200).json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error al obtener los productos del carrito');
  }
});

app.delete('/carrito', async (req, res) => {
  try {
    const query = 'DELETE FROM carrito';
    await pool.query(query);
    res.status(200).send('Todos los productos han sido eliminados del carrito');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error al eliminar los productos del carrito');
  }
});



// DEVOLVER ERRORES DE URL
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada.' });
});
