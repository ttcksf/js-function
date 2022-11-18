const myArray = ["a","b","c"];
// Object.freeze(myArray)
myArray[0] = "d"

console.log(myArray);


const myObj = {id:1, name: "Ken"}
// Object.freeze(myObj)
myObj.name = "Bob"
console.log(myObj);
