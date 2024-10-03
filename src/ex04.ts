// Exercise: Create a function `formatInput` that accepts either a string or number as input.
// If it's a number, return it multiplied by 100. If it's a string, return it in uppercase.

function formatInput(input:number | string) {
 if (typeof input === 'number') {
   return input * 100
 }else if(typeof input === 'string'){
  return input = input.toUpperCase();
 }else {
  return "You can only pass strings and numbers"
 }
}

console.log(formatInput(5));    // Expected output: 500
console.log(formatInput("hello")); // Expected output: "HELLO"