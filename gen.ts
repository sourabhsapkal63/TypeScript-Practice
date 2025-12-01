function printArray<T>(items: T[]): void {
    items.forEach(item => console.log(item));
}

printArray<number>([1, 2, 3]);   // Output: 1 2 3
printArray<string>(["a", "b"]);  // Output: a b


interface Box<T> {
    value: T;
}

let numBox: Box<number> = { value: 10 };
let strBox: Box<string> = { value: "Typescript" };

console.log(numBox.value); // 10
console.log(strBox.value); // Typescript
