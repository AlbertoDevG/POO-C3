class Biblioteca {
    constructor(titulo,autor,anios) {
        this._titulo = titulo;
        this._autor = autor;
        this._anios = anios;
        
    }

    agregarlibro(){
        if (!this._titulo || !this._autor || !this._anios) {
            console.log("Escriba todos los campos solicitados.");
            
        } else {
           console.log(`"${this._titulo}" agregado correctamente.`);
           libros.push(this);         
        }
    }
    
    mostrarInfo(){
        switch (this._titulo) {
            case "Los 3 mosqueteros":
                console.log(`Similitud con: ${this._titulo} , autor: ${this._autor}, año de publicacion: ${this._anios}`);
                break;
            case "Viaje al centro de la tierra":
                console.log(`Similitud con: ${this._titulo} , autor: ${this._autor}, año de publicacion: ${this._anios}`);
                break;
            default:
                console.log("Lo sentimos, el libro que esta buscando no esta disponible."); 
                break;
        }
    }
    

}

const libros = [];

const libro1 = new Biblioteca("Viaje al centro de la tierra", "Julio Verne", 1864);
const libro2 = new Biblioteca("Cien años de soledad", "Gabriel García Marquez", 1967);


libro1.agregarlibro();
libro2.agregarlibro();

libro1.mostrarInfo();
libro2.mostrarInfo();

console.log("\nLibros disponibles:");
libros.forEach(libro => {
    console.log(`Título: ${libro._titulo}, Autor: ${libro._autor}, Año: ${libro._anios}`);
});