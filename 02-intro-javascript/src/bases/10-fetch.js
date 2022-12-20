const apiKey = 'Okd68a6g2I5O1UI0HAwSl40aq49fJdoJ';

const peticion = fetch (`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// peticion.then ( resp => {
//  resp.json().then (data => {
//     console.log(data);
//  })
// });



//promesas pueden encadenarse

// peticion 
// .then ( resp => resp.json() )
// .then (( {data} ) => {{
// console.log( data.images.original.url);
// });


//lo pasamos a almacenar como variable y usamos desestructuracionç

peticion 
    .then ( resp => resp.json() )
    .then (( {data} ) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
});

