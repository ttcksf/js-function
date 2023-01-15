const number = [1,2,3];

//map
// number.map((num) => {
//   num++;
//   console.log(num);
// })


// forEach
const numberForEach =number.forEach((num) => {
    num++;
    console.log(num);
    return num;
  })
console.log(numberForEach);
// const numberMap = number.map((num) => {
//   num++;
//   console.log(num);
//   return num;
// });
// console.log(numberMap);

