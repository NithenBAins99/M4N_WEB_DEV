const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am a promise");
        resolve("success")
    })
}
let promise = getPromise()
promise.then((res)=>{
    console.log("promise fullfied",res);
});promise.catch((err)=>{
    console.log("Something went wrong while getting promsie",err);
})

