// AbortSignal: An object that allows you to cancel (abort) an ongoing operation.

// Let's suppose we're on Page 1 and we fetch some API data.
// There are 3 possible outcomes where the fetch will keep running until:
// 1. It succeeds
// 2. It fails
// 3. Or the browser is closed

// Now, if we navigate from Page 1 to Page 2, 
// we no longer want the fetch request from Page 1 to continue running.
// In this case, we want to abort that fetch request —
// because waiting for it to finish is unnecessary.

const controller = new AbortController()
const signal = controller.signal;
fetch('https://jsonplaceholder.typicode.com/posts',{signal})
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((err)=>{
        if(err.name==="AbortError"){
            console.log('fetch is aborted');
        }else{
            console.log("other error",err);
        }
    })

setTimeout(()=>{
    controller.abort()
},1000)
// [controller] can abort
// [signal] is what you pass to things you want to cancel
