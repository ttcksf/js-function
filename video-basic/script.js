const movie = document.querySelector("#movie");
const btnStart = document.querySelector("#btn-play");
const btnStop = document.querySelector("#btn-stop");

btnStart.addEventListener("click", () => {
  movie.play();
});
btnStop.addEventListener("click", () => {
  movie.pause();
});
