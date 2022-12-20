// import { heroes } from "./data/heroes"; (para trabajar con el archivo js de heroes

import heroes, {owners} from "../data/heroes"; //para trabajar con el archivo js de heroes

console.log(owners);
// console.log(heroes);

//UNA FORMA (LARGA, PERO QUE FUNCIONA):

// const getHeroebyId = ( id ) => {
//     return heroes.find(( heroe ) => {
//         if ( heroe.id === id ) {
//             return true;
//         }else {
//             return false;
//         }
//     });
// }

// console.log (getHeroebyId(2));

//PTRA FORMA (MAS SIMPLIFICADA):

// const getHeroebyId = (id) => {
//     return heroes.find( ( heroe ) => heroe.id === id );

// }

// console.log(getHeroebyId(2));

//PODEMOS SIMPLIFICARLO MAS AUN: 

export const getHeroesById = (id) => heroes.find( ( heroe ) => heroe.id === id );

// console.log(getHeroebyId(1))

//FILTER ejercicio

// const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner.length < 3 )

// console.log(getHeroesByOwner ("DC")); 


//fernando :

export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner )

// console.log(getHeroesByOwner ("DC")); 


