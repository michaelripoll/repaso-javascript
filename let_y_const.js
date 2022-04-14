/** let: Se utiliza para declarar una variable de alcance local, cuyo alcance va a ser el bloque en el cual se encuentra declarada.
 *  Const: Se utilizar para definir constantes, es decir, podemos declarar una variable la cual no podemos reasignar nuevamente.
  */

let nombre = 'Michael';
let apellido = 'Ripoll';
apellido = 'Puche';

let edad = 28;
let fecha = new Date();

let persona = {
    nombre: 'Michael',
    apellido: 'Ripoll',
    fechaDeNacimiento: new Date()
}

let miFuncion = function duplicar(valor){
    return valor*2;
}

console.log(apellido);

const pais = "RD";
pais = "Mexico";// No podemos reasignar la variable.

console.log()