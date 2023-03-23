//DAY_3

//LEVEL_1

//Task_1

let firstName = 'Tania'
let lastName = 'Kuzmenko'
let country = 'Ukraine'
let city = 'Odessa'
let age = 27
let isMarried = false
let year = 2023

console.log(typeof firstName);
// string
console.log(typeof lastName);
// string
console.log(typeof country);
// string
console.log(typeof city);
// string
console.log(typeof age);
// number
console.log(typeof isMarried);
// boolean
console.log(typeof year);
// number


//Task_2
let numb = '10'
let result = numb === 10

console.log(result);

//false

//Task_3
let numb1 = parseInt('9.8')
let result2 = numb === 10

console.log(result2);

// false

//Task_4
let trueValue1 = 10 === 10
console.log(trueValue1);
// true
let trueValue2 = 1 == true
console.log(trueValue2);
// true
let trueValue3 = false == 0
console.log(trueValue3);
// true

let falseValue1 = 1 === true
console.log(falseValue1);
// false
let falseValue2 = 23 === '23'
console.log(falseValue2);
// false
let falseValue3 = ' ' === undefined
console.log(falseValue3);
// false

//Task_5

let problem1 = 4 > 3
console.log(problem1);
// true

let problem2 = 4 >= 3
console.log(problem2);
// true

let problem3 = 4 < 3
console.log(problem3);
// false

let problem4 = 4 <= 3
console.log(problem4);
// false

let problem5 = 4 == 4
console.log(problem5);
// true

let problem6 = 4 === 4
console.log(problem6);
// true

let problem7 = 4 != 4
console.log(problem7);
// false

let problem8 = 4 !== 4
console.log(problem8);
// false

let problem9 = 4 != '4'
console.log(problem9);
// false

let problem10 = 4 == '4'
console.log(problem10);
// true

let problem11 = 4 === '4'
console.log(problem11);
// false

let problem12 = 'python'.length
let problem13 = 'jargon'.length

console.log(problem12 > problem13);
// false


//Task_6

let prb1 = 4 > 3 && 10 < 12
console.log(prb1);
// true

let prb2 = 4 > 3 && 10 > 12
console.log(prb2);
// false

let prb3 = 4 > 3 || 10 < 12
console.log(prb3);
// true

let prb4 = 4 > 3 || 10 > 12
console.log(prb4);
// true

let prb5 = !(4 > 3)
console.log(prb5);
// false

let prb6 = !(4 < 3)
console.log(prb6);
// true

let prb7 = !(false)
console.log(prb7);
// true

let prb8 = !(4 > 3 && 10 < 12)
console.log(prb8);
// false

let prb9 = !(4 > 3 && 10 > 12)
console.log(prb9);
// true

let prb10 = !(4 === '4')
console.log(prb10);
// true

let prb11 = 'dragon and python'
console.log(!prb11.includes('on'));
// false

//Task_7
const now = new Date()
console.log(now.getFullYear());
// 2023

const now2 = new Date()
console.log(now2.getMonth());
// 2

const now3 = new Date()
console.log(now3.getDate());
// 23

const now4 = new Date()
console.log(now4.getDay());
// 4

const now5 = new Date()
console.log(now5.getHours());
// 12

const now6 = new Date()
console.log(now6.getMinutes());
// 7

const now7 = new Date()
console.log(now7.getMinutes());

var now8 = new Date();
var dateDay = new Date(1970, 1, 1);
var elapsedT = now8 - dateDay; 
console.log(elapsedT);
// 1676898768793

//LEVEL_2

//Task_1

let b = 20
let h = 10
const areaOfTriangle = 0.5 * b * h

console.log(areaOfTriangle);
// 100


//Task_2

let a = 5
let b1 = 4
let c = 3
const perimeter = a + b1 + c

console.log(perimeter);
// 12

//Task_3

let length = parseInt(prompt('Enter the length of rectangle')); 
let width = parseInt(prompt('Enter the width of rectangle')); 
const areaOfRectangle = length * width;

alert(areaOfRectangle);


let length = parseInt(prompt('Enter the length of rectangle')); 
let breadth = parseInt(prompt('Enter the breadth of rectangle')); 
const perimeterOfRectangle = length + breadth + length + breadth;

alert(perimeterOfRectangle);


//Task_4

const pi = 3.14;
let r = parseInt(prompt('Enter the radius of circle'));
const areaOfCircle = pi * r * r;

alert(Math.floor(areaOfCircle));


//Task_5

let x = parseInt(prompt('Enter the slope of circle'))
const slope = x * x - 2

alert(slope);


//Task_6

let y1 = parseInt(prompt('Enter the y1 of circle'));
let y2 = parseInt(prompt('Enter the y2 of circle'));
let x1 = parseInt(prompt('Enter the x1 of circle'));
let x2 = parseInt(prompt('Enter the x2 of circle'))
const m = (y2 - y1) / (x2 - x1)

alert(m);


//Task_7

console.log(slope === m);
// false

//Task_8

let x = parseInt(prompt('Enter the x'))
const y = x * x + 6 * x + 9

alert(y);


//Task_9

let ratePerHour = parseInt(prompt('Enter your rate per hour, please'));
let hours = parseInt(prompt('Enter your working hours, please'));
const weeklyEarning = ratePerHour * hours;

alert(weeklyEarning);


//Task_10

let myName = 'Tatiana';
let lengthOfMyName = myName.length;
lengthOfMyName >= 7
  ? console.log('You have a long name')
  : console.log('Your name is short')

// You have a long name

// Task_11

let myFirstName = "Tania"
let myLastName = "Kuzmenko"

myFirstName.length > myLastName
  ? console.log(`Your first name, ${myFirstName} is longer than your family name, ${myLastName}`)
  : console.log(`Your family name, ${myLastName} is longer than your first name, ${myFirstName}`)
 
// Your family name, Kuzmenko is longer than your first name, Tania

//Task_12

let myAge = 250
let yourAge = 25

myAge > yourAge
  ? console.log('I am 225 years older than you')
  : console.log('You are older than me')

//I am 225 years older than you


//Task_13

let yearOfBirth = parseInt(prompt('Enter the year of your birth'))
yearOfBirth > 2005
  ? alert('You are young enough to drive')
  : alert('You are old enough to drive')


//Task_14

let numbersOflife = parseInt(prompt('Enter number of years you live'))
const secInYear = 31536000
let yourAgeInSeconds = numbersOflife * secInYear

alert(yourAgeInSeconds);

//Task_15

const nowIs = new Date()
const yearIs = nowIs.getFullYear()
const monthIs = nowIs.getMonth()
const dateIs = nowIs.getDate()
const hoursIs = nowIs.getHours()
const minutesIs = nowIs.getMinutes()

console.log(`${yearIs}-${monthIs}-${dateIs}-${hoursIs}:${minutesIs}`);
console.log(`${dateIs}-${monthIs}-${yearIs}-${hoursIs}:${minutesIs}`);
console.log(`${dateIs}/${monthIs}/${yearIs}/${hoursIs}:${minutesIs}`);
// 2023-2-23-15:57
//23-2-2023-15:57
//23/2/2023/15:57


//LEVEL_3

//Task_1

console.log(`${yearIs}-${monthIs}-${dateIs}-${hoursIs}:${minutesIs}`);
// 2023-2-23-16:43
