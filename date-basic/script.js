let now = new Date();
let y = now.getFullYear();
// ０を起点にしているため１を加算する
// const m = now.getMonth();
let m = now.getMonth() + 1;
let d = now.getDate();
// 曜日は０〜６の数字になる
let ddList = ["月", "火", "水", "木", "金", "土", "日"];
let dd = now.getDay();
dd = ddList[dd];
let h = now.getHours();
let mm = now.getMinutes();
let s = now.getSeconds();

console.log(now);
console.log(y);
console.log(m);
console.log(d);
console.log(dd);
console.log(h);
console.log(mm);
console.log(s);

console.log(`${y}年${m}月${d}日${dd}曜日${h}時${mm}分${s}秒`);
// 日本式の表示
console.log(now.toLocaleString());

let day1 = new Date("2022/12/13");
let day2 = new Date("2022/12/26");
// 計算しやすいミリ秒に変換
day1 = day1.getTime();
day2 = day2.getTime();
// 1日＝24時間、1時間＝60分、1分＝60秒、1秒＝1,000m秒
console.log((day2 - day1) / (24 * 60 * 60 * 1000));
console.log((day2 - day1) / (60 * 60 * 1000));
console.log((day2 - day1) / (60 * 1000));
