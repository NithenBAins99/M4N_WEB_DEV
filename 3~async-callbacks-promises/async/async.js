function getData(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",data);
            resolve("success")
        },3000)
    })
}
// async - await
// async function fetchingData(){
//     await getData(1)
//     await getData(2)
//     await getData(3)
//     await getData(4)
// }
//IIFE --> Immedatily invoked function
(async function fetchingData(){
    await getData(1)
    await getData(2)
    await getData(3)
    await getData(4)
})()
