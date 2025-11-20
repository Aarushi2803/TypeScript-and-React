let a:number=10;
let c:string="hello";

let b:any;
b=20;
b="string";
console.log(b.toUpperCase());

let d:unknown;
d=30;
d="sring";
// console.log(d.toUpperCase()); // Error: Object is of type 'unknown'.

if(typeof d === "string"){
    console.log(d.toUpperCase());
} // then it works

//Non-primitive types

let arr:number[]=[1,2,3,4];
let arr1=[1,2,3,4]; // type inference

let arr2:(number|string)[]=[1,"hello"];
let arr3:(number|string|boolean)[]=[1,"hello",true];

let obj:{name:string, age:number}={
        name:"John",
        age:30
};

let obj1:{name:string;age:number}; 
obj1={name:"Doe", age:25};

type customer = {
    name:string, 
    age:number,
    id:number
} 

let c1:customer={
    name:"Alice",
    age:28,
    id:101
};

interface Employee{
    name:string,
    age:number,
    id:number
}
interface Employee{
    department:string 
}

// interface merging but type is not merging 
let obj3:Employee={
    name:"Bob",
    age:35,
    id:202,
    department:"HR"
};