function myFunctionA(){
  return 100;
  console.log("hello");
};
const myFunctionA_result = myFunctionA();
console.log(myFunctionA_result);

function myFunctionB(){
  console.log("hello");
  return 100;
};
const myFunctionB_result = myFunctionB();
console.log(myFunctionB_result);


function myFunctionC(a,b){
  if(a >= 100){
    return a;
  }
  return b;
};
const myFunctionC_result = myFunctionC(120,0);
console.log(myFunctionC_result);
// const myFunctionC_result = myFunctionC(50,0);
// console.log(myFunctionC_result);

function calFunction(price, tax = 0.1){
  const result = price + price * tax;
  return result;
};
const calFunction_result = calFunction(100);
console.log(calFunction_result);
// const calFunction_result = calFunction(100,0.08);
// console.log(calFunction_result);


function calcSum(...prices){
  let result = 0;
  for(const value of prices){
    result += value;
  }
  return result;
};
const calcSum_result = calcSum(100);
console.log(calcSum_result);
// const calcSum_result = calcSum(100,200,3,4);
// console.log(calcSum_result);

