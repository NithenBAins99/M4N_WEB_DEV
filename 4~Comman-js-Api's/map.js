const nums = [1,2,3,4]
const double_nums = nums.map(num=>num*2)
console.log(double_nums);

const users = [
  { name: "Nithen", age: 22 },
  { name: "Aryan", age: 25 }
];

const result = users.map(user=>user.age)
console.log(result);

// map : create a new array , by applying a function on each element of the original array
// Extract specific values from an array of objects: