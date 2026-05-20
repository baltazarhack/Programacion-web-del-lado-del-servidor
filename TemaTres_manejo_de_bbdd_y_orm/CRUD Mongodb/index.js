//Kelvin BaltazarPino Ake//
//ISC-8B//

import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import dns from 'node:dns/promises';
import dotenv from 'dotenv';

dns.setServers(['1.1.1.1', '8.8.8.8']);
dotenv.config();

const app = express();
const puerto = 3000;
const uri = process.env.uri;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// nueva conexion con mongoclient
const client = new MongoClient(uri);
let db;

async function conectar() {
    try {
        await client.connect();
        db = client.db(); 
        console.log('Conexión  exitosa a la base de datos');
    } catch (error) {
        console.error('Error al conectar a la base de datos ', error);
        process.exit(1);
    }
}

// obtener la colección nde datos
const coleccion = () => db.collection('usuarios');


// CRUD

// POST - Crear usuario
app.post('/usuarios', async (req, res) => {
    try {
        const { nombre, correo, edad } = req.body;

        const nuevoUsuario = { nombre, correo, edad };
        const resultado = await coleccion().insertOne(nuevoUsuario);

        res.status(201).json({ _id: resultado.insertedId, ...nuevoUsuario });
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
});

// GET - Obtener todos los usuarios
app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await coleccion().find().toArray();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
});

// GET - Obtener usuario por ID
app.get('/usuario/:id', async (req, res) => {
    try {
        const {id } = req.params;
        const usuario = await coleccion().findOne({ _id: new ObjectId(id) });

        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json(usuario);
    } catch (error) {
        console.error('error al obtener el usuario por ID:', error);
        res.status(500).json({ error: 'error al obtener el usuario' });
    }
});

// PUT - actualizar usuario por ID
app.put('/usuario/:id', async (req, res) => {
    try {
        const {id } = req.params;
        const { nombre, correo, edad } = req.body;

        const resultado = await coleccion().findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: { nombre, correo, edad } },
            { returnDocument: 'after' } 
        );

        if (!resultado) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        console.log(resultado);
        res.status(200).json(resultado);
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
});

// DELETE - eliminar usuario por ID
app.delete('/usuario/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const resultado = await coleccion().findOneAndDelete({ _id: new ObjectId(id) });

        if (!resultado) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario eliminado' });
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
});


app.get('/', (req, res) => {
    res.send('Bienvenido a mi API CRUD');
});


//iniciar servidor 
conectar().then(() => {
    app.listen(puerto, () => {
        console.log(`Servidor escuchando en http://localhost:${puerto}`);
    });
});