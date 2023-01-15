const box = document.querySelector(".box");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  if (box.classList.contains("show") === false) {
    box.classList.add("show");
  }
});
