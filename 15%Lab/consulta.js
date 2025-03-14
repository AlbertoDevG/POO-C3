const revision = {
    Diagnostico() {
      return `${this.nombre} tiene alergia en la piel`;
    },
  };

  const curacion = {
    curar() {
      return `ha ${this.nombre} se le a asignado un tratamiento`;
    },
  };

  const inyeccion = {
    vacunar() {
      return `${this.nombre} se le ha inyectado medicina como tratamiento`;
    },
  };

  class Paciente {
    constructor(nombre) {
        this.nombre = nombre
    }
  }

  class consulta extends Paciente {
    constructor(nombre) {
        super(nombre)
    }
  }

  Object.assign(consulta.prototype, revision, curacion, inyeccion);
  const miPacienteCanino = new consulta("Pirata")
console.log(miPacienteCanino.Diagnostico());
console.log(miPacienteCanino.curar());
console.log(miPacienteCanino.vacunar());


