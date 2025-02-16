class persona {
    constructor(nombre, edad) {
        this._nombre = nombre
        this._edad = edad
    }
    get nombre(){
        return this._nombre
    }


    set nombre(nuevonombre){
    this._nombre = nuevonombre
    }

    get edad(){
        return this._edad
    }

    set edad(nuevaedad){
        
        if (nuevaedad >= 18) {
            this._edad = nuevaedad
            console.log("Usted es mayor de edad");
        }else{
            console.log("Usted no es mayor de edad");
        }
    }



    mostrar(){
        let mensaje = `mi nombre es: ${this._nombre}, y tengo ${this._edad} años.`
        console.log(mensaje);
    }
}

let obj = new persona(`Danny`, 19)
obj.mostrar()
obj.nombre = `Flavia`
obj.edad = 16
obj.mostrar()


