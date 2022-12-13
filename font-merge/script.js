const text1 = "おはよう";
const text2 = "ございます";
console.log("おはよう" + text2);
console.log(`${text1}${text2}`);

const familyName = document.querySelector("#family");

const firstName = document.querySelector("#first");

const fullName = document.querySelector("#full");

firstName.addEventListener("keyup", keyup);

familyName.addEventListener("keyup", keyup);

function keyup(){
  const familyNameValue = familyName.value;
  const firstNameValue = firstName.value;

  fullName.innerHTML = `${familyNameValue}　${firstNameValue}`;
}
