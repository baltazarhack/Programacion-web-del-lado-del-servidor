
import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get('/', async (req, res) => {
    try {
        const result = await axios.get('https://dog.ceo/api/breeds/image/random');

        console.log(result.data); 

        
        const perro = result.data.message;

        
        res.render('index', {
            perro: perro,
        });

    } catch (error) {
        console.log('Error:', error.message);
        res.render('index', {
            quote: "No se pudo obtener la cita",
            character: ""
        });
    }
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});