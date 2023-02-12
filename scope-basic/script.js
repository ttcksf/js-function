// グローバルスコープ
// const num = 10;
// console.log("ただのコンソール:", num);
// if (true) {
//   console.log("ifのコンソール:", num);
// }

// ブロックスコープ
// if (true) {
//   const num = 10;
//   console.log("ifのコンソール:", num);
// }
// console.log("ただのコンソール:", num);

// varのリスク
if (true) {
  var num = 10;
  console.log("ifのコンソール:", num);
}
console.log("ただのコンソール:", num);
