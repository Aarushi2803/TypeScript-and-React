"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let n = 10;
let s = "hello";
const p1 = {
    name: "Charlie"
};
const obj1 = {
    name: "Dave",
    age: 30
};
obj1.something = "value";
const obj2 = {
    name: "Dave",
    age: 30,
    something: "value"
};
// obj2.name="John"; // Error: Cannot assign to 'name' because it is a read-only property.
const obj3 = {
    name: "Dave",
    age: 30,
    something: "value"
};
class Product {
    pid;
    name;
    price;
    constructor(pid, name, price) {
        this.pid = pid;
        this.name = name;
        this.price = price;
    }
    display() {
        console.log(`Product ID: ${this.pid}, Name: ${this.name}, Price: ₹${this.price}`);
    }
}
class DigitalProduct extends Product {
    fileSizeMB;
    constructor(pid, name, price, fileSizeMB) {
        super(pid, name, price); // calls Product constructor
        this.fileSizeMB = fileSizeMB;
    }
    display() {
        super.display(); // reuse base method
        console.log(`File Size: ${this.fileSizeMB} MB`);
    }
}
//# sourceMappingURL=interface.js.map