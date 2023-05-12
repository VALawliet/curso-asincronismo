/* Creación de llamada a una API usando promesas */

/* Importar fetch del paquete node-fetch. Es importante primero correr npm install node-fetch en el lugar del proyecto */
import fetch from 'node-fetch';


/* Creación de la constante que contenga la dirección de la API */
const API = 'https://api.escuelajs.co/api/v1';


/* Creación de la función que recibe la información. Esta función es mucho más simple
y corta que la del anterior challenge debido a la función fetch dentro que hemos descargado */
function fetchData(urlAPI){

    /* Devuelve fetch de la url de la API. El fetch que devuelve en sí mismo es una promesa y, por ende,
    podemos utilizar .then, .catch, etc */
    return fetch(urlAPI);
};


/* Llamada */
fetchData(`${API}/products`).then((response)=>{

    /* En este caso, response no es más que todo lo que hay dentro de la API en products, pero es necesario
    convertir el resultado a un objeto json para poder hacer cosas con él */
    return response.json();
    

}).then((products)=>{

    /* Al haber devuelto un objeto json, el siguiente then estará trabajando con un objeto json como su repsuesta que,
    en este caso, es products. Como se ha dicho antes, products no es más que toda la respuestas de la API en products, lo cual es una
    lista enorme de products y, por esta razón, llamamos al objeto con el index 0 en la lista de productos. */
    console.log(products[0]);

    /* Siguiente llamada utilizando el id del primer producto en la lista enorme de productos. Realizar esta acción ahora nos permite
    que lo que devuelva ahora la función sea solamente el producto cuyo id sea el del producto con index 0 en la lista de productos. Por ende,
    ahora solo estaremos trabajando con un producto en lugar de toda la lista. */
    return fetchData(`${API}/products/${products[0].id}`)
}).then((conversion)=>{

    /* Nuevamente, es necesario realizar una conversión del resultado obtenido poder trabajarlo como un objeto json */
    return conversion.json();
    
}).then((productTitle)=>{

    /* Al ahora solo estar trabajando con un objeto en lugar de toda la lista, podemos acceder sin dificultades a todos los valores
    que estén guardados en sus keys que, en este caso, es title */
    console.log(productTitle.title);

    /* Última llamada a la API, pero a la sección de categorias en lugar de la de productos.
    Al hacer esta llamdda, vamos a obtener de respuesta la lista completa de todos los objetos en 'categories'. Sin embargo,
    al nosotros haber pasado tambien el id dentro del objeto category que, a su vez, estaba dentro del objeto productTitle, vamos
    a obtener un único objeto dentro de la lista de categories. */
    return fetchData(`${API}/categories/${productTitle.category.id}`)
}).then((conversion)=>{
    /* Conversión a objeto json. Este paso siempre es obligatorio */

    return conversion.json()

}).then((category)=>{

    /* Accediendo al valor que se encuentre dentro de la llave 'name' en nuestro objeto */
    console.log(category.name)
}) 

