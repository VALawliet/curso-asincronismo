
/* Importadno fetch para poder realizar peticiones a la API */
import fetch from "node-fetch";

const API = `https://api.escuelajs.co/api/v1`;

/* Creación de una función que mande información a la API. El primer argumento será la url y el segundo los datos */
const postData = (urlAPI, data)=>{

    /* Creación de una constante que contendrá el return de fetch que, en este caso, 
    se le pasa un segundo parámetro el cual es un objeto que define ciertas carácteristicas de la petición a la API.
    La primera es el método que define lo que haremos, la segunda es el modo; la tercera es para mandar usuarios y contraseñas si
    son necesarios; el cuarto es un objeto donde se define que estaremos recibiendo un json, y el último define lo que estaremos viendo que,
    en este caso, será un string que convertiremos a objeto json */
    const response = fetch(urlAPI, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    /* Finalmente la función devuelve el resultado del fetch dentro de response */

    return response;
}


/* Definición de los datos */
const data = {
    "title": "Uwu",
    "price": 21312,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
};


/* Llamanda a la función pasando los parámetros necesarios. */
postData(`${API}/products`, data).then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
})

