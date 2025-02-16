
class persona {
    constructor(nombre, edad, dui) {
        this._nombre = nombre
        this._edad = edad
        this._dui = dui
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

    get dui(){
    return this._dui
    }

    set dui(ndui){
        const nduiCadena = String(ndui)
        if (nduiCadena.length == 9 && !isNaN(nduiCadena)) {
            this._dui = ndui
            console.log("Datos actualizados con exito.");
          } else {
            console.log("El número de dui no es válido. Por favor, verifica las condiciones.");
          }
    }




    mostrar(){
        let mensaje = `mi nombre es: ${this._nombre}, y tengo ${this._edad} años y mi numero de dui es: ${this._dui}.`
        console.log(mensaje);
    }
}

let obj = new persona(`Danny`, 19, 123456789)
obj.mostrar()
obj.nombre = `Flavia`
obj.edad = 21
obj.dui = 98765432
obj.mostrar()