function Usuario(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [];
    this.mascotas = []

    Usuario.prototype.getFullName = function() {
        console.log("El usuario es: ", this.nombre, this.apellido);
    }
    Usuario.prototype.addMascota = function(nombre) {
        this.mascotas.push(nombre);
    }
    Usuario.prototype.getMascotas = function() {
        console.log("El usuario tiene: ", this.mascotas.length, "mascotas")
    }

    Usuario.prototype.addBook = function(book, autor) {
        this.libros.push({ "Nombre": book, "Autor": autor })
    }

    Usuario.prototype.getBooks = function() {
        let books = [];
        for (let i = 0; i < this.libros.length; i++) {
            books.push(this.libros[i]["Nombre"]);
        }
        console.log(books)
    }

}



let fran = new Usuario("Franco", "Fernandez")


fran.addMascota("Bella");
fran.addMascota("Gina");
fran.addBook("Festival", "Stephen King")
fran.addBook("Festival2", "Stephen King2")

fran.getFullName();
fran.getMascotas();
fran.getBooks();