class Persona {
  constructor(id, nombre, telefono, genero, departamento) {
    this._id = id;
    this._nombre = nombre;
    this._telefono = telefono;
    this._genero = genero;
    this._departamento = departamento;
  }
  get id() {
    return this._id;
  }

  set id(nuevoId) {
    this._id = nuevoId;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    if (nuevoNombre.length > 20) {
      console.log("Lo sentimos, el nombre no pudo ser modificado.");
    } else {
      this._nombre = nuevoNombre;
    }
  }

  get telefono() {
    return this._telefono;
  }

  set telefono(nuevoTelefono) {
    if (nuevoTelefono.length > 8) {
      console.log("Lo sentimos, el numero de telefono no pudo ser modificado.");
    } else {
      this._telefono = nuevoTelefono;
    }
  }

  get genero() {
    return this._genero;
  }

  set genero(nuevoGenero) {
    if (nuevoGenero.length === 1) {
      const generoEnMayusculas = nuevoGenero.toUpperCase();
      if (generoEnMayusculas === "F" || generoEnMayusculas === "M") {
        this._genero = nuevoGenero;
      } else {
        console.log("Género inválido. Debe ser 'F' o 'M'.");
      }
    } else {
      console.log("Género inválido. Debe ser un solo carácter.");
    }
  }

  get generoCompleto() {
    if (this._genero === "F") {
      return "Femenino";
    } else if (this._genero === "M") {
      return "Masculino";
    } else {
      return "Género no definido"; // Manejo de casos no válidos
    }
  }

  get departamento() {
    return this._departamento;
  }

  set departamento(nuevoDepartamento) {
    if (nuevoDepartamento === "Ventas" | nuevoDepartamento === "RRHH" | nuevoDepartamento === "Administración") {
        this._departamento = nuevoDepartamento; 
    }else{
        console.log("Lo sentimos, el departamento no pudo ser modificado.");
        
    }
    
  }

  mostrarInformacion() {
    console.log(`ID: ${this._id}`);
    console.log(`Nombre: ${this._nombre}`);
    console.log(`Teléfono: ${this._telefono}`);
    console.log(`Género: ${this.generoCompleto}`);
    console.log(`Departamento: ${this._departamento}`);
  }
}
const persona1 = new Persona(
  1,
  "Juan Pérez",
  "12345678",
  "M",
  "Ventas"
);
persona1.mostrarInformacion();
persona1.id = 2;
persona1.nombre = "Ana Gómez";
persona1.telefono = "87654321";
persona1.genero = "F";
persona1.departamento = "RRHH";
persona1.mostrarInformacion();
