

const myArray = ["a","b","c"];
Object.freeze(myArray)
myArray[0] = "d"

console.log(myArray);


const myObj = {id:1, name: "a"}
Object.freeze(myObj)
myObj.name = "b"
console.log(myObj);
