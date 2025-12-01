type A = { x: number };
type B = { y: number };
type C = { z: number };

type ABC = A & B & C;

let obj: ABC = { x: 1, y: 2, z: 3 };
console.log(obj);  // { x:1, y:2, z:3 }


type CanWalk = { walk(): void };
type CanEat = { eat(): void };

type Human = CanWalk & CanEat;

const person: Human = {
    walk() { console.log("Walking..."); },
    eat()  { console.log("Eating..."); }
};

person.walk(); // Walking...
person.eat();  // Eating...

