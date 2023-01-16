const inputColor = document.querySelector("#inputColor");
const inputColorResult = document.querySelector("#inputColorResult");

// inputColor.value = "#333";

inputColor.addEventListener("change", (e) => {
  const value = e.target.value;
  inputColorResult.innerHTML = value;
  inputColorResult.style.backgroundColor = value;
});
