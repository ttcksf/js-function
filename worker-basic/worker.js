// DOM操作はできない
// ページが開いている時しかバックグラウンドが動かない
onmessage = (e) => {
  // 2.
  console.log(e.data);
  console.log("依頼を受信");
  let total = e.data;
  for (let i = 1; i < 2000000000; i++) {
    total += 1;
  }
  // 3.
  console.log("workerでのtotal: ", total);
  console.log("結果を送信");
  postMessage(total);
};
