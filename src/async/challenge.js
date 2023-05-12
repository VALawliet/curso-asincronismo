
import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

/* Creación de función asincrona usando la palabra reservada
async antes de los parámetros de la función */

const fetchData = async (urlAPI)=>{

    /* Creación de una constante que recibirá como parametro la 
    resolución de la promesa cuando ésta esté lista. Para ello se utiliza
    la palabra reservada await */
    const response =  await fetch(urlAPI);

    /* Conversión de la respuesta de la API a un objeto json */
    const data = await response.json();
    return data;
}

const func = async (urlAPI)=>{

    /* Bloque try  */
    try{
        /* Constante donde se guarda el resultado obtenido por la API que, en este caso, será
        una larga lista de productos como objetos */
        const products = await fetchData(`${API}/products`);

        /* Obteniendo un objeto en específico */
        const product = await fetchData(`${API}/products/${products[0].id}`);

        /* Obteniendo el objeto de categories con la categoria del objeto */
        const category = await fetchData(`${API}/categories/${product?.category?.id}`);

        /* Mostrando en pantalla los resultados */
        console.log(products[0]);
        console.log(product.title);
        console.log(category.name)

        /* Bloque catch */
    }catch (error){

        /* Si hay un error, se mostrará acá */
        console.error(error)

    }
}

func(API);
