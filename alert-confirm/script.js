// const btn = document.querySelector("button");

// btn.addEventListener("click", (e) => {
//   // alert("クリックされました");
//   const log = alert("クリックされました");
//   //undefinedが返される
//   document.querySelector(".result").innerHTML = log;
// });

// const btn = document.querySelector("button");

// btn.addEventListener("click", (e) => {
//   const log = confirm("許可しますか？");
//   // trueかfalseが返される
//   document.querySelector(".result").innerHTML = log;
// });

const btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
  const pass = prompt("パスワードを入力してください","");
  document.querySelector(".result").innerHTML = pass;
})
