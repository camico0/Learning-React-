//desestructuracion
//asignacion destructurante

// const persona = {
//     nombre: "tony",
//     edad: 45,
//     clave: "Ironman"
// };


// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);


//para no tener que hacer eso podemos desestructurar

const persona = {
    nombre: "tony",
    edad: 45,
    clave: "ironman"
};

// const { nombre, edad, clave } = persona;
//const { nombre: nombre2 } = persona; ( puedo  asignar a la constante nombre2 )

// console.log(nombre, edad , clave);


// const retornaPersona = ( usuario ) => {

//     const { nombre, edad, clave } = usuario;
//     console.log(edad, clave, nombre);


// }

// retornaPersona(persona);


//Puedo poner en el argumento : 

const retornaPersona = ( { nombre } ) => {

    console.log(nombre);


}

retornaPersona(persona);


//podemos asignar valores por defecto :


const retornaPersona2 = ( { nombre,edad,rango = "capitan" } ) => {

    console.log(nombre,edad, rango);


}

retornaPersona(persona);

//ASIGNACION DESESTRUCTURANTE

const useContext = ({clave,nombre,edad, rango="capitan"}) => {

    // console.log(clave, nombre,edad,rango );

    return {
        nombreClave: clave,
        anios: edad,

    }

}

const avenger = useContext(persona);

const {nombreClave, anios} = useContext (persona)

console.log(nombreClave,anios);

