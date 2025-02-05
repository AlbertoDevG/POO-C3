class Loteria {
    constructor(numero, precio) {
        this._numero = numero;
        this._precio = precio;
    }

    probarSuerte(){
        const numAleatorio = Math.floor(Math.random() * 100);
        console.log(`Numero seleccionado: ${this._numero}`);
        console.log(`Numero aleatorio: ${numAleatorio}`);

        if (this._numero === numAleatorio) {
            const gordo = this._precio * 20;
            console.log(`¡Felicidades! le pegaste al gordo, tu premio es de: $${gordo}.`);
        } else {
            console.log("¡Lo sentimos!, no le pegaste al gordo, intentalo de nuevo.");
        }
    }
}

const persona1 = new Loteria(47, 20);   
persona1.probarSuerte();
