/* 
When we have any array of promises , so its not sure first promise will (resolve or reject) firsly 
so when we use Promise.race() --> so its settled the first promise as soon as possible
Its like race thats why it's called Promise.race()
Noet : all further results/errors are ignored expect first promise
 */


let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise 1")
    },10000)
})
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("promise 2")
        reject("server error")
    },3000)
})
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise 3")
    },6000)
})

// let promise_all = Promise.race([promise1,promise2,promise3])
// promise_all.then(val=>console.log(val))


/* 
Promise.any() gives you the value of the first resolved promise.
It ignores all the rest — whether they're slow or rejected.
If all fail, you get an AggregateError.
 */

let any_promise = Promise.any([promise1,promise2,promise3])
any_promise.then(val=>console.log(val))
