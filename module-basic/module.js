export class Test {
  constructor() {
    console.log("testクラスです");
  }
}
export const array = [1, 2, 3, 4];
export function calc() {
  let result = 1 + 2;
  console.log(result);
}

function loop() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

export const hello = "hello";

// export default loop();
export default loop;
