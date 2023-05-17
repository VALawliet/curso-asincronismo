import fetch from "node-fetch";

const apiURL = "https://api.escuelaapijajd";

const fetchData = async (url)=>{
    try{
        new URL(url);
    }catch(err){
        throw new Error('Invalid URL');
    };

    try{
        let response = await fetch(`${url}/products`);
        let conversion = await response.json();
        

    }catch(err){
        throw new Error('Something went wrong');
    }
}


fetchData(apiURL);





