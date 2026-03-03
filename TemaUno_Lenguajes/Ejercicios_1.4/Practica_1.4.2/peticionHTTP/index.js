// Kelvin Baltazar Pino Ake //
// AA 1.4 Framework JS //

import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mundo');
  res.sendStatus(200);
});

app.post('/registro', (req, res) => {
  res.sendStatus(201);
});

app.put('/usuario/actualizar', (req, res) => {
  res.sendStatus(200);
});

app.patch('/usuario/modificar', (req, res) => {
  res.sendStatus(200);
});

app.delete('/usuario/eliminar', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});