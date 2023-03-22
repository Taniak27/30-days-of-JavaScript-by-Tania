//DAY_2

//LEVEL_1

//Task_1
let challenge = '30 Days Of JavaScript'

//Task_2
console.log(challenge);
// 30 Days Of JavaScript

//Task_3
console.log(challenge.length);
// 21

//Task_4
console.log(challenge.toUpperCase());
// 30 DAYS OF JAVASCRIPT

//Task_5
console.log(challenge.toLowerCase());
// 30 days of javascript

//Task_6
console.log(challenge.substring(0, 2));
// 30


//Task_7
console.log(challenge.substring(3, 21));
// Days Of JavaScript

//Task_8
console.log(challenge.includes('Script'));
// true

//Task_9
console.log(challenge.split(""));
/* [
  '3', '0', ' ', 'D', 'a',
  'y', 's', ' ', 'O', 'f',
  ' ', 'J', 'a', 'v', 'a',
  'S', 'c', 'r', 'i', 'p',
  't'
]
*/

//Task_10
console.log(challenge.split(" "));
// [ '30', 'Days', 'Of', 'JavaScript' ]

//Task_11
let socialNetworks = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

console.log(socialNetworks.split());
//[ 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' ]

//Task_12
console.log(challenge.replace("JavaScript", "Python"));
// 30 Days Of Python

//Task_13
console.log(challenge.charAt(15));
//S

//Task_14
console.log(challenge.charCodeAt('J'));
// 51

//Task_15
console.log(challenge.indexOf('a'));
//4

//Task_16
console.log(challenge.lastIndexOf('a'));
//14

//Task_17
let stringOne = 'You cannot end a sentence with because because because is a conjunction'
console.log(stringOne.indexOf('because'));
// 31

//Task_18
console.log(stringOne.lastIndexOf('because'));
//47

//Task_19
console.log(stringOne.search('because'));
//31

//Task_20
console.log(challenge.trim());
// 30 Days Of JavaScript

//Task_21
console.log(challenge.startsWith('30'));
// true

//Task_22
console.log(challenge.endsWith('JavaScript'));
// true

//Task_23
console.log(challenge.match('a'));
// [ 'a', index: 4, input: '30 Days Of JavaScript', groups: undefined ]

//Task_24
let phraseOne = '30 Days of'

console.log(phraseOne.concat(' JaveScript'));
// 30 Days of JaveScript

//Task_25
console.log(challenge.repeat(2));
// 30 Days Of JavaScript30 Days Of JavaScript

//LEVEL_2

//Task_1
let text = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."

console.log(text);

// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

//Task_2
let textTwo = "'Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.'"

console.log(textTwo);

// 'Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.'

//Task_3
console.log(typeof 10);
// number

//Task_4
let num = '9.8'
let numFloat = parseFloat(num)

console.log(numFloat);
//9.8

//Task_5
let phrOne = 'python'
let phrTwo = 'jargon'

console.log(phrOne.endsWith('on'));
console.log(phrTwo.endsWith('on'));
// true
// true

//Task_6
let phrThree = 'I hope this course is not full of jargon.'

console.log(phrThree.search('jargon'));
// 34

//Task_7
let randomNum = Math.floor(Math.random() * 100) + 1 
console.log(randomNum);
// 86

//Task_8
let randomNumSec = Math.floor((Math.random() * 100) + 50) 
console.log(randomNumSec);
// 61

//Task_9
let randomNumTh = Math.floor((Math.random() * 255) + 0) 
console.log(randomNumTh);
// 213

//Task_10
let str = 'JavaScript'
let randomNumF = Math.floor((Math.random() * str.length) + 0)
console.log(randomNumF);
// 1

//Task_11
console.log('1\t1\t1\t1\t1');
console.log('2\t1\t2\t4\t8');
console.log('3\t1\t3\t9\t27');
console.log('4\t1\t4\t16\t64');
console.log('5\t1\t5\t25\t125');

/*
1	1	1	1	1
2	1	2	4	8
3	1	3	9	27
4	1	4	16	64
5	1	5	25	125
*/

//Task_12 
let str1 = stringOne.substring(0, 30)
let str2 = stringOne.substring(54, 71)
let str3 = str1 + str2
 
console.log(str3);
// You cannot end a sentence with is a conjunction

//LEVEL_3

//Task_1
 let loveStr = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
 let pattern = /love/gi
 console.log(loveStr.match(pattern));
 // 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 

 //Task_2
 let patternTwo = /because/gi
 console.log(stringOne.match(patternTwo));

 // [ 'because', 'because', 'because' ]

 //Task_3
 const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
 let newSentence = sentence.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')



 // I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher This 30DaysOfJavaScript is also the result of love of teaching

 //Task_2
 let sentence2 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
 let numbers = sentence2.match(/\d+/g)
 let totalIncome = (Number(numbers[0]) * 12 + Number(numbers[1]) + Number(numbers[2]) * 12)
 console.log(totalIncome); 
// 250000
