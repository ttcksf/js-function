const inputSlider = document.querySelector("#inputSlider");
const inputSliderResult = document.querySelector("#inputSliderResult");

// inputSlider.value = 70;

// inputSlider.addEventListener("input", (e) => {
//   const value = e.target.value;
//   inputSliderResult.innerHTML = value;
// });
inputSlider.addEventListener("change", (e) => {
  const value = e.target.value;
  inputSliderResult.innerHTML = value;
});
