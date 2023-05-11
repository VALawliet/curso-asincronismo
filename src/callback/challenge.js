'use strict'

/* Creando una variable que contenga al objeto xmlhttprequest para poder acceder a sus propiedades.
Es importante recordar usar la función require() pasandole un string con el nombre exacto del elemento descargado al proyecto de node que,
en este caso, es el xmlhttprequest. Importante agregar .XMLHttpRequest al final para asegurarnos que tenga constructor */
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//Creación de la variable con la ruta web a la API
const API = 'https://api.escuelajs.co/api/v1';

//Constantes de códigos
const DONE = 4
const OK = 200;


/* Creación de la función para la petición de la información. Se pasa como parámetros primero la direción de la api
y luego una función de callback que maneja la información obtenida */
function fetchData(urlApi, callback) {

    //Creación de un nuevo objeto xhttp para acceder a sus propiedades
    let xhttp = new XMLHttpRequest();
  
    //Iniciando la petición con el método .open(). 
    /* El primer parámetro debe ser un string indicando el tipo de petición a realizar, el segundo debe ser a donde se debe realizar,
    y el tercero es un boolean para indicar si habrá asincronismo */
    xhttp.open('GET', urlApi, true);

    /* el método .onreadystate define la creación de una función anónima que se ejecutará al notar cambios en el 
    readyState */
    xhttp.onreadystatechange = function (event) {

        /* La función anónima revisa si el readyState es igual a 4. En caso contrario, solo repite
        su ejecución hasta que el readyState sea igual a 4, que es el estado que determina la completación de la acción. Recomiendo leer más
        información sobre readyState */
      if (xhttp.readyState === DONE) {

        /* Una vez obtenido el readyState de 4, el status de la petición cambia. Si el status es de 200, significa que la petición se ha
        realizado con exito; si este no es el caso, hemosb tenido un error y para eso está el else que nos mostrará un error en consola. */
        if (xhttp.status === OK) {

            /* Si todo ha salido bien hasta ahora, se manda a llamar a la función de callback para
            que pueda realizar algo con los datos obtenidos. En nuestro caso, la función de callback es una función anónima que recibe dos parámetros.
            El primero es un posible error y el segundo es la respuesta conseguida por la API; si no ha habido error, se manda el valor del primer parámetro
            como null. Es importante descatar que la respuesta obtenida de la API se pasa como un objeto JSON para trabajarlo de una manera más sencilla */
          callback(null, JSON.parse(xhttp.responseText));


        } else {
            /* Si hemos obtenido un error, vamos a mandarle un error a la función de callback y un valor nulo en la respuesta */
            /* Creación del error */
          const error = new Error('Error' + urlApi);

          //Llamando a la función pasandole el error y un valor nulo de respuesta
          return callback(error, null);
        }
      }
    }

    /* Mandano la petición al servidor. Siempre que haya un .open al inicio, debe haber un .send al final */
    xhttp.send();
}


/* LLamada a la función para la obtención de los datos */
fetchData(`${API}/products`, (error1, data1)=>{

    /* Qué hacer si obtuvimos un error, si error1 es igual a null, esto se ignora */
    if(error1){ 
        return console.error(error1);
    }
    
    /* Usando recursividad para realizar una petición distinta a la API acceiendo al objeto JSON que hemos obtenido al convertir la respuesta de la API.
    En este caso, vamos a acceder al objeto objeto JSON de indice 0 y a su key de nombre 'id'. Como estamos realizando una nueva llamada a la API, debemos
    pasarle la función anónima que lidiará con los datos */
    fetchData(`${API}/products/${data1[0].id}`, (error2, data2)=>{

        /* Qué hacer en caso de error */
        if(error2){
            return console.error(error2);
        }
        /* Nueva llamada accediendo la sección 'categories' de la API, viendo la respuesta de la API guardada en data2 como objeto JSON y, en este caso,
        se utiliza optional chaining para evitar que nos arroje error la llamada. Si no existe el atributo category dentro del objeto data2, solo nos devolverá undefined y lo mismo con el atributo id. Nuevamente, se realiza la llamada a la función anónima para trabajar con los datos */
        fetchData(`${API}/categories/${data2?.category?.id}`, (error3, data3)=>{

        /* Qué hacer si da error */
            if(error3){ 
                return console.error(error3);
            }
            
            /* Esta última función anónima es la que nos mostrará los datos en consola y, como estamos usando recursividad, podemos acceder a los valores
            dentro de las peticiones anteriores a la API */

            /* enseñar el primer objeto de la llamada */
            console.log(data1[0]);

            /* Enseñar el titulo del objeto en la segunda llamada */
            console.log(data2);

            /* Enseñar el nombre del objeto en la tercera llamada */
            console.log(data3);
        })
    })
})


