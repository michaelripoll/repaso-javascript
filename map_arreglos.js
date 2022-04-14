// Ejemplo 1:

const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map((valor) => valor * valor);

console.log('numeros', numeros);
console.log('cuadrados', cuadrados);

// Ejemplo 2:

const personas = [
    {id: 1, nombre: "Michael", pais: "Colombia"},
    {id: 2, nombre: "Marcelo", pais: "Brasil"},
    {id: 3, nombre: "Marcela", pais: "Argentina"}
]

const ids = personas.map(persona => persona.id);
const nombres = personas.map(persona => persona.nombre);
console.log('ids', ids);
console.log('nombres', nombres);

const nombresYPaises = personas.map(persona => {
    return {nombre: persona.nombre, pais: persona.pais}
});

console.log(nombresYPaises);

// Ejemplo 3:

const divs = personas.map(persona => `
<div>
    <span>${persona.nombre}</span> (pais: ${persona.pais})
</div>
`);

console.log(divs);