class Usuario {
    constructor(nombre, peso, altura ) {
        this._nombre = nombre;
        this._peso = peso;
        this._altura = altura;
    }

    IMC() {
        const calcularmasa = this._peso / (this._altura * this._altura)
        console.log(`${this._nombre} tiene un indice de masa muscular del: ${calcularmasa.toFixed(2)}`);
    }
}

const persona1 = new Usuario("Alberto", 60, 1.65);
persona1.IMC();