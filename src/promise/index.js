// Promesa es algo que va a pasar, ahora, despues ó nunca.

// Tiene 3 estados
/**
 * Pendiente: Cuando se esta ejecutando
 * Cumplido: Cuando ha regresado la información deseada
 * Rechazado
 */

const promise = new Promise(function (resolve, reject) {
    resolve("Hey todo ha sido correcto");
});

const cows = 11;

const countCows = new Promise(function (resolve, reject) {
    if (cows > 10) {
        resolve(`Tenemos ${cows} vacas en la granja`);
    }
    else {
        reject("No tenemos vacas sufisientes");
    }
});

countCows.then((result) => { // resolve
    console.log(result);
}).catch((error) => { // reject
    console.log(error);
}).finally(() => console.log("Finalizado (Finally)")); // finally