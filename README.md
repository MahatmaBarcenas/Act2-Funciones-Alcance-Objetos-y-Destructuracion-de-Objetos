# Act2-Funciones-Alcance-Objetos-y-Destructuracion-de-Objetos

## Explicacion de Lineas De Codigo

### Funcion.js

 Se definen 2 variables una tipo string llamda nombre y la otra variable de tipo int llamada edad, cuyos valores son "Mahatma" y 17

```javascript
  var nombre = "Mahatma", edad = "17";
  ```
  Aqui se declara una funcion la cual se llamda imprimirEdad, tiene 2 parametros los cuales son "n" y "e"
```javascript
  function imprimirEdad(n, e) {
  ```
  Esto es un comentario
```javascript
  // Instrucciones
  ```
  Aqui se imprimira un mensaje el cual mostrara los datos que obtengan los parametros
   ```javascript
  console.log(`${n} tiene ${e} años`);
  ```
  Aqui se cierra la funcion
  ```javascript
  }
  ```
  Esto es un comentario
  ```javascript
  //Ejecutando la funcion
  ```
  Aqui se hace que la funcion se ejecute y los parametros obtengan los valores de las variables nombre y edad
  ```javascript
  imprimirEdad(nombre, edad);
  ```
  Aqui se hace que la funcion se ejecute y los parametros obtengan los valores "Vicky" y 22
  ```javascript
  imprimirEdad("Vicky", 22);
  ```
  Aqui se hace que la funcion se ejecute y los parametros obtengan los valores "Justin" y 18
  ```javascript
  imprimirEdad("Justin", 18);
  ```
  Aqui se hace que la funcion se ejecute y los parametros obtengan los valores 25 y "Carlos"
  ```javascript
  imprimirEdad(25, "Carlos");
  ```
  Aqui se hace que la funcion se ejecute y los parametros obtengan el valor "Alberto" haciendo que el otro parametro no es definido
  ```javascript
  imprimirEdad("Alberto");
  ```
  Aqui se hace que la funcion se ejecute y los parametros no esten definidos
   ```javascript
  imprimirEdad();
  ```
  
### Alacance.js
 Se definen 2 variables una tipo string llamda nombre y la otra variable de tipo int llamada edad, cuyos valores son "Mahatma" y 17

 ```javascript
  var nombre = "Mahatma", edad = 17;
  ```
 Estos es un comentario
 ```javascript
 //funciones en mayusculas
  ```
  Se declara una funcion llamada imprimirNombreEnMayuscula, no tiene parametros 
  ```javascript
 function imprimirNombreEnMayuscula() {
  ```
  Se define una variable llamada nombre que modifica a la variable nombre haciendo los caracteres en mayuscula
  ```javascript
 nombre = nombre.toUpperCase();
  ```
  Muestra un mensaje el cual dira "MAHATMA"
  ```javascript
 console.log(nombre);
  ```
  Se cierra la funcion
  ```javascript
 }
  ```
  Se ejecuta la funcion imprimirNombreEnMayusculas
   ```javascript
 function imprimirNombreEnMayuscula() {
  ```
  Se declara una funcion llamada imprimirNombreEnMayusculas1, su parametro es n
   ```javascript
 function imprimirNombreEnMayuscula1(n) {
 ```
 Se declara n como variable que modifica a la c variable n poniendola en mayuculas
  ```javascript
	n = n.toUpperCase();
 ```
 Se un mostrara mensaje el cual dira "MAHATMA" 
 ```javascript
	console.log(n);
 ```
 Se cierra la funcion
  ```javascript
}
```
Se ejecuta la funcion llamada imprimirNombreEnMayusculas
 ```javascript
imprimirNombreEnMayuscula1(nombre);
```
Esto es un comentario
 ```javascript
//Crear una funcion que escriba nombre en minusculas
```
Esto es un comentario
 ```javascript
//Funciones en minusculas
```
Se declara una funcion llamada imprimirNombreEnMinusculas
 ```javascript
function imprimirNombreEnMinisculas() {
```
Se declara un varible llamada nombre, la cual modifa nombre haciendo que se escriba en minusculas
 ```javascript
	nombre = nombre.toLowerCase();
 ```
 Se muestra un mensaje el cual dira "mahatma"
  ```javascript
	console.log(nombre);
 ```
 Se cierra la funcion imprimirNombreEnMinusculas
  ```javascript
}
```
Se ejecuta la funcion llamada imprimirNombreEnMinusculas
 ```javascript
imprimirNombreEnMinisculas();
```
Se declara una funcion llamada imprimirNombreEnMinusculas1
 ```javascript
function imprimirNombreEnMinusculas1(n){
```
 ```javascript
	n = n.toLowerCase();
 ```
  ```javascript
	console.log(n);
 ```
  ```javascript
}
```
 ```javascript
imprimirNombreEnMinusculas1(nombre);
```
### Objetos.js
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

### DestructuracionObjetos.js

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
