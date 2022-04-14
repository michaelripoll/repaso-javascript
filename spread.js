// Ejemplo 1:

const sumar = (a, b) => a+b;

const numeros = [2, 3];

const suma = sumar(...numeros);

//console.log(suma);

// Ejemplo 2:

const masNumeros = [1, ...numeros, 4, 5];

//console.log(masNumeros);

// Ejemplo 3:

const otrosNumeros = [4, 5];

const concatenar = [...numeros, ...otrosNumeros];

//console.log(concatenar);

// Ejemplo 4:

const [primero, ...resto] = masNumeros;

console.log(masNumeros);
console.log(primero);
console.log(resto);

// Ejemplo 5:

const masNumerosClonado = [...masNumeros];

//console.log(masNumeros);
//console.log(masNumerosClonado);

// Ejemplo 6:

const persona = {
    nombre: "Michael",
    apellido: "Ripoll"
}

const persona2 = {
    ...persona,
    edad: 28
}

//console.log(persona2);

// Ejemplo 7:

const persona3 = {...persona2};
persona3.nombre = "Alexander";

console.log(persona3);

// Ejemplo 8:

const {edad, ...persona4} = persona3;

console.log(edad);
console.log(persona4);