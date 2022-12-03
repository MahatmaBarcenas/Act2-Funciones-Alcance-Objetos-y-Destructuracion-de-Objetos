var nombre = "Mahatma", edad = 17;

//funciones en mayusculas

function imprimirNombreEnMayuscula() {
	nombre = nombre.toUpperCase();
	console.log(nombre);
}
imprimirNombreEnMayuscula();

function imprimirNombreEnMayuscula1(n) {
	n = n.toUpperCase();
	console.log(n);
}


imprimirNombreEnMayuscula1(nombre);

//Crear una funcion que escriba nombre en minusculas
//Funciones en minusculas

function imprimirNombreEnMinisculas() {
	nombre = nombre.toLowerCase();
	console.log(nombre);
}

imprimirNombreEnMinisculas();

function imprimirNombreEnMinusculas1(n){
	n = n.toLowerCase();
	console.log(n);
}

imprimirNombreEnMinusculas1(nombre);