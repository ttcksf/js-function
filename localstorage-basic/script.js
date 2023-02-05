const container = document.querySelector("#container");
const saveBtn = document.querySelector("#saveBtn");
const backBtn = document.querySelector("#backBtn");
const inputForm = document.querySelector("#inputForm");

saveBtn.addEventListener("click", () => {
  const inputData = inputForm.value;
  // console.log(inputData);
  localStorage.setItem("key1", inputData);
  inputForm.value = "";
});

backBtn.addEventListener("click", () => {
  const savedData = localStorage.getItem("key1");
  // console.log(savedData);
  inputForm.value = savedData;
});

// ブラウザを閉じても残る（制限はない。sessionStorageを使うと期限を設定できる）
