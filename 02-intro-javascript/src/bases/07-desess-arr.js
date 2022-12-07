//si dejas el click arriba  y 
//F2 cambia la referencia de todas las variables

const personajes = ["Goku", "Vegeta", "Trunks"];

const[ p1 ] = personajes; //indica el primer personaje

// const[ , p1 ] = personajes;  indica el segundo personaje 

//const[ ,  , p1 ] = personajes;  indica el tercer... y asi sucesivamente...(ignora el primero, ignora el segundo y toma el 3)

console.log(p1);

const retornaArreglo = () => {
    return ["ABC", 123];
}

const [letras,numeros ]= retornaArreglo();
console.log(letras,numeros);


//tarea
//el primer valor del arreglo se llamara nombre
// el segundo se llamara setNombre

const useState = ( valor ) => {
    return [valor, ()=>{console.log("hola mundo")}]; 
}


const [ nombre, setNombre ] = useState ( "Goku" );
console.log(nombre);
setNombre();

