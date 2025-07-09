const nums = [1, 2, 3, 4];
const total = nums.reduce((acc,curr)=>{
    return acc+curr
})
console.log(total);
// by default acc = 0 [inital value]
// reduce() is used to "reduce" an array into a single value 

/*
Syntax 
array.reduce((accumulator, currentValue, index, array) => {
  // logic
}, initialValue); */


