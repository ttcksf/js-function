// let array = [1,2,3,4,5];

// array = array.filter((num) => num > 2);

// console.log(array);

const newsList = [
  {title: "aaa", year: 2019},
  {title: "bbb", year: 2020},
  {title: "ccc", year: 2019},
  {title: "ddd", year: 2021},
  {title: "eee", year: 2019},
];

document.querySelectorAll(".btn").forEach((data) => {
  data.addEventListener("click", (e) => {
    onClick(e);
  });
});

function onClick(e){
  //クリックされたボタン
  const button = e.target;
  //ボタン要素からdata-yearを取得
  const year = button.dataset.year;

  const filteredList = newsList.filter((news) => news.year == year);

  renderList(filteredList);
}

function renderList(filteredList){
  let list = "";
  for(const filtered of filteredList){
    list += `<li>${filtered.title}</li>`;
  }
  document.querySelector(".list").innerHTML = list;
}

