const array = [1, 2, 3, 4];
// const data = {
//   id: "0001",
//   name: "AAA",
//   age: 20,
// };
// console.log(data);
// console.log(array);
// console.dir(array);

// array.forEach((val) => {
//   console.log(val);
// });

Array.prototype.sayHello = function () {
  console.log("hello");
};
// console.dir(array);
// array.sayHello();

// 同じ名前は上書きされるので危険
// Array.prototype.sayHello = function () {
//   console.log("test");
// };
// array.sayHello();

// 追加するメソッド名をシンボル化すると上書きされないのでシンボルは必須（文法は変わる）
// JavaScriptのメソッドの一覧はいつ変わるか保証がない

// array.push(5);
// console.log(array);
// Array.prototype.push = function (val) {
//   console.log(val);
// };
// array.push(5);
const push = Symbol();
Array.prototype[push] = function (val) {
  console.log(val);
};
// console.dir(array);
array[push](5);
array.push(5);
console.log(array);
