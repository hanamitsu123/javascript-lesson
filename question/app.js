// Q1 変数
let nickname = "みっつー";
let age = 29;
console.log("私のニックネームは" + nickname + "です。年齢は" + age + "歳です。");
// Q2 配列
let languages = ["JavaScript", "PHP", "Ruby", "Python", "Go"];
console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);
// Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);
// Q4 配列 × オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);
// Q5 四則演算
let ageAve = 0;
for(let i = 0; i < playerList.length; i++) {
ageAve += (playerList[i].age);
}
console.log(ageAve / playerList.length);
// Q6 関数
function sayHello() {
  console.log('Hello');
}
sayHello();
let sayWorld = function () {
  console.log('World');
}
sayWorld();
//Q7 メソッド
user.birthday = '2000-09-27';
user.sayHello = function () {
  console.log('Hello!');
}
user.sayHello();
//Q8 引数
let calc = {};
calc.add = function(x, y) {
  console.log(x + y);
}
calc.add(1, 6);
calc.subtract = function(x, y) {
  console.log(x - y);
}
calc.subtract(11, 1);
calc.multiply = function(x, y) {
  console.log(x * y);
}
calc.multiply(7, 7);
calc.divide = function(x, y) {
  console.log(x / y);
}
calc.divide(10, 2);
//Q9 返り値
function remainder(x, y) {
  console.log(`${x}を${y}で割ったあまりは${x%y}です。` );
}
remainder(10, 3);
//Q10 スコープ
// function foo() {
//   let x = 1;
// }
// console.log(x);
//fooメソッド内で定義している、xをスコープ外から参照しようとしているためエラーが出力されています。

//応用編 問題
//Q1 標準組み込みオブジェクト
console.log(Math.floor(Math.random(0,9)*10));
//Q2 コールバック関数
setTimeout(function (){console.log("Hello World")}, 3000);
//Q3 if
let num = 5;
if(num > 0){
  console.log("num is greater than 0");
}
if(num < 0){
  console.log("num is less than 0");
}
if(num === 0){
  console.log("num is 0");
}
//Q4 for
let numbers = [];
for(let i = 0; i < 100; i++){
  numbers[i] = i;
}
console.log(numbers);
//Q5 for × if
let mixed = [4, '2', 5, '8', '9', 0, 1];
for(let i = 0; i < mixed.length;i++){

  if (typeof(mixed[i]) == "string") {
    console.log(mixed[i] + ":"+ "not number");
    continue;
  }
  if (mixed[i] % 2 == 0) {
    console.log(mixed[i] + ":"+ "even");
    }
  if (mixed[i] % 2 !== 0) {
    console.log(mixed[i] + ":" + "odd");
  }
}
