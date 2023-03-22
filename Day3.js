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
