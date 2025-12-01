//String
let myName: string = "John Doe";
console.log(myName);

//Number
let myAge: number = 30;
console.log(myAge);

//Boolean
let isStudent: boolean = true;
console.log(isStudent);

//Array
let hobbies: string[] = ["Reading", "Traveling", "Gaming"];
console.log(hobbies);

//Tuple
let address: [string, number] = ["Main Street", 123];
console.log(address);

//Enum
enum Color {
    Red, Green, Blue
}
let myColor: Color = Color.Red;
console.log(myColor);

//Any
let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;
console.log(randomValue);

//Void
function greet(): void {
    console.log("Hello, World!");
}

greet();

//Null and Undefined
let u: undefined = undefined;
let n: null = null;
console.log(u, n);

//Never
function throwError(message: string): never {
    throw new Error(message);
}

//Using the never function (commented out to avoid runtime error)
// throwError("This is a never type error");

//Object
let person: { name: string; age: number } = {
    name: "Alice",
    age: 25
};
console.log(person);

//Union Types
let multiType: number | string;
multiType = 20;
console.log(multiType);
multiType = "Twenty";
console.log(multiType);