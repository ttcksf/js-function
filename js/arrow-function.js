const calcSum = (a,b,c) => {
  const result = a + b + c;
  return result;
};

const myFunction1 = (a) => {
  return a + 2;
};

const myFunction2 = a => {
  return a + 2;
};

const myFunction3 = (a) => a + 2;

const result1 = myFunction1(1);
const result2 = myFunction2(1);
const result3 = myFunction3(1);
console.log(result1);
console.log(result2);
console.log(result3);
