class Tienda {
    constructor(nombre, precio, stock) {
        this._nombre = nombre;
        this._precio = precio;
        this._stock = stock;
    }

    agregarStock(cantidad){
        if (cantidad > 0) {
            this._stock += cantidad;
            console.log(`Nuevo stock agregado: ${cantidad} unidades de ${this._nombre}. Stock actual: ${this._stock}`);
            
        } else {
            console.log("Lo sentimos. ingrese una cantidad mayor a 0.");
        }
    }

    venderP(cantidad){
        if (cantidad > 0 && cantidad <= this._stock) {
            this._stock -=cantidad;
            console.log(`se realizo una venta de ${cantidad} unidades del producto ${this._nombre}. Stock actual: ${this._stock}`) 
        } else if  (cantidad > this._stock) {
            console.log(`stock induficiente del producto: ${this._nombre}. Stock disponible: ${this._stock}`) 
        
        } else {
            console.log("La cantidad digitada es invalida. ");  
        }
    }
    mostrar() { 
        console.log(`Producto: ${this._nombre}  Precio: $${this._precio}  Stock: ${this._stock}`) 
    }
}

const producto1 = new Tienda("Tablet", 1500, 25); 
 
producto1.mostrar() 
producto1.agregarStock(5)    
producto1.venderP(3)           
producto1.mostrar() 