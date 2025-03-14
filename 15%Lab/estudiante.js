const Programacion = {
    Programar() {
      return `al estudiante ${this.nombre} se le ha asignado la clase de Programacion`;
    },
  };

  const Logica = {
    LogicaP() {
      return `al estudiante ${this.nombre} se le ha asignado la clase de Logica`;
    },
  };

  class estudiante {
    constructor(nombre) {
        this.nombre = nombre
    }
    matricularse(){
        return `Hola, me llamo ${this.nombre} y me he matriculado en la Univo`
    }
  }

  class matricula extends estudiante {
    constructor(nombre) {
        super(nombre)
    }
  }

  Object.assign(matricula.prototype, Programacion, Logica)
  const miEstudiante = new matricula ("Daniel")
  console.log(miEstudiante.matricularse());
  console.log(miEstudiante.Programar());
  console.log(miEstudiante.LogicaP());

  
 // consulta extends paciente
  
  