//DAY_4

//LEVEL_1


//Task_1

let userAge = Number(prompt('Enter your age:'));

if (userAge >= 18) {
  alert('You are old enough to drive')
} else
  alert(`You are left with ${18 - userAge} year(s) to drive`)


//Task_2

let userAge = Number(prompt('Enter your age:'));
let myAge = 27;

if (userAge === myAge) {
  alert('We are the same age')
} else if (userAge > myAge) {
  alert(`You are ${userAge - myAge} years older than me`)
} else
  alert(`You are ${myAge - userAge} years younger than me`)


//Task_3


let a = 3;
let b = 6;

if (a > b) {
  console.log('a is greater than b')
} else 
  console.log('a is less than b')

a > b 
  ? console.log('a is greater than b') 
  : console.log('a is less than b')
 

//Task_4

let userNum = Number(prompt('Enter the number:'));

if (userNum % 2 == 0) {
  alert(`${userNum} is an even number`)
} else {
  alert(`${userNum} is an odd number`)
}



//LEVEL_2

//Task_1

let studentScore = 70

switch (true) {
  case studentScore >= 80:
    console.log('A')
    break;
  case studentScore >= 70:
    console.log('B')
    break;
  case studentScore >= 60:
    console.log('C')
    break;
  case studentScore >= 50:
    console.log('D')
    break;
  case studentScore < 50:
    console.log('F')
    break;
  default:
    console.log('No score assigned')
}


//Task_2

let month = 'December';

switch (month) {
  case 'September':
  case 'October':
  case 'November':
    console.log('The season is Autumn')
    break;
  case 'December':
  case 'January':
  case 'February':
    console.log('The season is Winter')
    break;
  case 'March':
  case 'April':
  case 'May':
    console.log('The season is Spring')
    break;
  case 'June':
  case 'July': 
  case 'Augus':
    console.log('The season is Summer')
    break;
  default:
    console.log('It is not a month')
}
*/

//Task_3

let a = prompt('What day is it today?');
let b = a.charAt(0).toUpperCase();
let c = a.slice(1, a.length).toLowerCase();
let dayOfWeek = b + c;

switch (dayOfWeek) {
  case 'Monday':
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
  case 'Friday':
    alert(`${dayOfWeek} is a working day.`)
    break;
  case 'Saturday':
  case 'Sunday':
    alert(`${dayOfWeek} is a weekend.`)
    break;
  default:
    alert(`${dayOfWeek} is not a day of the week.`)
}



//LEVEL_3

//Task_1

let a = prompt('Enter a month:')
let b = a.charAt(0).toUpperCase();
let c = a.slice(1, a.length).toLowerCase();
let month = b + c;

switch (month) {
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    alert(`${month} has 31 days.`)
    break;
  case 'February':
    alert(`${month} has 28 days.`)
    break;
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    alert(`${month} has 30 days.`)
    break;
  default:
    alert(`${month} isn't a month`)
}
