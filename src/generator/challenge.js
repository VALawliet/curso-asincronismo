'use strict'

import fetch from "node-fetch"

const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(url){
    const response = await fetch(url);
    const conversion = await response.json();
    return conversion;
}

async function* showing(url){
    const products = await fetchData(`${url}/products`);
    
    const product = await fetchData(`${url}/products/${products[0].id}`);
    const categoryName = await fetchData(`${url}/categories/${product.category.id}`);

    //Por alguna razón debo hacer los console.log() desde los yields
    yield console.log(products[0]);
    yield console.log(product.title);
    yield console.log(categoryName.name);
}


const generator =  showing(API);

generator.next();
generator.next();
generator.next();


//Código de un compañero. Funciona bien

import fetch from "node-fetch";
const API1 = 'https://api.escuelajs.co/api/v1';

/*creamos la funcion de fetchData la cual utiliza la APi y retornamos la informacion en un tipo objeto JSON, implementando la logica de async y await, en este ejemplo
usamos una funcion tradicional*/
const fetchData2 = async (urlApi) => {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

/*creamos la funcion que realiza las solicitudes en este caso usaremos tambien yield y el "*"" al lado de function para identificar un generator
Tambien usamos async y await para hacer el llamado de los productos y demas */
async function* anotherFunction (urlApi) {
    const products = await fetchData2(`${urlApi}/products`);
    const product = await fetchData2(`${urlApi}/products/${products[0].id}`);
    const category = await fetchData2(`${urlApi}/categories/${product.category.id}`);

    //Se utiliza yield para dar una pausa a la ejecucion y utilizamos .next() para dar inicio a el codigo
    yield console.log(products);
    yield console.log(product.title);
    yield console.log(category.name);
}

const g = anotherFunction(API1);
g.next().value;
g.next().value;
g.next().value;