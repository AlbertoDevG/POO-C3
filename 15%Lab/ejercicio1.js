const volador = {
  volar() {
    return `${this.nombre} esta volando`;
  },
};

const Nadador = {
    nadar() {
      return `${this.nombre} esta nadando`;
    },
  };

class animal {
    constructor(nombre) {
        this.nombre = nombre
    }
    comer(){
        return `${this.nombre} esta comiendo`
    }
}

class pato extends animal {
    constructor(nombre) {
        super(nombre)
    }
}

Object.assign(pato.prototype, volador, Nadador);

const mipato = new pato("Donald")
console.log(mipato.comer());
console.log(mipato.volar());
console.log(mipato.nadar());



