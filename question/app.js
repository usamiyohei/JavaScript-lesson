
// Q1
let name = 'ゴッシー';
let age = '28';
let greet = '私のニックネームは' + name +'です。年齢は' +  age + '歳です。';

console.log(greet);
//Q2
let languages = ['JavaScript','PHP','Ruby','Python','Go']
let language = `私の好きな言語は${languages[0]}です。
次は${languages[3]}を勉強してみたいです。`
console.log(language)

// Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

// Q4
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

// Q5
let ave =
 (playerList[0].age +
  playerList[1].age +
  playerList[2].age) / 3

  console.log (ave);

// Q6
function sayHello(){
  console.log('Hello')
}
 sayHello();

 const sayWorld = function(){
    console.log('World');
 };
 sayHello();

// Q7
user.birthday = '2000-09-27';

user.sayHello = function(){
  console.log('Hello');
};

// Q8
let calc = {};

calc.add = function(x,y){
  console.log(x + y);
};

calc.subtract = function(x,y){
  console.log(x - y);
};

calc.multiply = function(x,y){
  console.log(x * y);
};

calc.divide = function(x,y){
  console.log(x / y);
};

calc.add(3,4);
calc.subtract(30,20);
calc.multiply(7,7);
calc.divide(10,2);

//Q9
function remainder(x,y){
  return x % y;
}
let result = remainder(5,3);
console.log('5を3で割った余りは' + result + 'です。')

//Q10
// xは関数内で定義された変数であり、スコープが関数内に限定されている。
// そのため関数の外からxを参照することはできずエラーが出力される。
// 関数内のみ参照するスコープをローカル関数、関数外でも参照できるスコープを
// グローバル関数という。


// 応用問題
// Q1
console.log(Math .floor(Math.random() * 10));

// Q2
setTimeout (function(){
  console.log('Hello World!')
},3000);

// Q3
let num = -1;

if (num > 0){
  console.log('num is greater then 0');
}else if ('num < 0'){
  console.log('num is less than0');
}else{
  console.log('num is 0');
}
// Q4
let numbers =[];
for(let i = 0; i< 100; i++ ){
  numbers.push(i);
}

console.log(numbers);

//Q5
let mixed = [4,'2',5,'8','9',0,1];
for (let i = 0; i < mixed.length; i++) {
  let value = mixed[i];

  if (typeof value === 'number') {
    if (value % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('not number');
  }
}