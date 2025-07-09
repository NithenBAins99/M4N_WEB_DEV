// pending , fulfiled , rejected
// resolve and reject are callback provided by js
let promise = new Promise(((resolve,reject)=>{
    console.log("I am promise");
}))

function getData(data,middleware){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",data);
            resolve("success")
            if(middleware){
                middleware()
            }
        },2000)
    })
}
console.log(promise);