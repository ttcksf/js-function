// モジュールを使うときはHTMLのscriptタグにtype="module"を追加しておく。読み込まれているかどうかは検証ツールのネットワークで確認できる
// モジュールのファイルでデフォルトであればデフォルトで、モジュールファイルに複数のデータや関数があり部分的に取りたい時はモジュールファイル側で全てにexportを付けておく
import loop2 from "./module.js";
import loop, { hello as sayHello, array, calc, Test } from "./module.js";
new Test();
console.log(array);
calc();
// loop;
loop();
console.log(sayHello);
