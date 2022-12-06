const textarea = document.querySelector(".textarea");

const string_num = document.querySelector(".string_num");

textarea.addEventListener("keyup",onkeyup);

function onkeyup(){
  const inputText = textarea.value;
  string_num.innerHTML = inputText.length;
  // string_num.innerHTML = Array.from(inputText).length;
}
