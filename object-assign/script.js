// 分割代入
// const student = {
//   id: "0001",
//   name: "山田",
//   age: 18
// };

// const {id,name,age} = student;
// console.log(id);
// console.log(name);
// console.log(age);

//分割代入でプロパティ名の変更
// const student = {
//   id: "0001",
//   name: "山田",
//   age: 18
// };

// const {id: number} = student;
// console.log(number);


//オブジェクトと配列はconstでも代入可能
// const student = {
//   id: "0001",
//   name: "山田",
//   age: 18
// };
// student.id = "0002";
// console.log(student.id);

//オブジェクト、配列を代入禁止にする
const student = {
  id: "0001",
  name: "山田",
  age: 18
};
Object.freeze(student);
student.id = "0002";
console.log(student.id);
