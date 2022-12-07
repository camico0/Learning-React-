const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    direccion:{
        ciudad: "Nueva York",
        zip: 1655346531,
        lat: 14.5161,
        lng: 34.5652,
    }
}

//console.table(persona);

const persona2 = {...persona};
persona2.nombre = "Peter";

console.log(persona);
consoell.log(persona2);