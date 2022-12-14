const character = document.querySelector(".character");

let degree = 0;

loop();

function loop(){
  //回転させたい角度をラジアンで計算
  const rotation = (degree * Math.PI) / 180;
  //回転角を計算
  const targetX = window.innerWidth / 2 + 100 * Math.cos(rotation) - 50;
  const targetY = window.innerHeight / 2 + 100 * Math.sin(rotation) - 50;
  //characterの位置へ反映
  character.style.left = `${targetX}px`;
  character.style.top = `${targetY}px`;
  //角度を増やす
  degree += 1;
  //次の画面更新でloop
  requestAnimationFrame(loop);
}
