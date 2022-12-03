var nombreMaha = "Mahatma";
var nombreJuan = "Juan";

function imprimirNombreEnMayuscula(n) {
	n = n.toUpperCase();
	console.log(n);
}


imprimirNombreEnMayuscula(nombreMaha);
imprimirNombreEnMayuscula(nombreJuan);

//Objetos

var Luis = {
	nombre: "Luis",
	apellido: "Martinez",
	edad: 17
}

var Dario = {
	nombre: "Dario",
	apellido: "Perez",
	edad: 25
}

function imprimirNombreEnMayuscula1(persona) {
	var nombre = persona.nombre.toUpperCase();
	console.log(nombre);
}

imprimirNombreEnMayuscula1(Luis);
imprimirNombreEnMayuscula1(Dario)
imprimirNombreEnMayuscula1({nombre: "Pepito"})