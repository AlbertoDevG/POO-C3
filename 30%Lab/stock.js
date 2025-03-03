class Stock{
    constructor(producto, precio, cantidad) {
        this._producto = producto;
        this._precio = precio;
        this._cantidad = cantidad;
    }

    
    aumentarStock(cantidadNueva) {
        if (this._precio > 0 && cantidadNueva > 0) {
            this._cantidad += cantidadNueva;
            console.log(`Actualizacion del stock, ahora hay: ${this._cantidad} unidades del producto: ${this._producto}.`);
        } else {
            console.log(`Ingrese un precio y cantidad validos.`);
        }
    }

   
    vender(unidadesVendidas) {
        if (unidadesVendidas > 0 && unidadesVendidas <= this._cantidad) {
            this._cantidad -= unidadesVendidas;
            let totalPago = this._precio * unidadesVendidas;
            console.log(`Se ha realizado una venta por un total de: $${totalPago}. Stock disponible: ${this._cantidad} unidades.`);
        } else {
            console.log("Venta no autorizada.");
        }
    }
}


let cliente = new Stock("Clipper", 250, 23);

cliente.aumentarStock(1); 
cliente.vender(4); 