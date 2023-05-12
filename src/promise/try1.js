import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1'

const fetchData = (urlAPI)=>{
    return fetch(urlAPI);
}

fetchData(`${API}/products`).then((convert)=>{
    return convert.json();
}).then((wholeThing)=>{
    console.log(wholeThing[1]);
    return fetchData(`${API}/products/${wholeThing[1].id}`);
}).then((convert2)=>{
    return convert2.json();
}).then((product1)=>{
    console.log(product1);
    console.log(product1.category);
    return fetchData(`${API}/categories/${product1.category.id}`);
}).then((conversion3)=>{
    return conversion3.json();
}).then((categoryThing)=>{
    console.log(categoryThing);
    console.log(categoryThing.name);
}).catch((error)=>{
    console.error(error);
}).finally(()=>{
    console.log("UWU")
})