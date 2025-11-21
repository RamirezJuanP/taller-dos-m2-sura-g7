/*  Ejercicio 1: Duplicar Números (map)
Inicias con una lista de puntos:
let puntos = [10, 20, 30, 40];

Tareas:
1.  Crea un nuevo arreglo puntosDoble donde cada valor sea el doble del arreglo original.
2.  Muestra puntos y puntosDoble para verificar que el original no cambió.

---
   */

let puntos = [10, 20, 30, 40];


let puntosDoble = puntos.map(function(punto) {
    return punto * 2;
});


console.log(puntos);
console.log(puntosDoble);


/* 
  Ejercicio 2: Lista de Nombres (map con objetos)
Inicias con una lista de usuarios:
let usuarios = [{id: 1, nombre: "Ana"}, {id: 2, nombre: "Luis"}, {id: 3, nombre: "Carlos"}];

Tareas:
1.  Crea un nuevo arreglo nombres que contenga solo los nombres de los usuarios (ej: ["Ana", "Luis", "Carlos"]).

--- 
 */

let usuarioss = [
    { id: 1, nombre: "Ana" },
    { id: 2, nombre: "Luis" },
    { id: 3, nombre: "Carlos" },
];

// Crea un nuevo arreglo nombres que contenga solo los nombres de los usuarios (ej: ["Ana", "Luis", "Carlos"]).

let nombres = usuarioss.map((usuario) => {
    return usuario.nombre;
});

console.log(usuarioss);
console.log(nombres);





/*    Ejercicio 3: Notas Aprobadas (filter)
Inicias con una lista de calificaciones:
let notas = [8, 5, 10, 3, 7];

Tareas:
1.  Crea un nuevo arreglo aprobadas que contenga solo las notas que sean mayores o iguales a 6.

---
  */

let notas = [8, 5, 10, 3, 7];

// Crea un nuevo arreglo aprobadas que contenga solo las notas que sean mayores o iguales a 6.

let aprobadas = notas.filter((nota) => nota >= 6);

console.log(notas);
console.log(aprobadas);

