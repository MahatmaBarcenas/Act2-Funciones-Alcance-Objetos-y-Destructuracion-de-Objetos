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
Se declara la variable n para después ser modificada haciendo que se escriba en minúscula
```javascript
	n = n.toLowerCase();
 ```
Se muestra un mensaje el cual dirá "mahatma"
  ```javascript
	console.log(n);
 ```
Se cierra la función imprimirNombreEnMinusculas1(n)
  ```javascript
}
```
Se ejuctara la función imprimirNombreEnMinusculas1(n)
 ```javascript
imprimirNombreEnMinusculas1(nombre);
```
### Objetos.js
Se declara una variable de string, llamada nombreMaha, cuyo valor es "Mahatma"
```javascript 
var nombreMaha = "Mahatma";
```
Se declara una variable de string, llamada nombre Juan, cuyo valor es "Juan"
```javascript
var nombreJuan = "Juan";
```
Se declara la función imprimirNombreEnMayuscula, tiene parámetros el cual es n
```javascript 
function imprimirNombreEnMayuscula(n)  {
```
Se declara la variable n para después ser modificada haciendo que se escriba en minúscula
```javascript
	n = n.toUpperCase();
```
Se muestra un mensaje el cual dirá "MAHATMA"
```javascript
	console.log(n);
```
Se cierra la función imprimirNombreEnMayuscula
```javascript
}
```
Se ejecuta la función imprimirNombreEnMayuscula pero con la variable nombrezMaha
```javascript 
imprimirNombreEnMayuscula(nombreMaha);
```
Se ejecuta la función imprimirNombreEnMayuscula pero con la variable nombrezJuan
```javascript 
imprimirNombreEnMayuscula(nombreJuan);
```
Esto es un comentario
```javascript 
//Objetos
```
Se declara una variable llamada luis, cual tiene varios valores porque lo que es un objeto 
```javascript 
var Luis = {
```
Se define uno de lo valores del objeto, este se llama nombre y su valor es "Luis"
```javascript
nombre: "Luis",
```
Se defiende uno de los valores del objeto, este se llama apellido y su valor es "Martinez"
```javascript 
apellido: "Martinez",
```
Se defiende uno de lo valores del objeto, este se llama edad y su valor es 17
```javascript
edad: 17
```
Se cierra el objeto
```javascript 
}
```
Se declara una variable llamada Dario, cual tiene varios valores porque lo que es un objeto
```javascript
var Dario = {
```
Se defiende uno de lo valores del objeto, este se llama nombre y su valor es "Dario"
```javascript
nombre: "Dario",
```
Se defiende uno de lo valores del objeto, este se llama apellido y su valor es "Perez"
```javascript
apellido: "Perez",
```
Se defiende uno de lo valores del objeto, este se llama edad y su valor es 25
```javascript
edad: 25
```
Se cierra el objeto	
```javascript
}
```
Se declara la funcion imprimirNombreEnMayusculas1, tiene un parametro es cual persona
```javascript
function imprimirNombreEnMayuscula1(persona) {
```
Se define una variable llamada nombre, la cual extrae los variables nombres de objetos
```javascript
var nombre = persona.nombre.toUpperCase();
```
Se muestra un mensaje en consola el cual dira "LUIS" y/o "DARIO"	
```javascript
console.log(nombre);
```
Se cierra la funcion llamada imprimirNombreEnMayusculas1
```javascript
}
```
Se ejecuta la funcion imprimirNombreEnMayusculas1 con el los valores del objeto Luis
```javascript
imprimirNombreEnMayuscula1(Luis);
```
Se ejecuta la funcion imprimirNombreEnMayusculas1 con el los valores del objeto Dario
```javascript
imprimirNombreEnMayuscula1(Dario)
```
Se ejecuta la funcion imprimirNombreEnMayusculas1 con el dato nombre del objeto indefindo
```javascript
imprimirNombreEnMayuscula1({nombre: "Pepito"})
```

### DestructuracionObjetos.js

Se declara una variable llamada luis, cual tiene varios valores porque lo que es un objeto 
```javascript 
var Luis = {
```
Se define uno de lo valores del objeto, este se llama nombre y su valor es "Luis"
```javascript
nombre: "Luis",
```
Se defiende uno de los valores del objeto, este se llama apellido y su valor es "Martinez"
```javascript 
apellido: "Martinez",
```
Se defiende uno de lo valores del objeto, este se llama edad y su valor es 17
```javascript
edad: 17
```
Se cierra el objeto
```javascript 
}
```
Se declara una variable llamada Dario, cual tiene varios valores porque lo que es un objeto
```javascript
var Dario = {
```
Se defiende uno de lo valores del objeto, este se llama nombre y su valor es "Dario"
```javascript
nombre: "Dario",
```
Se defiende uno de lo valores del objeto, este se llama apellido y su valor es "Perez"
```javascript
apellido: "Perez",
```
Se defiende uno de lo valores del objeto, este se llama edad y su valor es 25
```javascript
edad: 25
```
Se cierra el objeto	
```javascript
}
```

Se declara la funcion imprimirNombreEnMayusculas, tiene un parametro es cual persona
```javascript
function imprimirNombreEnMayuscula(persona) {
```
Se extrae los datos nombre de las variables persona
```javascript
var {nombre} = persona;
```
Se muestra un mensaje en consola el cual dira "LUIS" y/o "DARIO"	
```javascript
console.log(nombre.toUpperCase());
```
Se cierra la funcion imprimirNombreEnMayusculas	
```javascript
}
```
Se ejecuta la funcion imprimirNombreEnMayusculas con el los valores del objeto Luis
```javascript
imprimirNombreEnMayuscula(Luis);
```
Se ejecuta la funcion imprimirNombreEnMayusculas con el los valores del objeto Dario
```javascript
imprimirNombreEnMayuscula(Dario)
```
Estos es un mensaje
```javascript
//Escribe una funcion que imprima el nombre y edad
```
Esto es un mesnsaje
```javascript
//Hola me llamo Luis Martinez y tengo 17 años <- Salida de ejemplo
```
Se declara la funcion impimirNombreYEdad con el parametro persona
```javascript
function impimirNombreYEdad(persona){
```
Se define una variables que extrae los datos nombre, apellido y edad de los objetos
```javascript
var {nombre, apellido, edad} = persona
```
Se muestra un mensaje en consola, el cual dira "Hola me llamo LUIS y tengo 17 años" y/o "Hola me llamo DARIO y tengo 25 años"	
```javascript
console.log(`Hola me llamo ${nombre.toUpperCase()} y tengo ${edad} años`);
```
Se cierra la funcion impimirNombreYEdad
```javascript
}
```

Se ejecuta la funcion impimirNombreYEdad con el los valores del objeto Luis
```javascript
impimirNombreYEdad(Luis);
```
Se ejecuta la funcion impimirNombreYEdad con el los valores del objeto Dario
```javascript
impimirNombreYEdad(Dario)
```
