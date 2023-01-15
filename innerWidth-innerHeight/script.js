// const w = window.innerWidth;
// const h = window.innerHeight;
// console.log(w);
// console.log(h);
// const dpr = window.devicePixelRatio;
// console.log(dpr);

window.addEventListener("resize", (e) => {
  const w = innerWidth;
  const h =innerHeight;
  document.querySelector(".width").innerHTML = w;
  document.querySelector(".height").innerHTML = h;
})
