const user: { name: string; age: number } = {
    name: "Rahul",
    age: 22
};

console.log(user.name);   // Output: Rahul
console.log(user.age);    // Output: 22


const employee: { id: number; company?: string } = {
    id: 101
};

console.log(employee.id);       // Output: 101
console.log(employee.company);  // Output: undefined
