//Kelvin BaltazarPino Ake// 
// ISC-8B//

import express from 'express';
import mongoose from "mongoose";
import dns from "node:dns/promises";
import Usuario from './models/usuario.model.js';
import dotenv from 'dotenv';

dns.setServers(["1.1.1.1", "8.8.8.8"]);
dotenv.config()

const app = express()
const puerto = 3000
const uri = process.env.uri;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/usuarios', async (req, res) => { //
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
});

mongoose.connect(uri)
    .then(() => {
        console.log("Conexión exitosa a la base de datos")
    })
    .catch((error) => {
        console.log("Error al conectar a la base de datos", error)
    });


app.get('/', (req, res) => {
    res.send('Bienvenido a mi API CRUD');
});

app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`)
})
