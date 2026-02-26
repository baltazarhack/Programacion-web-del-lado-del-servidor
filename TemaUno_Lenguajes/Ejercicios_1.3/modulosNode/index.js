// Kelvin Baltazar Pino Ake
//8B-ISC


const fs = require('fs'); // Importa el módulo de sistema de archivos

fs.writeFile('archivo.txt', 'Hola desde NodeJS', (err) => {
  if (err) throw err;
  console.log('El archivo ha sido creado con éxito.');
});


  // Leer el archivo después de crearlo
  fs.readFile('archivo.txt', 'utf8', (err, data) => {
    if (err) throw err;

    console.log('Contenido del archivo:');
    console.log(data);
  });
