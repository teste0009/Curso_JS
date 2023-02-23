'use strict';

let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];

// const juegos = ...

// Restringe las modificaciones a los elementos del arreglo
// Object.freeze(juegos);

console.log({ juegos });

let primero = juegos[0];
let ultimo = juegos[ juegos.length - 1 ];

console.log(primero, ultimo);

// Recorre el arreglo
juegos.forEach((elemento, index, arr) => {
    console.log(elemento, typeof elemento, arr);
});

// Añadir un elemento al final
let nuevaLongitud = juegos.push('F-Zero');

console.log(juegos);
console.log({ nuevaLongitud });
console.log({ 'nuevaLongitud': juegos.length })
console.log('-------------------------------------------');

// Añadir un elemento al inicio
nuevaLongitud = juegos.unshift('Fire Emblem');

console.log(juegos);
console.log({ nuevaLongitud });
console.log('-------------------------------------------');

// Borrar un elemento del final
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado });
console.log('-------------------------------------------');

// Eliminar un elemento del array
let pos = 2;
let juegosBorrados = juegos.splice(pos, 2);
console.log({ juegosBorrados });
console.log(juegos);

// Busca un elemento y devuelve el id en el arreglo
let indexEncontrado = juegos.indexOf('Zelda');
console.log({ indexEncontrado });


