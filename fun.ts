function greet(): string{
  return "Hello Typscript"
}

console.log(greet());

// with parameter

function add(a: number, b: number): number {
  return a + b;
}
 
console.log( add(5, 10) );