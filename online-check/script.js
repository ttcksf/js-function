const isOnline = navigator.onLine;
// console.log(isOnline);

// if(isOnline === true){
//   console.log("インターネットに接続中です");
// }else{
//   console.log("インターネットから切断されました");
// }

//リロードなし
window.addEventListener("online", () => {
  // console.log("インターネットに接続中です");
  document.querySelector(".results").innerHTML = "インターネットに接続中です";
});
window.addEventListener("offline", () => {
  // console.log("インターネットから切断されました");
  document.querySelector(".results").innerHTML = "インターネットから切断されました";
});
