
const eng = {
  nombre: 'Enzo',
  edad: 53,
  imprimir() {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`)
  }
}

const mary = {
  nombre: 'Mary',
  edad: 20,
  imprimir() {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`)
  }
}

eng.imprimir();
mary.imprimir();

function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.imprimir = () => {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`)
  };
}

const juan = new Persona('Juan', 25);
const juanita = new Persona('Juanita', 23);

juan.imprimir();
juanita.imprimir();