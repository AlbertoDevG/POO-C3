const volador = {
    volar() {
      return `${this.nombre} esta volando`;
    },
  };

  const invisible = {
    serInvisible() {
      return `${this.nombre} se ha vuelto invisible`;
    },
  };

  const SuperFuerza ={
    usarSuperFuerza(){
        return `${this.nombre} esta usando superfuerza`
    }
  }

  class Superhéroe {
    constructor(nombre) {
        this.nombre = nombre
    }
    presentarse(){
        return `Hola, soy: ${this.nombre}, un superhéroe`
    }
  }

  class superhéroePoderoso extends Superhéroe {
    constructor(nombre) {
        super(nombre)
    }
  }

  Object.assign(superhéroePoderoso.prototype, volador, invisible, SuperFuerza)
  const miSuperhéroe = new superhéroePoderoso("Superman")
  console.log(miSuperhéroe.presentarse());
  console.log(miSuperhéroe.volar());
  console.log(miSuperhéroe.serInvisible());
  console.log(miSuperhéroe.usarSuperFuerza());
  
  

  
  