const myString = "JavaScriptを覚えよう";

const a1 = myString.includes("JavaScript");
console.log(a1);

const a2 = "JavaScriptを覚えよう".startsWith("JavaScript");
console.log(a2);

const a3 = "JavaScriptを覚えよう".endsWith("JavaScript");
console.log(a3);

const value = 100;

console.log(`%cvalue：%c${value}`, "", "color: red; font-weight: bold;");
