const inputPass = document.querySelector("#inputPass");
const btn = document.querySelector("#btn");

btn.addEventListener("click", createPass);

function createPass() {
  //文字の素材
  const str = "0123456789abcdefghijklmnopqrstuvwxyz";
  // パスワードの長さは16文字
  const passLength = 8;
  let password = "";
  for (let i = 0; i < passLength; i++) {
    // strの中から切り取る文字の場所をselectedとする
    let selected = Math.floor(Math.random() * str.length);
    // console.log(Math.random());
    // console.log(str.length);
    // 小数点の乱数×候補の数
    // console.log(Math.random() * str.length);
    // 計算結果を整数にする
    // console.log(Math.floor(Math.random() * str.length));
    // passwordにstrから切り取った位置にある文字を右に足していく(substringの引数は開始位置と切り取る桁数)
    // const str1 = "Hello";
    // console.log(str1.substring(0, 1));
    password += str.substring(selected, selected + 1);
  }
  inputPass.value = password;
}
