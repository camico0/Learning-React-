//funciones en JS
//const saludar = function(nombre) {
//  return `Hola, ${ nombre }`;
//}

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

console.log(saludar2("Camila"))

//podemos simplificarlo de la siguiente manera: 

const saludar3 = (nombre) => `hola, ${nombre}`;

console.log(saludar3 ("Camila"));


//cuando no recibe ningun argumento 
const saludar4 = () => `hola mundo`;

console.log(saludar4());



const getUser = () =>
({
    uid: 'ABC123',
    username: 'El_papi123'
});

const user = getUser();
console.log(user)

//---------------------------------

//tarea: 
//1. transformar a una funcion flecha
//2. tiene que retornar un objeto implicito
//3. pruebas


// function getUsuarioActivo ( nombre ){
//     return {
//         uid: "abc455",
//         username: nombre
//     }
// };

// const usuarioActivo = getUsuarioActivo ("Fernando");
// console.log( usuarioActivo );


const getUsuarioActivo = ( nombre ) =>
({
    uid: 'ABC123',
    username: 'El_papi123'
});

const usuarioActivo = getUsuarioActivo("camila");
console.log(usuarioActivo);
