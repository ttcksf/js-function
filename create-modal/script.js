const btn = document.querySelector(".btn");
const modal = document.createElement("div");
modal.classList.add("modal");
const inner = document.createElement("div");
inner.classList.add("inner");
modal.appendChild(inner);
btn.addEventListener("click", () => {
  document.body.appendChild(modal);
})

inner.addEventListener("click", () => {
  document.body.removeChild(modal);
})
