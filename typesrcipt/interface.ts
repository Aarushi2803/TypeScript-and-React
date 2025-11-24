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

