// const text = document.querySelector(".text");
// text.textContent = "おはよう";

// const text = document.querySelector(".text");
// text.innerHTML = "おはよう";
// text.innerHTML = "<span>おはよう</span>";
// text.textContent = "<span>おはよう</span>";

const container = document.querySelector(".container");
// console.log(container);
// const attr = container.getAttribute("class");
// console.log(attr);
// container.setAttribute("id","container");

// container.classList.add("test");
// container.classList.remove("test");
// console.log(container);


const btn = document.querySelector(".btn");
btn.addEventListener("click",() => {
  btn.classList.toggle("active");
  console.log(btn);
})
