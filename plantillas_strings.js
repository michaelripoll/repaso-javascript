// En ingles: template strings

const apellido = 'Ripoll'; // Comillas simples
const pais = "Colombia"; // Comillas dobles

const saludo = "Hola, "+ apellido + ", ¿Como estas?";

const saludo2 = `Hola, ${apellido}, ¿Como estas?`; // tildes (backticks)

//console.log(saludo2);

let sumar = (a,b) => a+b;

const mensaje = `Hola, ${apellido},

esta es una carta, desde ${pais}

la suma de 2 y 3 es ${sumar(2,3)}

Att: Yo`;

console.log(mensaje);