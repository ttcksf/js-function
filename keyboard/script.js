const text = document.querySelector(".text");
const string = document.querySelector(".string");
// text.addEventListener("keyup", () => {
//   const inputText = text.value;
//   string.innerHTML = inputText.length;
// });


text.addEventListener("keydown", (e) => {
  const key = e.keyCode;
  if(key === 39){
    console.log("右");
  }
  if(key === 37){
    console.log("左");
  }
  // if(key === 13){
  //   console.log("enter");
  // }
  if(e.shiftKey && e.key === "Enter"){
      console.log("shift enter");
  }
});

