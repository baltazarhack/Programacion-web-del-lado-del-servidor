const {
    suma,
    crearUsuario,
    obtenerValor,
    obtenerNumero,
    obtenerMensaje,
    obtenerFrutas,
    obtenerColor,
    promesaExitosa,
    promesaFallida
} = require('./suma.js');

test('suma de 1 y 2 es igual a 3', () => {
    expect(suma(1, 2)).toBe(3);
});

test('10 + 10 es igual a 20', () => {
    expect(suma(10, 10)).toBe(20);
});

test('dos objetos con las mismas propiedades son iguales', () => {
    expect(crearUsuario("Roberto", 22)).toEqual({
        nombre: "Roberto",
        edad: 22
    });
});

test('el valor es nulo', () => {
    expect(obtenerValor(1)).toBeNull();
});

test('el valor es indefinido', () => {
    expect(obtenerValor(2)).toBeUndefined();
});

test('el valor es definido', () => {
    expect(obtenerValor(3)).toBeDefined();
});

test('100 es mayor que 10', () => {
    expect(obtenerNumero()).toBeGreaterThan(10);
});

test('100 es menor que 120', () => {
    expect(obtenerNumero()).toBeLessThan(120);
});

test('100 es mayor o igual a 15', () => {
    expect(obtenerNumero()).toBeGreaterThanOrEqual(15);
});

test("el email contiene 'mundo'", () => {
    expect(obtenerMensaje()).toMatch(/mundo/);
});

test("la lista tiene a 'Kelvin'", () => {
    expect(obtenerFrutas()).toContain("Roberto");
});

test("Garfield no es rojo", () => {
    expect(obtenerColor()).not.toBe("rojo");
});

test("la promesa se resolvio correctamente", () => {
    return expect(promesaExitosa()).resolves.toBe("¡Operación exitosa!");
});

test("la promesa se rechazo con un error", () => {
    return expect(promesaFallida()).rejects.toThrow("¡Operación fallida!");
});