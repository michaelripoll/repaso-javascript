let apellido = "Ripoll";
let edad = 28;
let fecha = new Date();


const paisProp = "pais";
const paisValor = "RD";

let persona = {
    nombre: "Michael",
    apellido, // => apellido: apellido 
    edad,
    fechaActual: new Date(),

    funcionNormal(){
        //...
    },
    funcionFlecha: () => {},
    [paisProp]:paisValor
}

const retornarValoresPersona = (prop) => persona[prop];

//console.log(persona);

console.log(retornarValoresPersona('apellido'));
console.log(persona['pais']);