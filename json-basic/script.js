// JSONはPHPやJavaなどの言語でも利用される
// エディタで編集できるデータ保存形式として広く使われるようになった
const json = `{ "id": "0001", "name": "AAA", "age": 20 }`;
// console.log(json);
// console.log(json.id);
const parsed = JSON.parse(json);
// console.log(parsed);
// console.log(parsed.name);

const data = {
  id: "0001",
  name: "AAA",
  age: 20,
};
// const jsonData = JSON.stringify(data);
const jsonData = JSON.stringify(data, null, " ");
console.log(jsonData);
