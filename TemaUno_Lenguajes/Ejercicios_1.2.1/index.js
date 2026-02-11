//ejercicios  1.2.1 Sintaxis basica de nodeJS
//Kelvin Baltazar Pino Ake 

console.log("===== ejercicio C ====");
var palabra = "que onda";
var decimal = 11.1;
var variable = 1;
var nulo = null;
var constante = "z=3";

console.log(palabra);


console.log("===== ejercicio D ====");
function polinomioSeg(a, x) {
  let b = 2;
  let c = 1;

  let resultado = (a * x * x) + (b * x) + c;
  console.log("resultado es:", resultado);
}

polinomioSeg(3, 2);




console.log("===== ejercicio E ====");
const enMinusculas = function (txt) {
  console.log(txt.toLowerCase());
};
enMinusculas("NO HAY CLASE");



console.log("===== ejercicio F ====");
function imprimir() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}
imprimir();


console.log("===== ejercicio G ====");
const aula = {
  nombre: "Aula J4",
  capacidad: 25,
  descripcion: function () {
    console.log(
      "El " + this.nombre + " tiene capacidad para " + this.capacidad + " alumnos."
    );
  }
};
aula.descripcion();


console.log("===== ejercicio H ====");
const persona = {
  nombre: "Cazador",
  edad: 20,
  descripcion: function () {
    console.log("Soy " + this.nombre + " y tengo " + this.edad + " años.");
  }
};
persona.descripcion();



console.log("===== ejercicio J ====");
function operacionAsincronica(callback) {
  console.log("Iniciando operación...");

  setTimeout(() => {
    const resultado = "Operación completada con éxito";
    callback(resultado);
  }, 2000); 
}
operacionAsincronica(function(respuesta) {
  console.log(respuesta);
});


console.log("===== ejercicio K ====");
try {
  let cadena = "123a";
  let numero = Number(cadena);

  if (isNaN(numero)) {
    throw new Error("La cadena no se puede convertir a número");
  }

  console.log("Número convertido:", numero);
} catch (error) {
  console.error("Error:", error.message);
}





