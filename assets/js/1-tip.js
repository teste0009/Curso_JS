// TIP 1: Funcion clasica
// function crearPersona(nombre, apellido) {
//     return {
//         nombre: nombre,
//         apellido: apellido
//     }
// }

// TIP 1: en una arrow function, para retornar el objeto se cierra entre parentesis el mismo
const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona('Peter', 'Parker');
console.log(persona);


// TIP 2: Destructurar argumentos
const imprimeArgumentos = (nombre, ...argumentos) => {
  const [apellido, color, anio, esReal, saludo] = argumentos;
  console.log('argumentos: ', apellido, color, anio, esReal, saludo);
}

imprimeArgumentos('Gonzalez', 'Nicolas', 'Rojo', 2023, true, 'Hola');


const personaje = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  edad: 40,
  // vivo: false,
};

// Destructurar Objeto
const imprimeObjeto = (objeto) => {
  const {
    nombre: miPrimerNombre,
    codeName,
    edad,
    vivo: estaVivo = true,
  } = objeto;

  console.log('objeto:', miPrimerNombre, codeName, edad, estaVivo);
}

imprimeObjeto(personaje);
