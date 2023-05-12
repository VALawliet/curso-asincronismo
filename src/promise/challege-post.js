import fetch from "node-fetch";

const API = `https://api.escuelajs.co/api/v1`;

const postData = (urlAPI, data)=>{
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

const data = {
    "title": "Uwu",
    "price": 21312,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
};

postData(`${API}/products`, data).then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
})

