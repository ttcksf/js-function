function myFunction(a,b){
  return 100;
  console.log("hello");
}

function myFunction(a,b){
  console.log("hello");
  return 100;
}

function myFunction(a,b){
  if(a >= 100){
    return a;
  }

  return b;
}

function calFunction(price, tax = 0.1){
  const result = price + price * tax;
  return result;
};

function calcSum(...prices){
  let result = 0;
  for(const value of prices){
    result += value;
  }
  return result;
};

const result = myFunction(56,0)
console.log(result);

const result1 = calFunction(100);
console.log(result1);

const result2 = calFunction(100,0.08);
console.log(result2);

const result3 = calcSum(10,20,30);
console.log(result3);
