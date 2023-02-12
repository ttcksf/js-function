// localStorageと違って文字列しか使えない（日本語はエンコードとデコードを繰り返す必要がある）
// localStorageと違ってサーバーサイドとも共有できる
const saveBtn = document.querySelector("#saveBtn");
const backBtn = document.querySelector("#backBtn");
const cookieResult = document.querySelector("#cookieResult");

saveBtn.addEventListener("click", () => {
  document.cookie = "id=1";
  document.cookie = "age=30";
  document.cookie = `name=${encodeURIComponent("山田")}`;
});

backBtn.addEventListener("click", () => {
  const result = converter(document.cookie);
  console.log(result);
});

function converter(cookie) {
  // console.log(cookie);
  // ;を削除して配列にする
  cookie = cookie.split(";");
  const obj = {};
  // console.log(cookie);

  cookie.map((item) => {
    const elem = item.split("=");
    // console.log(elem);
    const key = elem[0].trim();
    // console.log(key);
    const val = decodeURIComponent(elem[1]);
    // console.log(val);
    obj[key] = val;
  });

  return obj;
}
// 保存からやり直すときは手動で消しておく
