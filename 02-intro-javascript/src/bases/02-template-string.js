//template strings
// backsticks o backquotes `` 

const nombre = "Camila";
const apellido = "Corbo";

const nombreCompleto = `¨${ nombre }  ${ apellido }`;

console.log( nombreCompleto );

function getSaludo(nombre) {
    return 'hola ' + nombre;
}

console.log (`este es un texto: ${getSaludo(nombre)}`)