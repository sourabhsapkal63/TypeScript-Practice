let arr = [10, 20, 30, 40, 50];
let sum = 0;

arr.forEach(n => sum +=n);
let avg = sum / arr.length;

console.log("Average =", avg);


//Count total even & odd numbers

let values = [1,2,3,4,5];
let even = 0, odd = 0;

values.forEach(v => v% 2 == 0 ? even++ : odd++);

console.log("Even =",even, "Odd =", odd);