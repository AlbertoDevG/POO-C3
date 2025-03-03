class Alumno{
    constructor(nombre, edad) {
        this._nombre = nombre 
        this._edad = edad 
        this._calificaciones = [] 
    }

    agregar(calificacion) { 
        if (calificacion >= 0 && calificacion <= 10) { 
            this._calificaciones.push(calificacion) 
            console.log(`La nota: ${calificacion}, fue agregada a ${this._nombre}`) 
        } else { 
            console.log("Rango invalido, rango: 0 - 10") 
        } 
    }

    calcular(){
        if (this._calificaciones.length === 0) {
            console.log(`${this._nombre} No hay calificaciones registradas`);
            return 0
        }  const suma = this._calificaciones.reduce((total, calificacion) => total 
        + calificacion, 0)  
        const promedio = suma / this._calificaciones.length 
        console.log(`${this._nombre} tiene un promedio de: ${promedio.toFixed(2)}`) 
        return promedio 
    } 

    mostrar() { 
        console.log(`Alumno: ${this._nombre} con la edad: ${this._edad} tiene las siguientes calificaciones: [${this._calificaciones.join(", ")}]`) 
    }
            
}

const estudiante = new Alumno("Daniel Perez", 19) 
estudiante.agregar(10) 
estudiante.agregar(5) 
estudiante.agregar(7) 
estudiante.calcular() 
estudiante.mostrar() 