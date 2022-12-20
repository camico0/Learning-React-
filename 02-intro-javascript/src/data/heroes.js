export const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];


//si quiero q heroes sea mi exportacion por defecto

export default heroes;

//si quiero tener exportaciones individuales que tambien
//se encuentran dentro de este mismo archivo

export const owners = ['DC', 'Marvel'];

//hay varias maneras de exportar : pero hay que modificar el import
// podemos indicar aca cual es el default
//hay que desestructurar en el import ambos, o no, dependiendo como lo exporte.


// export {
//     heroes,
//     owners 
// }