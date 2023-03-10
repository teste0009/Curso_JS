
class Persona {
  nombre = '';
  edad = '';
  frase  = '';

  constructor(nombre, edad, frase) {
    this.nombre = nombre;
    this.edad = edad;
    this.frase = frase;
  }
};

let spiderman = new Persona('Peter Parker', 15, 'Soy tu vecino amigable.');
let ironman = new Persona('Tony Stark', 42, 'Yo soy Ironman')

console.log(spiderman);
console.log(ironman);