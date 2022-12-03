# Act1-Operaciones-basicas-y-metodos-de-JavaScript

## Explicacion de Lineas De Codigo

### Funcio.js

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
  Se declara una funcion llamada imprimirNombreEnMayuscula
  ```javascript
 function imprimirNombreEnMayuscula() {
  ```
  ```javascript
 nombre = nombre.toUpperCase();
  ```
  ```javascript
 console.log(nombre);
  ```
  ```javascript
 }
  ```
  ```javascript
 function imprimirNombreEnMayuscula1(n) {
  ```
  ```javascript
 n = n.toUpperCase();
  ```
  ```javascript
 console.log(n);
  ```
   ```javascript
 }
  ```
  ```javascript
 imprimirNombreEnMayuscula1(nombre);
  ```
   Estos es un comentario
  ```javascript
 //Crear una funcion que escriba nombre en minusculas
  ```
   Estos es un comentario
  ```javascript
 //Funciones en minusculas
  ```
  ```javascript
 function imprimirNombreEnMinisculas() {
  ```
  ```javascript
 nombre = nombre.toLowerCase();
  ```
  ```javascript
 console.log(nombre);
  ```
  ```javascript
 }
  ```
    ```javascript
 imprimirNombreEnMinisculas();
  ```
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

### DestructuracionObjetos.js