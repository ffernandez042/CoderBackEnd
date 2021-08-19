class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = []
    }
    getFullName() {
        console.log("El usuario es: ", this.nombre, this.apellido);
    }
    addMascota(nombre) {
        this.mascotas.push(nombre);
    }
    getMascotas() {
        console.log("El usuario tiene: ", this.mascotas.length, "mascotas")
    }
    addBook(book, autor) {
        this.libros.push({ "Nombre": book, "Autor": autor })
    }
    getBooks() {
        let books = [];
        for (let i = 0; i < this.libros.length; i++) {
            books.push(this.libros[i]["Nombre"]);
        }
        console.log(books)
    }
}

let fran = new Usuario("Franco", "Fernandez")


fran.addMascota("Vito");
fran.addMascota("Bella");
fran.addMascota("Gina");
fran.addBook("Festival", "Stephen King")
fran.addBook("Festival2", "Stephen King2")

fran.getFullName();
fran.getMascotas();
fran.getBooks();