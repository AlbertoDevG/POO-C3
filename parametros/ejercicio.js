class Producto {
    constructor(id, producto, codigo, fechaIngreso, precio) {
        this.id = id;
        this.producto = producto;
        this.codigo = codigo;
        this.fechaIngreso = fechaIngreso;
        this.precio = precio;
    }
    registro(){

        const producto = {
            id: this.id,
            producto: this.producto,
            codigo: this.codigo,
            fechaIngreso: this.fechaIngreso,
            precio: {
                precioTotal: this.precio,
                precioNuevo: 220,
                precioNuevo2: 700
            }

        }
        console.log(producto);
        
        
    }

 }

 obj = new Producto ("1.", "trimmer babyliss", "3478", "2022", 370)
 obj.registro()