// let now = new Date();
let now = new Date("March 13, 2023 04:02:03");
// console.log(now.getSeconds());
// console.log(now.getHours());
// console.log(now.getFullYear());

let seconds = now.getSeconds();
seconds = String(seconds).padStart(2, "0");
console.log(seconds);

let id = "123456";

id = id.padStart(6, "0");

console.log(id);
