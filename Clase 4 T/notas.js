class Nota {
    constructor(titulo, detalle) {
        this._titulo = titulo;
        this._detalle = detalle;
    }

    contarP(){
        const cuentapalabras = this._detalle.trim().split(/\s+/).length;
        console.log(`${this._titulo} cuenta con ${cuentapalabras} palabras.`);
        
    }
}

const nota1 = new Nota("Alarma", "poner la alarma a las 7am");
const nota2 = new Nota("Gatos", "Bañar a los gatos el fin de semana");

nota1.contarP();
nota2.contarP();
