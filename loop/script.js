for(let i = 0; i < 10; i++){
  if(i % 2 === 0){
    continue;
  }
  console.log(i);
};
console.log("done");

function myFunction(flgA){
  for(let i = 0; i < 10; i++){
    if(flgA === true){
      if(i % 2 !== 0){
        console.log(i);
      }
    }
  }
}
myFunction(true);

// function myFunction(flgA){
//   for(let i = 0; i < 10; i++){
//     if(flgA === false){
//       continue;
//     }
//     if(i % 2 === 0){
//       continue;
//     }
//     console.log(i);
//   }
// }
// myFunction(true);
