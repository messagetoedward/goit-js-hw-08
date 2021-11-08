const promise = new Promise((resolve, reject) => {
    resolve(10);
});

promise.then(value => {
    return new Promise(resolve => {
        resolve(value * 2);
    });
}).then(value => console.log(value));