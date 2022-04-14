let persona = {
    nombre: "Michael",
    apellido, // => apellido: apellido 
    edad,
    fechaActual: new Date()
}

// const nombre = persona.nombre;
// const apellido = persona.apellido;
// const edad = persona.edad;

// const {nombre, apellido, edad} = persona;

//console.log(nombre);

obtenerDireccion = () => {
    return{
        calle: "Mi calle",
        pais: "Mi pais",
        provincia: "Mi provincia"
    }
}

const {pais, provincia} = obtenerDireccion();

//console.log(pais);
//console.log(provincia);

imprimirNombre = (persona) => {
    console.log(persona.nombre);
}

imprimirNombre2 = ({nombre}) => {
    console.log(nombre);
}

//imprimirNombre(persona);
//imprimirNombre2(persona);

const arreglo = [1,2,3,4];

//const primero = arreglo[0];

const [primero, segundo,, cuarto] = arreglo;

//console.log(primero);
//console.log(segundo);
//console.log(cuarto);

const retornaArreglo = () => {
    return ["Michael", "Ripoll"]
}

const [nombre, apellido] = retornaArreglo();

console.log(nombre);
console.log(apellido);