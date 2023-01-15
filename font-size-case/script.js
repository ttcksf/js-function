// let text = "AAA";
// text = text.toLowerCase();
// text = text.toUpperCase();
// console.log(text);

const inputName = document.querySelector("#name");
const accountName = document.querySelector("#account")

inputName.addEventListener("keyup", keyup);

function keyup (){
  const value = inputName.value;
  accountName.innerHTML = value.toLowerCase();
}
