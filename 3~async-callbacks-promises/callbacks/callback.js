function sum(a,b){
    console.log(a+b);
}
function Cal(a,b,sumCallback){
    sumCallback(a,b)
}
Cal(1,2,sum)
// // Callbacks : when we pass a function as an argument 
// // Callbacks : callbacks are functions passed as an argument to other function