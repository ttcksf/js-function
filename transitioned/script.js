const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  if (container.classList.contains("show") === false) {
    container.classList.add("show");
  }
});

// btn.textContent = "変わった！";

container.addEventListener("transitionend", (e) => {
  btn.textContent = "変わった！";
});
