let n:number=10;
let s:string="hello";

interface Person{
    name:string,
    age?:number // optional property beacuse of ?
} 

const p1:Person={
    name:"Charlie" 
}

// Utility typesfor objects
// 1:partial <Person>
// 2:readonly <Person>
// 3:readonly <Person>

interface customer{
  name:string,
  age:number,
  something:string
}

const obj1:Partial<customer>={
    name:"Dave",
    age:30
}
obj1.something="value";

const obj2:Readonly<customer>={
    name:"Dave",
    age:30,
    something:"value"
}
// obj2.name="John"; // Error: Cannot assign to 'name' because it is a read-only property.

const obj3:Required<customer>={
    name:"Dave",
    age:30,
    something:"value"
}

class Product {
    pid: number;
    name: string;
    price: number;

    constructor(pid: number, name: string, price: number) {
        this.pid = pid;
        this.name = name;
        this.price = price;
    }

    display(): void {
        console.log(`Product ID: ${this.pid}, Name: ${this.name}, Price: ₹${this.price}`);
    }
}  

class DigitalProduct extends Product {
    fileSizeMB: number;

    constructor(pid: number, name: string, price: number, fileSizeMB: number) {
        super(pid, name, price); // calls Product constructor
        this.fileSizeMB = fileSizeMB;
    }

    display(): void {
        super.display(); // reuse base method
        console.log(`File Size: ${this.fileSizeMB} MB`);
    }
} 
