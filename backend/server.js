const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors()); 

const usuariosValidos = ['maxi', 'tati', 'mauri', 'anto', 'leo', 'santi'];

app.get('/validar/:nombre', (req, res) => {
  const nombre = req.params.nombre.toLowerCase();
  if (usuariosValidos.includes(nombre)) {
    res.json({ valido: true });
  } else {
    res.json({ valido: false });
  }
});

app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.json({ mensaje: `Hola, ${nombre}` });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
