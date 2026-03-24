import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json ());
app.use(express.static("public"));

const recetaJson = `
[
  {
    "id": "0001",
    "tipo": "taco",
    "nombre": "Taco lechon",
    "precio": 20.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Puerco",
        "preparacion": "Horneado"
      },
      "salsa": {
        "nombre": "Tomate verde",
        "picor": "Medio"
      },
      "acompañamientos": [
        {
          "nombre": "Cebolla",
          "cantidad": "1 cucharada",
          "ingredientes": ["Cebolla blanca", "Cilantro", "Naranja", "Sal"]
        },
        {
          "nombre": "Guacamole",
          "cantidad": "2 cucharadas",
          "ingredientes": ["Aguacate", "Jugo de limon", "Sal", "Cebolla", "Cilantro"]
        }
      ]
    }
  },

  {
    "id": "0002",
    "tipo": "taco",
    "nombre": "Taco de cochinita",
    "precio": 18.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Cochinita pibil",
        "preparacion": "Horneado en pib"
      },
      "salsa": {
        "nombre": "Habanero",
        "picor": "Alto"
      },
      "acompañamientos": [
        {
          "nombre": "Cebolla morada",
          "cantidad": "1 cucharada",
          "ingredientes": ["Cebolla morada", "Naranja agria", "Sal", "Oregano"]
        }
      ]
    }
  },

  {
    "id": "0003",
    "tipo": "taco",
    "nombre": "Taco de barbacoa",
    "precio": 22.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Res",
        "preparacion": "Cocido al vapor"
      },
      "salsa": {
        "nombre": "Salsa roja",
        "picor": "Medio"
      },
      "acompañamientos": [
        {
          "nombre": "Cebolla y cilantro",
          "cantidad": "1 cucharada",
          "ingredientes": ["Cebolla blanca", "Cilantro", "Sal"]
        }
      ]
    }
  },

  {
    "id": "0004",
    "tipo": "taco",
    "nombre": "Taco de carne asada",
    "precio": 25.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Res",
        "preparacion": "Asado"
      },
      "salsa": {
        "nombre": "Guacamole",
        "picor": "Bajo"
      },
      "acompañamientos": [
        {
          "nombre": "Guacamole",
          "cantidad": "2 cucharadas",
          "ingredientes": ["Aguacate", "Jugo de limon", "Sal", "Cilantro"]
        }
      ]
    }
  },

  {
    "id": "0005",
    "tipo": "taco",
    "nombre": "Taco de chicharra",
    "precio": 19.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Chicharron",
        "preparacion": "Frito"
      },
      "salsa": {
        "nombre": "Salsa verde",
        "picor": "Medio"
      },
      "acompañamientos": [
        {
          "nombre": "Curtido",
          "cantidad": "1 cucharada",
          "ingredientes": ["Repollo", "Zanahoria", "Vinagre", "Sal"]
        }
      ]
    }
  }
]
`

const recetasTacos = JSON.parse(recetaJson);




app.get("/receta/:type", (req, res) => {
    const elegirTaco = recetasTacos.find(r => r.ingredientes.proteina.nombre.toLowerCase() === req.params.type.toLowerCase());
    
    res.json(elegirTaco || {error: "Receta no encontrada"});
});


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});