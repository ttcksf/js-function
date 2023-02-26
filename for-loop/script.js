// インデックス番号を使って繰り返す条件は自分で決める時
// forだけだとオブジェクトには使えない

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// for (let i = 0; i == 0; i++) {
//   console.log(array[i]);
// }

// インデックス番号を使って配列の中身を全て繰り返す時
// オブジェクトにも使える

for (let i in array) {
  console.log(array[i]);
}

const obj = { id: "0001", name: "AAA", age: 20 };
for (let key in obj) {
  console.log(`${key},${obj[key]}`);
}

// 要素を使って配列の中身を全て繰り返す時
// オブジェクトには使えない

for (let item of array) {
  console.log(item);
}

// for (let item of obj) {
//   console.log(item);
// }

// 要素もインデックス番号も使えて、繰り返す条件も自分で決められる
// オブジェクトには使えない

array.forEach((item) => {
  console.log(item);
});

array.forEach((item, i) => {
  console.log(`${item},${i}`);
});

const array = ["AAA", "BBB", "CCC"];
array.forEach((item, i) => {
  if (i < 1) {
    console.log(item);
  }
});
