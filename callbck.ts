function greet(name: string, callback: (msg: string) => void) {
    callback(`Hello ${name}`);
}

function display(message: string) {
    console.log(message);
}

greet("Sourabh", display);


function operate(a: number, b: number, 
    add: (x: number, y: number) => number,
    mul: (x: number, y: number) => number
){
    console.log("Add =", add(a, b));
    console.log("Multiply =", mul(a, b));
}

operate(4, 5,
    (x, y) => x + y,
    (x, y) => x * y
);
