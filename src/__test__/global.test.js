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

//Promesas
const reverseString2 = str => {
    return new Promise((resolve, reject) => {
        if (!str) {
            reject(Error('Error'))
        }
        resolve(str.split("").reverse().join(""))
    });
};

test('Probar una promesa', () => {
    return reverseString2('Hola')
        .then(string => {
            expect(string).toBe('aloH');
        })
});

//Probando promesas await
test('Probar async/await', async () => {
    const string = await reverseString2('hola');
    expect(string).toBe('aloh');
});

//Correr algo antes y después de nuestras pruebas
// afterEach(() => console.log('Despues de cada prueba'));
// afterAll(() => console.log('Despues de todas las pruebas'));

// beforeEach(() => console.log('Antes de cada prueba'));
// beforeAll(() => console.log('Antes de todas las pruebas'));