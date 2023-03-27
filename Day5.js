//DAY_5

//LEVEL_1

//Task_1 
let arr = []
console.log(arr);
// []

//Task_2
let newArr = ['apple', 'banana', 'orange', 'cherry', 'kiwi', 'pineapple'];
console.log(newArr);
// [ 'apple', 'banana', 'orange', 'cherry', 'kiwi', 'pineapple' ]

//Task_3
console.log('Number of fruits:', newArr.length);
// Number of fruits: 6

//Task_4
let firstFruit = newArr[0];
let middleFruit = newArr[2];
let lastFruit = newArr[5];

console.log(firstFruit, middleFruit, lastFruit);
// apple orange pineapple

//Task_5
let mixedDataTypes = ['Tania', 27, true, {characteristic1: 'kind', characteristic2:'clever'} ];
console.log(mixedDataTypes.length);
// 4

//Task_6
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//Task_7
console.log(itCompanies);
/* [
  'Facebook', 'Google',
  'Microsoft', 'Apple',
  'IBM',      'Oracle',
  'Amazon'
]
*/

//Task_8

console.log(itCompanies.indexOf('Facebook'));
// 0
console.log(itCompanies.indexOf('Google'));
// 1
console.log(itCompanies.indexOf('Microsoft'));
// 2
console.log(itCompanies.indexOf('Apple'));
// 3
console.log(itCompanies.indexOf('IBM'));
// 4
console.log(itCompanies.indexOf('Oracle'));
// 5
console.log(itCompanies.indexOf('Amazon'));
// 6

//Task_9
console.log('The first company:', itCompanies[0]);
// The first company: Facebook
console.log('The middle company:', itCompanies[3]);
// The middle company: Apple
console.log('The last company:', itCompanies[6]);
// The last company: Amazon

//Task_10
console.log('The first company:', itCompanies[0]);
// The first company: Facebook
console.log('The second company:', itCompanies[1]);
// The second company: Google
console.log('The third company:', itCompanies[2]);
// The third company: Microsoft
console.log('The fourth company:', itCompanies[3]);
// The fourth company: Apple
console.log('The fifth company:', itCompanies[4]);
// The fifth company: IBM
console.log('The sixth company:', itCompanies[5]);
// The sixth company: Oracle
console.log('The seventh company:', itCompanies[6]);
// The seventh company: Amazon

//Task_11
console.log(itCompanies[0].toUpperCase());
// FACEBOOK
console.log(itCompanies[1].toUpperCase());
// GOOGLE
console.log(itCompanies[2].toUpperCase());
// MICROSOFT
console.log(itCompanies[3].toUpperCase());
// APPLE
console.log(itCompanies[4].toUpperCase());
// IBM
console.log(itCompanies[5].toUpperCase());
// ORACLE
console.log(itCompanies[6].toUpperCase());
// AMAZON

//Task_12
console.log(itCompanies.join(', '), 'are big IT companies.');
// Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon are big IT companies.

//Task_13
if (itCompanies.includes('AVK')){
  console.log('Such company exists')
} else {
console.log('It is not found');
}
// It is not found

//Task_14

let oo = []
for (let i = 0; i < itCompanies.length; i++) {
  oo.push(itCompanies[i].includes('oo'));
}
console.log(oo);
/*
[
  true,  true,
  false, false,
  false, false,
  false
]
*/

//Task_15
console.log(itCompanies.sort());
/* [
  'Amazon',
  'Apple',
  'Facebook',
  'Google',
  'IBM',
  'Microsoft',
  'Oracle'
]
*/

//Task_16
console.log(itCompanies.reverse());
/* 
[
  'Oracle',
  'Microsoft',
  'IBM',
  'Google',
  'Facebook',
  'Apple',
  'Amazon'
]
*/

//Task_17
//console.log(itCompanies.slice(0, 3));
// [ 'Oracle', 'Microsoft', 'IBM' ]

//Task_18
//console.log(itCompanies.slice(4, 7));
// [ 'Facebook', 'Apple', 'Amazon' ]

//Task_19
//console.log(itCompanies.slice(3, 4));
// [ 'Google' ]

//Task_20
//console.log(itCompanies.splice(0,1));
// [ 'Oracle' ]

//Task_21
//console.log(itCompanies.slice(3, 4));
// [ 'Google' ]

//Task_22
//console.log(itCompanies.pop());
// Amazon

//Task_23
//console.log(itCompanies.splice());
// []

//LEVEL_2

//Task_2
//console.log(countries);
//console.log(web_techs);

let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python."
let words = text.split(' ');
console.log(words);
console.log(words.length);
/*
[
  'I',          'love',
  'teaching',   'and',
  'empowering', 'people.',
  'I',          'teach',
  'HTML,',      'CSS,',
  'JS,',        'React,',
  'Python.'
]
*/
// 13

//Task_3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat')
console.log(shoppingCart);
// [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey' ]

shoppingCart.push('Sugar');
console.log(shoppingCart);
// [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar' ]

shoppingCart[shoppingCart.indexOf("Tea")] = "Green tea";
console.log(shoppingCart);
// [ 'Meat', 'Milk', 'Coffee', 'Green tea', 'Honey', 'Sugar' ]

//Task_4 in countries.js

//Task_5 in web_techs.js

//Task_6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)

console.log(fullStack);
/* 
[
  'HTML',    'CSS',
  'JS',      'React',
  'Redux',   'Node',
  'Express', 'MongoDB'
]
*/

//LEVEL_3

//Task_1

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

console.log(Math.min.apply(Math, ages));
// 19

console.log(Math.max.apply(Math, ages));
// 26

const average = ages.reduce((a, b) => a + b, 0) / ages.length;

console.log(average);
// 22.8

let range = max - min
let min = Math.min.apply(Math, ages);
let max = Math.max.apply(Math, ages);

console.log(Math.max.apply(Math, ages) - Math.min.apply(Math, ages));
