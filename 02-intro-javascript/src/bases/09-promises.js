import { getHeroesById } from "./bases/08-imp-ext";

// const promesa = new Promise ((resolve, reject) => {

//     setTimeout( ()=> {
        
//         const heroe = getHeroesById(2);
//         // resolve( heroe );
//         reject( 'No se pudo encontrar el heroe' )
//     }, 2000)
// });

// promesa.then((heroe) => {
//     console.log('heroe', heroe)
// })

// .catch ( err => console.warn( err ) );

const getHeroebyIdAsync = ( id ) => {
    
    //por defecto esta funcion regresa void si no ponemos return new promise y lo ponemos como constante(como en el caso de arriba)

    return new Promise ((resolve, reject) => {

    setTimeout( ()=> {
        
        const p1 = getHeroesById(id);
        if ( p1 ) {
            resolve( heroe );
        }else{
            reject( "No se pudo encontrar el héroe" );
        }
        
    }, 2000)
});

}

getHeroebyIdAsync(4)
    .then ( heroe => console.log("heroe", heroe));
    // .catch (err => console.warn(err));