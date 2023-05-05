function sum(num1, num2) {
    return `Resultado de la suma es: ${num1 + num2}`;
}


function calc(num1, num2, callback) {
    return callback(num1, num2);
}


// console.log(calc(2, 5, sum));

setTimeout(function () {
    console.log(calc(10, 15, sum));
}, 2000);

///////////////////////////////////////////////////

setTimeout(function () {
    console.log("hola javascript");
}, 2000);

// Saludo

function gretting(name) {
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Jorge');