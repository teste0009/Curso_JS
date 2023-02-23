'use strict';


// principio de unica responsabilidad
// SOLID

// function saludar(nombre) {
//   console.log('Hola como estas ' + nombre);
//   return;
// }

// let resultado = saludar('Enzo');
// console.log(resultado);


const saludar = function (nombre) {
  console.log(arguments);
  return 'Hola como estas ' + arguments[0]; // nombre
}

let resultado = saludar('Enzo', 'Gomez', 'Música', 'Rojo y Blanco');
console.log(resultado);

// Arrow function
const saludarFlecha = (nombre) => 'Hola como estas ' + nombre;

let resultadoFlecha = saludarFlecha('Enzo', 'Gomez', 'Música', 'Rojo y Blanco');
console.log(resultado);

const sumar = (a, b) => a + b;
console.log(sumar(100, 48));

const getAleatorio = () => Math.random();
console.log(getAleatorio());

let frutas = ['fresa', 'mango', 'banano', 'naranja', 'papaya'];

// Ejem 1
// frutas.forEach(recorrerFruta);

function recorrerFruta(fruta, index) {
  console.log(fruta, index);
}

// Ejem 2
// frutas.forEach((fruta, index) => {
//     console.log(fruta, index);
// });

// Funcion callback
function for_each(callback) {
    let elemento = 'Fresa';
    let index = 0;
    callback(elemento, index);
    console.log(callback);
    console.log(recorrerFruta);
}

for_each(recorrerFruta);