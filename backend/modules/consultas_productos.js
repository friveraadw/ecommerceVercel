const pool = require('./conexion');

const getListadoProductosBD = async (id, nombre, descripcion, precio, activo, imagen, precio_oferta) => {
  let consulta_listado_productos = 'SELECT * FROM producto';

  if (id) {
    consulta_listado_productos += ' WHERE id = ' + id;
  } else {
    consulta_listado_productos += ' WHERE 1=1';
    if (nombre) {
      consulta_listado_productos += ' AND nombre = \'' + nombre + '\'';
    }
    if (descripcion) {
      consulta_listado_productos += ' AND descripcion = \'' + descripcion + '\'';
    }
    if (precio) {
      consulta_listado_productos += ' AND precio = ' + precio;
    }
    if (activo) {
      consulta_listado_productos += ' AND activo = ' + activo;
    }
    if (imagen) {
      consulta_listado_productos += ' AND imagen = \'' + imagen + '\'';
    }
    if (precio_oferta) {
      consulta_listado_productos += ' AND precio_oferta = ' + precio_oferta;
    }
  }

  console.log(consulta_listado_productos);

  const { rows } = await pool.query(consulta_listado_productos);
  return rows;
};


const crearProducto = async (nombre, descripcion, precio, activo, imagen, precio_oferta) => {
  const query = 'INSERT INTO producto (nombre, descripcion, precio, activo, imagen, precio_oferta) VALUES ($1, $2, $3, $4, $5, $6)';
  const values = [nombre, descripcion, precio, activo, imagen, precio_oferta];
  await pool.query(query, values);
};



const anadirProductoAlCarrito = async (nombre, descripcion, precio, activo, imagen, precio_oferta) => {
  const query = 'INSERT INTO carrito (nombre, descripcion, precio, activo, imagen, precio_oferta) VALUES ($1, $2, $3, $4, $5, $6)';
  const values = [nombre, descripcion, precio, activo, imagen, precio_oferta];
  await pool.query(query, values);
};

module.exports = {
  getListadoProductosBD,
  crearProducto,
  anadirProductoAlCarrito
};
