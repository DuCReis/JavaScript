

let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x / y);
console.log(x * y);
console.log(x % y);
console.log(x ** y);


// Increment (++)
console.log(++x);
console.log(x++);

// Decrement
console.log(--x);
console.log(x--);

// Strict Equality (Type + Value)
console.log(1 === 1); // true
console.log('1' === 1); // false
console.log(true == 1); // false

// Lose Equality (Value)
console.log(1 == 1); // true
console.log('1' == 1) // true
console.log(true == 1); // true

// se o cliente tiver mais de 100 pontos,
// ele é um cliente gold, baixo disso,
// ele é um cliente silver.

let points = 90;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);


// Logical AND (&&)
// Retorna True se os 2 forem verdadeiros
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log(false && true); // false

// Logical OR (||)
// retorna true se um dos dois for verdade
let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan);

//Not (!)
let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused); 
console.log(eligibleForLoan); //true

// Falsy (false):
//undefined
//null
//0
// ''
// NaN


// tudo o que não for Falsy -> Truthy

// Short-circuiting
// false || 1 || 2
// retorna 1 e não o lê o 2

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor); // red, mas se o userColor = undefined -> iria ser blue

// Bitwise

// 00000100
// 00000010
// 00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;

myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);

let message = (myPermission & readPermission) ? 'yes' : 'no';

console.log(message);