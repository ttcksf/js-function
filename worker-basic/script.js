const result = document.querySelector("#result");
const btn = document.querySelector("#btn");

const worker = new Worker("worker.js");
console.log(worker);

// 1.
// btn.addEventListener("click", () => {
//   let total = 0;
//   for (let i = 1; i < 2000000000; i++) {
//     total += 1;
//   }
//   result.textContent = total;
// });

btn.addEventListener("click", () => {
  worker.postMessage(0);
  console.log("ワーカーへ依頼");
});

// 4.
worker.onmessage = function (e) {
  console.log("結果を受信");
  result.textContent = e.data;
  console.log("scriptでのe.data: ", e.data);
};
