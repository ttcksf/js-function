const rectangle = document.querySelector(".rectangle");

document.querySelector(".button").addEventListener("click",onClickButton);

function onClickButton(){
  //0~359の間でランダムな数を取得
  const randomHue = Math.trunc(Math.random() * 360);
  //グラデーションの開始色と終了色を決定
  const randomColorStart = `hsl(${randomHue}, 100%, 50%)`;
  const randomColorEnd = `hsl(${randomHue + 40}, 100%, 50%)`;

  //長方形のグラデーションのための変数を変更
  rectangle.style.setProperty("--start", randomColorStart);
  rectangle.style.setProperty("--end", randomColorEnd);
}

const randomArray1 = crypto.getRandomValues(new Uint16Array(10));

let password1 = randomArray1.join("");

let password2 = crypto.getRandomValues(new Uint32Array(10)).join("");

console.log(password1);
console.log(password2);
