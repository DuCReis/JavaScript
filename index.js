
let name = 'Duarte';
console.log(name);
// Se usar uma variavel que possa alterar o que é definido usar o let se for constante usar const

const lastName = 'Lucas';
//dá erro se tentar alterar lastName = 'Duarte';
console.log(lastName);

//-------------------------------------------------------
//Primative types

let firstName = 'Duarte'; // String
let age = 25; // Number
let isAproved = true; // boolean
let secondName = undefined; // undefined
let color = null; //null é para ser utilizado para a declaração de variaveis

//-------------------------------------------------------
//Objects

let person = {
    name: 'Duarte',
    age: 25
};
console.log(person);

// Dot notation
person.name = 'Alberto';
console.log(person.name);

// Bracket notation
//person['name'] = 'Maria';
let selection = 'name';
person[selection] = 'Maria';

console.log(person.name);

//-------------------------------------------------------

//Arrays

let selectedColors = ['red', 'blue'];
console.log(selectedColors);

selectedColors[2] = 'green';

console.log(selectedColors);

//-------------------------------------------------------

//functions 

function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}

greet('Duarte', 'Lucas');


function square(number) {
    return number * number;
}

let number = square(2);
console.log(number);