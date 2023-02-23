// Funcion clasica
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