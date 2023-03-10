// Uso del metodo map
const arregloDeNumeros = [1,2,3,4,5,6,7,8,9];

let nuevoArreglo = arregloDeNumeros.map(numero => {
  return numero * numero;
});

console.log(nuevoArreglo);

// Uso del metodo reduce
// Ej. 1
const arreglo = [10, 20, 30, 40, 50];

let resultado = arreglo.reduce((total, numero) => {
  return total + numero;
});

console.log({resultado});

// Ej. 2
const arregloStr = ['H', 'O', 'L', 'A'];

let resultadoStr = arregloStr.reduce((string, caracter) => {
  return string + '-' + caracter;
});

console.log({resultadoStr});


// Uso de metodo filter
let precios = [150, 60, 300, 20, 500, 10];

let rebajas = precios.filter(precio => {
  return precio < 100;
});

console.log(rebajas);


// Uso del metodo find
let palabra = ['Hola a todos', 'Mis deseos', 'Soy Colombiano', 'todos son programadores'];

let miPalabra = palabra.find(palabra => {
  return palabra.includes('todos');
});

console.log(miPalabra);


let oracion = 'Aqui todos son programadores';

let letra = oracion.split(' ').find(palabra => {
  return palabra.includes('mad');
});

console.log(letra);
console.log(oracion.split(' '));


let saludo = ['Hola a todos, bienvenidos'];

console.log(saludo.toString().toUpperCase().replace(/O/g, 'x').split(' '));

