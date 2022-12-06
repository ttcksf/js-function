const result1 = encodeURI("https://lorem-co-ltd.com/テスト/");
console.log(result1);

const result2 = encodeURIComponent("https://lorem-co-ltd.com/テスト/");
console.log(result2);

const result3 = decodeURI(result1);
console.log(result3);

const result4 = decodeURIComponent(result2);
console.log(result4);
