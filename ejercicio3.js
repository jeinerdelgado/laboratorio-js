let año = prompt("Ingrese su año de nacimiento:");
let añoActual = new Date().getFullYear();
let edad = añoActual - año;
console.log("Su edad es: " + edad);
