document.getElementById("loadUsers").addEventListener("click", function () {
  // Simulating data from a server/API
  const users = [
    { name: "Alice", age: 28 },
    { name: "Bob", age: 34 },
    { name: "Charlie", age: 25 }
  ];
  const ul = document.getElementById("userList");
  users.forEach((user,index)=>{
    const li = document.createElement("li")
    li.textContent = `Name: ${user.name} - Age: ${user.age}`
    ul.append(li)
  })

});
