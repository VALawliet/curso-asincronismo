'use strict'

/* Se está utilizando fetch 2.6.11 debido a que la versión 3 no tiene compatibilidad
con con commonjs. Si se trata de obtener el node-fetch de la forma enseñada en el curso, hay errores debido 
a que también se está usando un require más abajo para poder conseguir datos desde la consola */
const fetch = require('node-fetch')
const prompt = require('prompt-sync')();

const API = 'https://api.escuelajs.co/api/v1';



//función para obtener datos
const fetchData = (urlAPI)=>{
    return fetch(urlAPI);
}

//función para enviar datos
const PostData = (urlAPI, data)=>{
    const response = fetch(urlAPI, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return response;
}


//lógica
let option = prompt('Would you like to use GET or POST?');

while(option.toUpperCase() != 'GET' && option.toUpperCase() != 'POST'){
    console.log("You need to specify if we're gonna be using GET or POST");
    option = prompt('Would you like to use GET or POST?')
}

if(option.toUpperCase() === 'GET'){
    console.log("Please specify the ID of the product you'd like to get. ");
    let ID = parseInt(prompt("ID: "));
    
    while(isNaN(ID)==true || ID<0){
        console.log("You need to specify the ID of the product you'd like to see. It cannot be negative values");
        console.log("Please specify the ID of the product you'd like to get. ");
        ID = parseInt(prompt("ID: "));
    }

    fetchData(`${API}/products/${ID}`).then((response)=>{
        return response.json()
    }).then((showProduct)=>{
        console.log(showProduct)
    }).catch((error)=>{
        console.log(error)
    }).finally(()=>{
        console.log("END")
    })

}else{
    console.log("Please spicify the data of the product you'd like to send to the API.");
    let name = prompt('name: ');
    let price = prompt('price: ');
    while(isNaN(price)==true || price < 0){
        console.log("You need to set a positive numerical value as the price");
        price = prompt('price: ');
    }

    const data = {
        "title": name,
        "price": price,
        "description": "A description",
        "categoryId": 1,
        "images": ["https://placeimg.com/640/480/any"]
    };

    PostData(`${API}/products`, data).then((conversion)=>{
        return conversion.json();
    }).then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.log(error)
    }).finally(()=>{
        console.log("The data has been succesfully sent to the API")
    })
}