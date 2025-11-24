"use strict";
// Generics in TypeScript — explained with examples
Object.defineProperty(exports, "__esModule", { value: true });
// Short definition:
// Generics let you write reusable, type-safe code that works with many types. Instead of fixing a concrete type (like string or number), you use a type parameter (commonly T) so the caller chooses the actual type later. This preserves strong typing while keeping code flexible.
// identity returns the same value and preserves its type
function identity(value) {
    return value;
}
const s = identity("hello"); // inferred as string
const n = identity(42); // explicitly provide type parameter
console.log(s.toUpperCase()); // works, s is string
console.log(n.toFixed(2)); // works, n is number
//# sourceMappingURL=genries.js.map