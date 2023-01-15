// const array = ["鈴木","田中","高橋","後藤"];
// //配列で条件を満たす最初の要素を取得
// const user = array.find((el) => {
//   return el === "田中"
// });
// console.log(user);

const students = [
  {id: 0001, name: "山田"},
  {id: 0002, name: "野村"},
  {id: 0003, name: "橋本"},
];
const searchInput = document.querySelector("#search-input");
const searchResult = document.querySelector("#search-result");

searchInput.addEventListener("keyup", (e) => {
  const studentId = Number(e.target.value);
  findStudent(studentId);
});

function findStudent(studentId){
  const results = students.find((data) => data.id === studentId);
  if(results == null){
    searchResult.textContent = "なし";
    return;
  }
  //こちらの1行を追加
  console.log(results);
  searchResult.textContent = results.name;
}
