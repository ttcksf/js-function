// fetch("test.txt")
//   .then((data) => data.text())
//   .then((res) => console.log(res));

// console.log("done");

// fetch("test.txt")
//   .then((data) => data.text())
//   .then((res) => console.log(res));

// async function fetchData() {
//   const data = await fetch("test.txt");
//   console.log(data);
//   const res = await data.text();
//   console.log(res);
// }
// fetchData();

// fetch("data.json")
//   .then((data) => data.json())
//   .then((res) => console.log(res));

// async function fetchData() {
//   const data = await fetch("data.json");
//   console.log(data);
//   const res = await data.json();
//   console.log(res);
// }
// fetchData();

fetch("../images/image.png")
  .then((data) => data.blob())
  .then((res) => {
    const image = new Image();
    console.log(image);
    // image.src = URL.createObjectURL(res);
    // document.body.appendChild(image);
  });
