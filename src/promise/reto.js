function delay(time, message) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(message);
        }, time);
    })
}

delay(1000, "Hello after")
    .then((message) => console.log(message))
    .catch((error) => console.error(error))
    .finally(() => console.log("finally"));

