const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  switch (Notification.permission) {
    case "default":
      Notification.requestPermission();
      break;
    case "granted":
      new Notification("こんにちは");
      break;
    case "denied":
      alert("通知が拒否されています");
      break;
  }
});
