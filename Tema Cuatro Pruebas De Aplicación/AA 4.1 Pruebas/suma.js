// a) Función para realizar una suma
function suma(a, b) {
    return a + b;
}


// b) Función que crea un objeto usuario
function crearUsuario(nombre, edad) {
    return { nombre, edad };
}


// c) Función para retornar distintos valores
function obtenerValor(opcion) {

    // retorna null
    if (opcion === 1) return null;

    // retorna undefined
    if (opcion === 2) return undefined;

    // retorna un valor definido
    return "definido";
}


// d) Función que retorna un número para pruebas
function obtenerNumero() {
    return 100;
}


// e) Función que retorna un mensaje
function obtenerMensaje() {
    return "Hola mundo";
}


// f) Función que retorna un arreglo
function obtenerFrutas() {
    return ["Luis", "Roberto", "Ariel", "Alan"];
}


// g) Función que retorna un color
function obtenerColor() {
    return "Naranja";
}


// h) Función que retorna una promesa resuelta
function promesaExitosa() {
    return Promise.resolve("¡Operación exitosa!");
}


// h) Función que retorna una promesa rechazada
function promesaFallida() {
    return Promise.reject(new Error("¡Operación fallida!"));
}


// Exportación de todas las funciones
module.exports = {
    suma,
    crearUsuario,
    obtenerValor,
    obtenerNumero,
    obtenerMensaje,
    obtenerFrutas,
    obtenerColor,
    promesaExitosa,
    promesaFallida
};