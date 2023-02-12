const container = document.querySelector("#container");
const inputForm = document.querySelector("#inputForm");
const saveBtn = document.querySelector("#saveBtn");
const backBtn = document.querySelector("#backBtn");
const deleteBtn = document.querySelector("#deleteBtn");

saveBtn.addEventListener("click", () => {
  const inputData = inputForm.value;
  console.log(inputData);
  localStorage.setItem("add", inputData);
  inputForm.value = "";
});

backBtn.addEventListener("click", () => {
  const savedData = localStorage.getItem("key");
  // console.log(savedData);
  inputForm.value = savedData;
});

deleteBtn.addEventListener("click", () => {
  localStorage.removeItem("key");
});
// deleteBtn.addEventListener("click", () => {
//   localStorage.clear();
// });

// ブラウザを閉じても残る（制限はない。sessionStorageを使うと期限を設定できる）
// 履歴はキーをそえろえれば上書きできる
// 削除は手動でも可能
