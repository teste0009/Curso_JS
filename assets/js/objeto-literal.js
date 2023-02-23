"use strict";

let obj = {};

const personaje = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  vivo: false,
  edad: 40,
  coord: {
    lat: 34.034,
    lng: -118.7,
  },
  traje: ['Mark I', 'Mark V', 'Hulkbuster'],
  'ultima-pelicula': 'Infinity War',
  password: 'dfjkdsgdskglsd===',
  saludar: function() {
    return 'Hola como estas!';
  }
};

// Object.freeze(personaje);
// Object.freeze(personaje.traje);

console.log({ personaje });

delete personaje.password;

console.log({ personaje });

console.log('Nombre:', personaje.nombre);
console.log('Cantidad de trajes:', personaje.traje.length);
console.log('Ultimo traje:', personaje["traje"][personaje.traje.length - 1]);
console.log('Ultimo traje:', personaje["traje"][personaje.traje.length - 1]);

console.log(personaje['ultima-pelicula']);
console.log(personaje.hasOwnProperty('ultima-pelicula'));

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// Permite agregar una propiedad de forma dinamica
personaje.dinero = 1000000000;
console.log(personaje);

const propiedad = Object.getOwnPropertyNames(personaje);
console.log(propiedad);

const valores = Object.values(personaje);
console.log(valores);

// definicion de objeto instanciando Object
const obj1 = new Object();
obj1.name = 'Pepe';
obj1.lastName = 'Perez';

console.log(obj1);

// verificar si el objeto personaje tiene una propiedad llamada 'edad'
const tieneEdad = Object.prototype.hasOwnProperty.call(personaje, 'edad');

console.log({ tieneEdad });

console.log(personaje);
console.log(personaje.saludar());


// let nombrePersonaje = personaje.nombre;

// let nombreDeFrutas = ['fresa', 'cereza', 'manzana', 'banano', 'piña', 'uva' ];

// let fecha = '21/01/2000';