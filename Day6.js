//DAY_6

//LEVEL_1

//Task_1

//for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

//while loop
let j = 0;
while (j < 10) {
  j++;
  console.log(j);
}

//Task_2
 for (let y = 10; y >= 0; y--) {
  console.log(y);
 }

 let u = 10;
 while (u > 0) {
  u--;
  console.log(u);
 }

 //Task_3
 let n = 5;
for (let l = 0; l <= n; l++) {
    console.log(l);
}

 //Task_4
let str = '';
for (let t = 0; t < 7; t++) {
    str += '#';
    console.log(str);
}
/*
#
##
###
####
#####
######
#######
*/

 //Task_5
 for (let g = 0; g <= 10; g++) {
  console.log(`${g} * ${g} = ${g * g}`)
 }
 /*
0 * 0 = 0
1 * 1 = 1
2 * 2 = 4
3 * 3 = 9
4 * 4 = 16
5 * 5 = 25
6 * 6 = 36
7 * 7 = 49
8 * 8 = 64
9 * 9 = 81
10 * 10 = 100
*/

//Task_6

 for (let k = 0; k <= 10; k++) {
  console.log(`${k} ${k ** 2} ${k ** 3}`)
}
/*
0 0 0
1 1 1
2 4 8
3 9 27
4 16 64
5 25 125
6 36 216
7 49 343
8 64 512
9 81 729
10 100 1000
*/

//Task_7

for (let r = 0; r <= 100; r++) {
  if (r % 2 == 0) {
    console.log(r);
  }
}

//Task_8
for (let o = 0; o <= 100; o++) {
  if (o % 2 !== 0) {
    console.log(o);
  }
}

//Task_9
for (let p = 0; p <= 100; p++) {
  for (let m = 2; m < p; m++) {
      if (p % m === 0 && p > 1) {
          console.log(p)
      }
  }
}

//Task_10
let sum = 0;
for (let h = 0; h <= 100; h++) {
    sum += h;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);

//Task_11
let even = 0;
let odd = 0;
for (let f = 0; f <= 100; f++) {
    if (f % 2 == 0) {
        even += f;
    } else if (f % 2 > 0) {
        odd += f
    }
}
console.log(`The sum of all even number is ${even}. And the sum of all odd numbers is ${odd}`)
// The sum of all numbers from 0 to 100 is 5050.
// The sum of all even number is 2550. And the sum of all odd numbers is 2500.

//Task_12
let sumEvenOdd = [0, 0]
for (let s = 0; s <= 100; s++) {
    if (s % 2 == 0) {
        sumEvenOdd[0] += s;
    } else if (s % 2 > 0) {
        sumEvenOdd[1] += s;
    }
}
console.log(sumEvenOdd)

// [ 2550, 2500 ]

//Task_13
let randomArr = [];
for (let d = 0; d < 5; d++) {
    randomArr.push(Math.floor(Math.random() * 10));
}
console.log(randomArr)
// [ 8, 2, 3, 9, 1 ]

//Task_14
let randomUniqueArr = [];
for (let z = 5; randomUniqueArr.length < z;) {
    let random = Math.floor(Math.random() * 10);
    if (randomUniqueArr.indexOf(random) === -1) {
        randomUniqueArr.push(random);
    }
}
console.log(randomUniqueArr)
// [ 9, 4, 1, 6, 0 ]

//Task_15
let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
let randomChars = ""
for (let b = 0; b < 6; b++) {
    let random = Math.floor(Math.random() * chars.length);
    randomChars += chars[random];
}
console.log(randomChars)
// ABoxTv
