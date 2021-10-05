# Unit Testing con Jest en React

Crear la carpeta del proyecto.
* `mkdir jsbase`

Ingresar a la carpeta creada.
* `cd jsbase`

Inicializar git.
* `git init`

Para crear nuestro archivo package.json.
* `npm init o yarn init`

## Preparación del entorno con Jest
Escribimos en la terminal el siguiente comando:
* `npm install -D jest`

> `-D es lo mismo que --save-dev.`
>
> Ambos flags guardan la dependencia como una de desarrollo.

Es un estándar crear la carpeta de pruebas, pues como desarrolladores la utilizamos para poner nuestras pruebas e identificarla más rápido y saber que esa no es una carpeta random, sino que es una carpeta dónde van a vivir nuestras pruebas:

> `src/__test__`

Creación del archivo `global.test.js` donde van a vivir las pruebas globales.

**Nota:** Cuando salga un error de **@types/jest** es necesario instalar la siguiente librería:

> `npm i @types/jest`

Para evitar errores tenemos que instalar jest de forma global y poder ejecutar **jest --coverage**.

> `npm i -g jest`

También se puede ejecutar sin instalar globalmente ejecutando los comandos:

> `yarn jest src/__test__/index.test.js`
>
> or
>
> `npx jest src/__test__/index.test.js`

También se puede correr de la siguiente manera:

> `npm test index.test.js`

Si queremos saber que tanto estamos probando y ver el reporte podemos correr el siguiente comando:

> `jest --coverage`

Para visualizar el reporte en el navegador es necesario abrir el siguiente archivo:

> coverage/icov-report/index.html