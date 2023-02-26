//クラスはclassを付けて任意の名前をつける。大文字から始めるのがルール
// class Test {}

// コンストラクターは初期化のタイミングで実行されるもので１つのクラスに1つしか作れない
class Test {
  // ①
  // constructor() {
  //   console.log("constructor");
  // }
  // constructor(val) {
  //   console.log(val);
  // }
  // ②
  // constructor() {
  //   this.author = "山田";
  // }
  // constructor(val) {
  //   this.author = val;
  // }
  // ③
  // constructor() {
  //   console.log("初期化");
  // }
  // hello() {
  //   console.log("hello");
  //   return "aaa";
  // }
  constructor() {
    console.log("初期化");
    this.author = "山田";
  }
  hello() {
    console.log("hello");
    return this.author;
  }
  static staticHello() {
    console.log(this.author);
  }
  // ④
  // constructor() {
  //   console.log("初期化");
  //   this.author = "山田";
  // }
  // static hello() {
  //   console.log("hello");
  // }
  // ⑤
  // constructor() {
  //   console.log("初期化");
  //   this.author = "山田";
  // }
  // hello() {
  //   console.log("hello");
  // }
}
// ⑤
class CopyTest extends Test {
  constructor() {
    super();
    // console.log(this);
  }
  copyHello() {
    super.hello();
    return this.author;
  }
}
// ①クラスを実行するときはnewをつける。引数を渡すこともできる。
// クラスを実行することをインスタンス化と呼び、インスタンス化しないとクラスの中のコンストラクター、変数、メソッドは使えない仕組み
// new Test();
// new Test(10);
// インスタンス化を変数に入れることをインスタンス変数という
// let test = new Test();

// ②クラスの変数はthisで宣言しておく
// let test = new Test();
// console.log(test.author);
// let test = new Test("田中");
// console.log(test.author);

// ③
// メソッドは()を付けて宣言し、returnがないとundefinedが戻り値になる
// クラスの中で宣言された変数をメソッドで使用することもできる。
// let test = new Test();
// console.log(test.hello());

// ④
// staticで宣言したメソッドはクラスをインスタンス化しなくても使える。クラス内の変数やコンストラクターに影響されないものが対象
// staticで宣言したメソッドはインスタンス化では使えない
// Test.staticHello();
// let test = new Test();
// console.log(test.hello());

// ⑤
// クラスを継承するときはextendsを使ってコンストラクターをsuper()にする
// 継承元のメソッドを使う時にはsuper.メソッド()とする
let copy = new CopyTest();
console.log(copy.copyHello());

let now = new Date();
console.log(now.getFullYear());
