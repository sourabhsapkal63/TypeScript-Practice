
//typeinterface


let msg = "Welcome to TS"; // msg: string
console.log(msg);

msg = 123; // ❌ error

let numbers = [1, 2, 3, 4];  // inferred as number[]

numbers.push(5);     // ✔ allowed
numbers.push("ytf");  // ❌ error
console.log(numbers);
