const container = document.querySelector(".container");

btn.addEventListener("click", () => {
  if (container.classList.contains("show") === false) {
    container.classList.add("show");
  }
});
