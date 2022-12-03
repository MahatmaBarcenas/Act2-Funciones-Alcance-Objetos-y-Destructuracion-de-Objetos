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

function imprimirNombreEnMayusculas(persona) {
	var {nombre} = persona;
	console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(Luis);
imprimirNombreEnMayusculas(Dario);

//Escribe una funcion que imprima el nombre y edad
//Hola me llamo Luis Martinez y tengo 17 años <- Salida de ejemplo

function impimirNombreYEdad(persona){
	var {nombre, apellido, edad} = persona
	console.log(`Hola me llamo ${nombre.toUpperCase()} y tengo ${edad} años`);

}

impimirNombreYEdad(Luis);
impimirNombreYEdad(Dario);

