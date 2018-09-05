let a = 2;

a -= 1; // a = a - 1 -> 1

a++; // 1 + 1 = 2 = a

let b = 8; 

b += 2; // 8 + 2 = b = 10

const c = a + b * b; // 2 + 10 * 10

const d = a * b + b; // 2 * 10 + 10

const e = a * (b + b); // 2 *(10 + 10)

const f = a * b / a; // 2 * 10 / 2

const g = b / a * a; // 10 / 2 *2
 
console.log(a, b, c, d, e, f, g); // Outputs 2 10 102 30 40 10 10