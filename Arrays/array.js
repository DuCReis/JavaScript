
const numbers = [1, 3, 4];

numbers.push(5,6);

numbers.unshift(1,2);

numbers.splice(2, 0, 'a', 'b');

console.log(numbers.indexOf(1, 2));
console.log(numbers.lastIndexOf(1));
console.log(numbers.indexOf(1) !== -1);
console.log(numbers.includes(1));
console.log(numbers);


const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
];


const course = courses.findIndex(function(course){
    return course.name === 'a';
});

//também pode ser utilizado assim
// Cont course = courses.find(course => course.name === 'a');

console.log(course);

const numbersOne = [1, 2, 3, 4];

//End

const last = numbersOne.pop();
console.log(numbersOne);
console.log(last);

//beginning

const first = numbersOne.shift();
console.log(numbersOne);

// Middle

numbersOne.slice(2, 1);
console.log(numbersOne);


const primeiro = [{ id: 1}];
const segundo = [4, 5, 6];
const terceiro = [1, 2, 3];

const combined = primeiro.concat(segundo);
const combinado = [...terceiro, 'a', ...segundo, 'b'];
primeiro[0].id = 10;

const copy = [...combinado];

const slice = combined.slice(2, 4)
console.log(combined);
console.log(slice);

const numbers1 = [1, 2, 3];

for(let number of numbers1) {
    console.log(number);
}

numbers1.forEach((number, index) => console.log(index, number));

const joined = numbers1.join(',');
console.log(joined);

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);

const combined1 = parts.join('-');
console.log(combined1);

const numbers2 = [2, 3, 1];
numbers2.sort();
console.log(numbers2);

numbers2.reverse();
console.log(numbers2);

const courses1 = [
    { id: 1, name: 'Node.js'},
    { id: 2, name: 'JavaScript'},
];

courses1.sort(function(a, b){
    const nameA = a.name.toLocaleLowerCase();
    const nameB = b.name.toLocaleLowerCase();

    if(nameA < nameB)
        return -1;
    
    if(nameA > nameB)
        return 1;
    
    return 0;
});

console.log(courses1);

const numbers3 = [1, -1, 2, 3];

const allPositive = numbers3.every(function(value){
    return value >= 0;
});

const atLeastOnePositive = numbers3.some(function(value){
    return value >= 0;
});

console.log(allPositive);
console.log(atLeastOnePositive);

const filtered = numbers3.filter(value => value >= 0);

const items = filtered.map(value => '<li>'+ value + '</li>')

const html = '<ul>'+ items.join('') +'</ul>';

console.log(filtered);
console.log(html);


const numbers4 = [1, -1, 2, 3];

const items1 = numbers4
    .filter(n => n >= 0)
    .map(n => ({ value: n}))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(items1);

let sum = 0;

for(let n of numbers4)
    sum += n;

console.log(sum);

const sum1 = numbers4.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum1);