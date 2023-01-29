const xml = new XMLHttpRequest();
console.log(xml);
const xmlResult = document.querySelector("#xmlResult");

// 実行した時に実行結果をもらう処理
// xml.addEventListener("load", (e) => {
//   const text = e.target.responseText;
//   console.log(text);
//   xmlResult.innerHTML = text;
// });

const progress = document.querySelector("#progress");
const btn = document.querySelector("#btn");

xml.addEventListener("progress", (e) => {
  let loaded = e.loaded;
  let total = e.total;
  console.log(loaded);
  console.log(total);
  const rate = loaded / total;
  console.log(rate);
  progress.value = rate * 100;
});

// 実行した時に実行結果をもらう処理
xml.addEventListener("load", (e) => {
  const text = e.target.responseText;
  console.log(text);
  xmlResult.innerHTML = text;
});

// 第一引数はメソッド、第二引数にパス（初期化メソッド）
xml.open("get", "./test.txt");

btn.addEventListener("click", () => {
  // 実行
  xml.send();
});
