class Multas {
    constructor(nombre, infraccion) {
        this._nombre = nombre;
        this._infraccion = infraccion;
    }

    llegartarde() {
        console.log(`${this._nombre} ha cometido una falta: ${this._infraccion}, debera cancelar $1`);
        return;
    }

    caminarHC() {
        console.log(`${this._nombre} ha cometido una falta: ${this._infraccion}, debera cancelar $3`);
        return;
    }

    vestirinapropiado() {
        console.log(`${this._nombre} ha cometido una falta: ${this._infraccion}, debera cancelar $5`);
        return;
    }

    usoindebido() {
        console.log(`${this._nombre} ha cometido una falta: ${this._infraccion}, debera cancelar $10`);
        return;
    }
}

const persona1 = new Multas("Flavia", "llegada tardia");
persona1.llegartarde()

const persona2 = new Multas("Daniel", "caminar por los pasillos en horas de clase");
persona2.caminarHC()

const persona3 = new Multas("keyri", "no andar vestimenta apropiada");
persona3.vestirinapropiado()

const persona4 = new Multas("Karla", "no hacer uso adecuado de las instalaciones");
persona4.usoindebido()