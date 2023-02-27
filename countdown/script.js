const totalTime = 10000;
const startTime = Date.now();
const textArea = document.querySelector("#textArea");

const timerId = setInterval(() => {
  const currentTime = Date.now();

  //残り時間
  let countDownTime = totalTime - currentTime - startTime;

  countDownTime = Math.ceil(countDownTime / 1000);

  let text = `残り${countDownTime}秒です`;

  if (countDownTime <= 0) {
    clearInterval(timerId);
    text = "タイムアップ";
  }
  textArea.innerHTML = text;
}, 1000);
