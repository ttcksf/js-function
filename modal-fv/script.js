const modalImg = document.querySelectorAll(".modal-img");

modalImg.forEach((item) =>
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  })
);
