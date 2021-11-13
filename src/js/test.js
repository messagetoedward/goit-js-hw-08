// const fetchUserFromServer = (username, onSuccess, onError) => {
//     console.log(`Fetching ${username}`);

//     setTimeout(() => {
//         const isSuccess = false;
//         if (isSuccess) {
//             onSuccess('Success value');
//         } else {
//             onError('Error value');
//         }
//     }, 2000)
// }

// const onFetchSuccess = value => {
//     console.log(value);
// }

// const onFetchError = error => {
//     console.log(error);
// }

// fetchUserFromServer("Mango", onFetchSuccess, onFetchError);


// const fetchUserFromServer = username => {
//     return new Promise((resolve, reject) => {
//         console.log(`Fetching ${username}`);
//         const isSuccess = false;

//         setTimeout(() => {
//             if (isSuccess) {
//                 resolve('Success value!');
//             } else {
//                 reject('Error value');
//             }
//         }, 2000)
//     })
// }

// fetchUserFromServer('Ed')
//     .then(value => console.log(value))
//     .catch(error => console.log(error))


const makePromise = (text, delay) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(text), delay);
    })
}

const promiseA = makePromise("promiseA value", 1000);
const promiseB = makePromise("promiseB value", 3000);

Promise.race([promiseA, promiseB])
    .then(text => console.log(text))
    .catch(error => console.log(error));


// new Promise(resolve => resolve('value')).then(value => console.log(value));
// Promise.resolve('value').then(value => console.log(value));

// new Promise(reject => reject('error')).catch(error => console.log(error))
// Promise.reject('error').catch(error => console.log(error))


// const greeting = guestName => {
//     if (guestName === '' || guestName === undefined) {
//         return {
//             success: false,
//             message: "Enter name",
//         };
//     }
//     return {
//         success: true,
//         message: `Welcome ${guestName}`
//     };
// };

// const result = greeting('Mango');

// if (result.success) {
//     console.log(result.message)
// } else {
//     console.error(result.message);
// }


// const greeting = (name, onSuccess, onError) => {
//     if (name === '' || name === undefined) {
//         return onError("Enter name")
//     }
//     return onSuccess(`Welcome ${name}`)
// }

// greeting('Mango', user => console.log(user), error => console.log(error));


// const greeting = name => {
//     if (name === '' || name === undefined) {
//        return Promise.reject('Enter name');
//     }
//     return Promise.resolve(`Welcome ${name}`);
// };

// greeting('')
//     .then(user => console.log(user))
//     .catch(error => console.log(error))
//     .finally('settled');