function getData(data,middleware){
    setTimeout(()=>{
        console.log(data);
        middleware()
    },2000)
}

getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4)
        })
    })
})