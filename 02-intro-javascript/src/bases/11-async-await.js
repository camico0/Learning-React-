// const getImagenPromesa = () => {
//     const promesa =  new Promise ( (resolve, reject )=> {
//         resolve ('http://asdasd.com');
        

//     })

//     return promesa;

// }

// getImagenPromesa().then(console.log);


//esto lo podemos simplificar aun mas :

// const getImagenPromesa = () => 
//     new Promise ( resolve => resolve ('http://asdasd.com'));
        
// getImagenPromesa().then(console.log);


//Podemos usar async para que quede aun mas facil de leer:

// const getImage = async() => {

//     return 'http://asdasd.com';

// }

// console.log(getImage());

//esto devuelve una promesa que responde ese url

const getImage = async() => {


    try {
        const apiKey = 'Okd68a6g2I5O1UI0HAwSl40aq49fJdoJ';
        const resp = await fetch (`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`); //es de tipo response. espera que esta promesa termine antes que ejecute la siguiente linea de codigo
        const { data } = await resp.json();

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

}
        
     catch (error) {
        //manejo del error
    }



}
     getImage();





