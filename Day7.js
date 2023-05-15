// DAY_7

//LEVEL_1

//Task_1
function fullName() {
  console.log('Tania Kuzmenko')
}
fullName()


//Task_2
function fullName() {
  let firstName = 'Tania'
  let lastName = 'Kuzmenko'
  console.log(firstName + ' ' + lastName)
}
fullName()


//Task_3
function addNumbers() {
 let firstNumber = 35
 let secondNumber = 57
 let sum = firstNumber + secondNumber
 console.log(sum);
} 
 addNumbers()
 

 //Task_4
function areaOfRectangle() {
  let length = 4
  let width = 9
  let area = length * width
  console.log(area)
}
areaOfRectangle()


//Task_5
function perimeterOfRectangle() {
  let length = 4
  let width = 5
  let perimeter = 2 * (length + width)
  console.log(perimeter)
}
perimeterOfRectangle()


//Task_6
function volumeOfRectPrism() {
  let length = 7
  let width = 9
  let height = 4
  let volume = length * width * height
  console.log(volume)
}
volumeOfRectPrism()


//Task_7
function areaOfCircle(x, r) {
  let area = Math.PI * x * r * x * r
  return(area)
}
console.log(areaOfCircle(4, 7));

//Task_8
function circumOfCircle(r) {
  let  circumference = 2 * Math.PI * r
  return (circumference)
}
console.log(circumOfCircle(8))


//Task_9
function densityOfSubstance(mass, volume) {
 let density = mass / volume
 return (density)
}
console.log(densityOfSubstance(20, 9))


//Task_10
function speedOfMovingObject(distance, totalTime) {
 let speed = distance / totalTime
 return (speed)
}
console.log(speedOfMovingObject(60, 20))


//Task_11
function weightOfSubstance(mass, gravity) {
 let weight = mass * gravity
 return (weight)
}
console.log(weightOfSubstance(27, 6));


//Task_12
function convertCelsiusToFahrenheit(oC) {
  let oF = (oC * 9 / 5) + 32
  return (oF)
}
console.log(convertCelsiusToFahrenheit(190));


//Task_13
function bodyMassIndex(weight, height) {
 let bmi = weight / (height * height)
 return (bmi)
}

function getWeightGroup(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
  
 let weight = 57; 
 let height = 1.64;
  
 let bmi = bodyMassIndex(weight, height);
 let weightGroup = getWeightGroup(bmi);
  
 console.log("BMI:", bmi);
 console.log("Weight Group:", weightGroup);


 //Task_14
 function checkSeason (month) {
   if (month = "June" && "July" && "August") {
     return "Summer";
   } else if (month = "September" && "October" && "November") {
     return "Autumn";
   } else if (month = "December" && "January" && "February") {
     return "Winter";
   } else if (month = "March" && "April" && "May") {
     return "Spring";
   } else {
     return "Write a month";
   }
 }
  
let month = "May";
let checking = checkSeason(month);
 console.log("Now it is: ", month );
