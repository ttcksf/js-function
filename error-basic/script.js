function func(val) {
  if (val > 20) {
    const error = new Error("エラーです");
    // これがないとプログラムが止まっているがエラーが表示されない
    // throw error;
    throw error;
  } else {
    console.log(val);
  }
  // エラーになると後続の処理は実行されない
  console.log("aaa");
}
// func(1);
// func(100);

const num = 100;
function tryFunc() {
  try {
    // num = num + 1; 正常版はコメントアウト
    num = num + 1;
  } catch (error) {
    // console.log(error);
    console.error(error);
    // return;
  } finally {
    // catch内でreturnされても実行される
    console.log("ファイナリーのコンソールです");
  }
  // エラーになっても後続の処理は実行されるがfinallyに書くのがルール
  // ただcatch内でreturnされると後続の処理は実行されない
  console.log("関数のコンソールです");
}
tryFunc();
