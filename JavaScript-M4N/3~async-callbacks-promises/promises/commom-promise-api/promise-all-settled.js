/* 
Promise.all : Common Promise api method which is used when we have many promises and we want this all in same time 
let suppose if we have p1,p2 and p3 , so if any promise failed
so whole promise.all will be failed

*/
let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise 1")
    },1000)
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

let promise_all = Promise.allSettled([promise1,promise2,promise3])
promise_all.then((val)=>console.log(val))

let names = ['iliakan', 'remy', 'jeresig'];
let requests = names.map(name=>fetch(`https://api.github.com/users/${name}`))
Promise.allSettled(requests)
    .then(responses=>{
        for(let response of responses){
            console.log(`${response.url} & ${response.status}`);
        }
        return responses

    })