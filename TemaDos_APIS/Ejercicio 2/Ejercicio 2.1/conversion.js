const objetoJavaScript = {
    nombre: "Tacos de pollo",
    ingredientes: {
        proteina: "Pollo",
        salsa: "Salsa Verde"
    }
};




const jsonString = JSON.stringify(objetoJavaScript);

console.log(jsonString);