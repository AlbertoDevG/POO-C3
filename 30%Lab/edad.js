class Edad {
    constructor(fechaNacimiento) {
      this._fechaNacimiento = fechaNacimiento; 
    }
  
  
    get fechaNacimiento() {
      return this._fechaNacimiento;
    }
  
    set fechaNacimiento(nuevaFecha) {
      const regex = /^\d{4}-\d{2}-\d{2}$/;
      if (regex.test(nuevaFecha)) {
        this._fechaNacimiento = nuevaFecha;
      } else {
        console.log("formato invalido, digite en formato: YYYY-MM-DD.");
      }
    }
  
    calcularEdad() {
      if (!this._fechaNacimiento) {
        console.log("Ingrese una fecha de nacimiento.");
        return;
      }
  
      const fechaActual = new Date();
      const fechaNacimiento = new Date(this._fechaNacimiento);
  
      const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
      const mesActual = fechaActual.getMonth();
      const mesNacimiento = fechaNacimiento.getMonth();
  
      if (mesActual < mesNacimiento || (mesActual === mesNacimiento && fechaActual.getDate() < fechaNacimiento.getDate())) {
        return edad - 1;
      }
      return edad;
    }
  
    mostrarEdad() {
      console.log(`Su edad es: ${this.calcularEdad()} años.`);
    }
  }
  
  
  const persona = new Edad("2005-05-23");
  persona.mostrarEdad(); 
  
  persona.fechaNacimiento = "20255-12-23"; 
  
