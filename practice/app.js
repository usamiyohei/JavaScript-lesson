let text = 'JavaScriptの練習';
console.log(text);
text = 'JavaScriptをマスターした';
console.log(text);

console.log('eleophant');
// console.log(elephant);

let name = 'ジョニー';
let greet = '私は' + name + '!';
console.log(greet);

let numTen = 10;
let strTen = '10';
console.log(numTen,strTen);

let num1 = 25;
let num2 = 2;

console.log(num1 + num2);

let names = ['john','Bob','Michael','Emma'];

console.log('names[0] => ',names[0]);
console.log('names[1] => ', names[1]);
console.log('names[2] => ', names[2]);
console.log('names[3] => ', names[3]);
console.log('names.length => ', names.length);

let john = {
  name:'john',//key(キー)：value(バリュー)このセットをプロパティと呼ぶ
  age:26,
  bloodType:'A',
  favorite:'card',
  sing:function(){
    console.log('LA~LA~LA~~~♪');
  }
};

john.sing();

console.log(john.bloodType);

let one = '1';
let two = 2;

console.log('one →', typeof one, one); // one → string 1
console.log('two →', typeof two, two); // one → number 2

function getArea() {
  let radius = 2;
  let circle = radius * radius * 3.14;
  console.log('円の面積は' + circle + 'です');
}

getArea()

function getArea(radius){
  let circle = radius * radius * 3.14;
  console.log('円の面積は' + circle + 'です');
}

getArea(5);

function getArea(radius){
  let circle = radius * radius * 3.14;
  return circle;

}

console.log('円の面積は' + getArea(5) + 'です');

function doFunc(callback){
  console.log('doFuncが呼び出されました');
  callback();
}
doFunc(function(){
  console.log('コールバック関数が呼び出されました');
});

let round = Math.round(2.86); // 四捨五入
console.log('round => ', round);

let ceil = Math.ceil(4.05);   // 切り上げ
console.log('ceil => ', ceil);

let floor = Math.floor(4.98); // 切り下げ
console.log('floor => ', floor);

let random = Math.random(); // 0~1までの乱数の生成
console.log('random => ', random);

if(true){
  console.log('trueです!');
}
console.log('処理が終わりました');

let tall = 185;
if(tall >=180){
  console.log('高身長です');
}

let val = 26;
console.log(val >= 20);
console.log(val === '26');
console.log(val == '26');
console.log('hello' === 'world');

let signal = 'red';
if (signal === 'red') {
  console.log('赤信号です。止まりましょう');
} else if (signal === 'blue') {
  console.log('青信号です。進みましょう');
} else if (signal === 'yellow') {
  console.log('黄色信号です。空気を読みましょう');
}

let loto = 7;

if (loto === 7 || loto === 8) {
  console.log('当たり');
} else {
  console.log('ハズレ');
}

let userA = '到着';
let userB = '不在';

if (userA === '到着' && userB === '到着') {
  console.log('全員揃ったので出発します。');
} else {
  console.log('揃っていないため、出発できません。');
}

console.log(userA === '到着' && userB === '到着');

let errMsg = '';

// if 文を使った書き方
if (errMsg === '') {
    console.log('ない！');
} else {
    console.log('ある！');
}

// 三項演算子を使った書き方
errMsg === '' ? console.log('ない！') : console.log('ある！');

for(let i = 0; i < 10; i++) {
  console.log(i+ '回目のコンソール');
}

let numbers = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;

for (let i = 0; i < numbers.length; i++){
  sum += numbers[i];
}

console.log(sum);