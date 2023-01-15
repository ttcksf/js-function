const searchWordText = document.querySelector("#search-word-input");

const prefectureList = document.querySelectorAll("#prefecture-list button");

searchWordText.addEventListener("keyup",() => {
  const searchWord = searchWordText.value;

  prefectureList.forEach((el) => {
    if(!searchWord || searchWord === ""){
      el.classList.remove("hide");
      return;
    }

    const prefectureName = el.dataset.name;
    const phonetic = el.dataset.phonetic;

    if(searchWord.charAt(0) === prefectureName.charAt(0) || searchWord.charAt(0) === phonetic.charAt(0)){
      el.classList.remove("hide");
    }else{
      el.classList.add("hide");
    }
  });
});

