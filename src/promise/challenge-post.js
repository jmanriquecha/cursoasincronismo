import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function postData(UrlApi, data) {
    const response = fetch(UrlApi, {
        method: 'POST',
        mode: 'cors', //
        credentials: 'same-origin',
        headers: { // Cabeceras que enviamo en la solicitud
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "Portatil toshiba",
    "price": 10000,
    "description": "Disco SSD de 1TB, RAM de 32GB, Procesador intel core i11",
    "categoryId": 1,
    "images": [
        "https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8MjY5MzA2fGltYWdlL3BuZ3xoOGUvaDdkLzE2OTM2MTgxOTU2NjM4LnBuZ3wxNzFjOGFjNTdkYTk3Yjg3MzZiNTQ1NTRmODMwZjMzODhlNTAzNTU4MjRmNGQ0MzFlNzY5ZWJiM2VlZjViOTc4"
    ]
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.err(err))
    .finally(console.log("Proceso finalizado"));

/**
 * Para ver el producto lo hacemos en la url a travez del id
 * https://api.escuelajs.co/api/v1/products/203
 */