console.log("Global start");
var globalVar = "I am global variable"
console.log(globalVar);
globalfun()
console.log("global ends");
// but if i create this function with variable so in memory phase it will load as a undefined value 
function globalfun(){
    console.log("inside a function");
}


