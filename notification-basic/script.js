const btn = document.querySelector("#btn");
btn.addEventListener("click", notification);

// macはChromeのみ？
// Chromeの設定からプライバシー→サイトの設定→通知を許可しておく
// macはシステム設定からChromeの通知をオンにしておく
// シークレットモードでは起動しない

function notification() {
  switch (Notification.permission) {
    case "default":
      Notification.requestPermission();
      break;
    case "granted":
      new Notification("最新のニュースです！");
      break;
    case "denied":
      alert("通知が拒否されています");
      break;
  }
}
