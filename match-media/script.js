//リロードあり
// const media = matchMedia("(min-width: 429px)");
// const media = matchMedia("(min-width: 429px) and (max-width: 1025px)").matches;
//スマホの傾き
// const media = matchMedia("(orientation: portrait)").matches;
// console.log(media);

const results = document.querySelector(".results");
const media = matchMedia("(min-width: 429px)");
media.addListener(mediaChange);

function mediaChange(media){
  if(media.matches === false){
    results.innerHTML = "スマホです";
  }else{
    results.innerHTML = "パソコンです";
  }
};
mediaChange(media);

