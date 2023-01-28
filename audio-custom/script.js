const music = document.querySelector("#music");

const btnStart = document.querySelector("#btn-play");
const btnStop = document.querySelector("#btn-stop");
btnStart.addEventListener("click", () => {
  music.play();
  // console.log(music.duration);
  // console.log(music.volume);
  // console.log(music.muted);
});
btnStop.addEventListener("click", () => {
  music.pause();
  // console.log(music.currentTime);
});
