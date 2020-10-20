//Probar string
const text = "Hola mundo";

test('Debe contener un texto', () => {
    expect(text).toMatch(/mundo/);
});

//Probar array
const fruits = ['manzana', 'melon', 'banana'];

test('Tenemos una banana?', () => {
    expect(fruits).toContain('banana');
});

//Probar números
test('Mayor que', () => {
    expect(10).toBeGreaterThan(9);
});

//Probar un Booleano
test('Verdadero', () => {
    expect(true).toBeTruthy();
});

//Probar callback
const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""))
};

test('Probar un Callback', () => {
    reverseString('Hola', (str) => {
        expect(str).toBe('aloH');
    })
});
