//reduce
// const number = [100,200,300];

// const sum = number.reduce((pre,current) => {
//   return pre + current;
// });

// console.log(sum);

//for
const number = [100, 200, 300];
let sum = 0;
for (const num of number) {
  sum += num;
}
console.log(sum);

//reduce
// const array = [["aaa","bbb"],["ccc","ddd"]];
// const mergeArray = array.reduce((pre, current) => {
//   return pre.concat(current);
// });
// console.log(mergeArray);

//reduceRight
// const array = [["aaa","bbb"],["ccc","ddd"]];
// const mergeArray = array.reduceRight((pre, current) => {
//   return pre.concat(current);
// });
// console.log(mergeArray);
