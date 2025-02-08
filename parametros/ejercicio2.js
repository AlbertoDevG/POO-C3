class Producto {
    constructor(id, producto, codigo, fechaIngreso, precio) {
        this.id = id;
        this.producto = producto;
        this.codigo = codigo;
        this.fechaIngreso = fechaIngreso;
        this.precio = precio;
    }
    registro(precio=this.precio){
       
        const aumento = precio * 0.20
        const precioAumentado = precio + aumento

        const precioReducido = precio - aumento

        const producto = {
            id: this.id,
            producto: this.producto,
            codigo: this.codigo,
            fechaIngreso: this.fechaIngreso,
            precio: {
                precioTotal: this.precio,
                Precio_aumentado: precioAumentado,
                Precio_Reducido: precioReducido
            }

        }
        console.log(producto);
        
        
    }

 }

 obj = new Producto ("1.", "trimmer babyliss", "3478", "2022", 370)
 obj.registro()