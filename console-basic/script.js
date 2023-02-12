console.time();
console.log("コンソールログです");
console.error("コンソールエラーです");

const data = {
  id: "0001",
  name: "AAA",
  age: 20,
};
const array = [
  {
    id: "0001",
    name: "AAA",
    age: 20,
  },
  {
    id: "0002",
    name: "BBB",
    age: 19,
  },
  {
    id: "0003",
    name: "CCC",
    age: 21,
  },
];
const container = document.querySelector(".container");
console.log(data);
console.dir(data);
console.dir(container);

console.table(data);
console.table(array);
console.timeEnd();

console.time();
for (let i = 0; i < 100; i++) {
  console.log(i);
}
console.timeEnd();
