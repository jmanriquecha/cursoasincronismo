/**
 * Para trabajar con fetch en la terminal debemos instalar en el proyecto
 * npm i node-fetch
 */
// Importamos node-fetch
import fetch from './../../node_modules/node-fetch/src/index.js';

const API = 'https://api.escuelajs.co/api/v1'; //Captura url

function fetchData(urlApi) {
    return fetch(urlApi);
}

// fetchData(`${API}/products`)
//     .then(response => response.json())
//     .then(products => {
//         console.log(products);
//     })
//     .catch((error) => console.error(error));

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products); //Traemos todos los productos
        return fetchData(`${API}/products/${products[0].id}`);
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title); // Traemos un producto
        return fetchData(`${API}/categories/${product?.category?.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name); // Traemos la categoría
    })
    .catch(error => console.log(error)) // Si se presenta un error se muestra
    .finally(() => console.log("Finally")); // Muestra cuando ha finalizado
