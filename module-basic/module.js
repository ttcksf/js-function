export const hello = "hello";
export class Test {
  constructor() {
    console.log("Testクラスです");
  }
}
export const array = [1, 2, 3, 4];

export function calc() {
  let result = 1 + 2;
  console.log(`calcの結果:${result}`);
}

function loop() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

export default loop;
