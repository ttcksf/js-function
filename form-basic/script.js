const inputText = document.querySelector("#inputText");
const inputResult = document.querySelector("#inputResult");
// console.log(inputText.value);
// inputText.value = "こんにちは";

// inputText.addEventListener("change", (e) => {
//   const value = e.target.value;
//   inputResult.innerHTML = value;
// });

const textArea = document.querySelector("#textArea");
const textAreaResult = document.querySelector("#textAreaResult");

// textArea.addEventListener("change", (e) => {
//   const value = e.target.value;
//   textAreaResult.innerHTML = value;
// });
// textArea.addEventListener("change", (e) => {
//   const value = e.target.value;
//   textAreaResult.innerHTML = value.split("\n").join("<br/>");
// });

const checkBox = document.querySelector("#checkBox");
// console.log(checkBox.checked);
// checkBox.checked = true;
const checkBoxResult = document.querySelector("#checkBoxResult");

// checkBox.addEventListener("change", (e) => {
//   const value = e.target.checked;
//   checkBoxResult.innerHTML = value;
// });

const form = document.querySelector("#form");
const inputRadioResult = document.querySelector("#inputRadioResult");
// console.log(form);
// form.addEventListener("change", (e) => {
//   const value = form.radio.value;
//   inputRadioResult.innerHTML = value;
// });

const select = document.querySelector("#select");
const selectResult = document.querySelector("#selectResult");
// select.addEventListener("change", (e) => {
//   const value = select.value;
//   selectResult.innerHTML = value;
// });

const inputFile = document.querySelector("#inputFile");
const inputFileResult = document.querySelector("#inputFileResult");
const inputFileImage = document.querySelector("#inputFileImage");
inputFile.addEventListener("change", (e) => {
  const value = e.target.files[0];
  inputFileResult.innerHTML = value.name;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    inputFileImage.src = reader.result;
  });
  reader.readAsDataURL(value);
});
