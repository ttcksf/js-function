const text = document.querySelector(".text");
text.style.color = "red";
text.style.fontSize = "50px";

textStyle = getComputedStyle(text);
textStyle = getComputedStyle(text).color;
textStyle = getComputedStyle(text).fontSize;
console.log(textStyle);
