"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = 10;
let c = "hello";
let b;
b = 20;
b = "string";
console.log(b.toUpperCase());
let d;
d = 30;
d = "sring";
// console.log(d.toUpperCase()); // Error: Object is of type 'unknown'.
if (typeof d === "string") {
    console.log(d.toUpperCase());
} // then it works
//Non-primitive types
let arr = [1, 2, 3, 4];
let arr1 = [1, 2, 3, 4]; // type inference
let arr2 = [1, "hello"];
let arr3 = [1, "hello", true];
let obj = {
    name: "John",
    age: 30
};
let obj1;
obj1 = { name: "Doe", age: 25 };
let c1 = {
    name: "Alice",
    age: 28,
    id: 101
};
// interface merging but type is not merging 
let obj3 = {
    name: "Bob",
    age: 35,
    id: 202,
    department: "HR"
};
//# sourceMappingURL=basics.js.map