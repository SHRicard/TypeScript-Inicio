// Explicita ``
let nullVariable : null;
nullVariable = null;
// nullVariable = 1; //Error


let otherVariable = null;
otherVariable = `test`;
console.log(`nullVariable: ${nullVariable}`);
console.log(`otherVariable: ${otherVariable}`);