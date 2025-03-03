class Empleados {
    constructor(nombre, puesto, salario) {
        this._nombre = nombre;
        this._puesto = puesto;
        this._salario = salario;
    }
    get salario() {
        return this._salario;
    }

    calcular(){
        const salarioAnual = this._salario * 12;
        console.log(`El salario anual del empleado ${this._nombre}, es de: $${salarioAnual}`);
        return salarioAnual;
    }
    aumentarSalario(porcentaje){
        if (porcentaje > 0) {
            const aumento = this._salario * (porcentaje / 100);
            this._salario += aumento;
            console.log(`El empleado ${this._nombre}, ha recibido un aumento de un ${porcentaje}%. Nuevo salario: $${this._salario.toFixed(2)}`);

            
        } else {
            console.log("Digite un aumento valido.");
            
        }
    }
}

const empleado = new Empleados("Alberto García", "Barbero", 1000); 
 
empleado.calcular() 
empleado.aumentarSalario(20) 
empleado.calcular()