function func(val) {
  if (val > 20) {
    const error = new Error("エラーです");
    // これがないとプログラムが止まっているがエラーが表示されない
    throw error;
  } else {
    console.log(val);
  }
  // エラーになると後続の処理は実行されない
  console.log("関数のコンソールです");
}
// func(30);
// func(100);

const num = 100;
function tryFunc() {
  try {
    // console.log(num);
    num = num + 1;
  } catch (error) {
    // console.log(error);
    console.error(error);
    return;
  } finally {
    // catch内でreturnされても実行される
    console.log("ファイナリーのコンソールです");
  }
  // エラーになっても後続の処理は実行されるがfinallyに書くのがルール
  // ただcatch内でreturnされると後続の処理は実行されない
  console.log("関数のコンソールです");
}
tryFunc();
