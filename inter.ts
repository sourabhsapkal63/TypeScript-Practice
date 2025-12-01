interface person {
  name: string;
  age: number;
  city: string;
}

const user: person = {
  name: "shree",
  age: 22,
  city: "Rajkot"
};

console.log(user)


// counrt total; even odd

let values = [1,1,22,23,4,5,6,77];
let even = 0, odd = 0;

values.forEach(v => v % 2 === 0 ? even++ : odd++);

console.log("Even =", even, "Odd =", odd);