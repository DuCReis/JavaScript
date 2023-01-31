
function arrayFromRange(min, max){
    const output = [];
    for(let i = min; i <= max; i++)
        output.push(i);
    
    return output;
}

console.log(arrayFromRange(1, 10))

function includes(array, searchElement) {
    for(let element of array)
        if(element === searchElement)
            return true;
    
    return false;
}
const numeros = [1, 2, 3, 4];
console.log(includes(numeros, 3))

function except(array, excluded) {
    const output = [];
    for(let element of array)
        if(!excluded.includes(element))
            output.push(element);
    
    return output;
}

console.log(except(numeros, [1, 2]));

function move(array, index, offset) {
    const position = index + offset;
    if(position >= array.length || position < 0){
        console.error('Invalid offset.');
        return;
    }

    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}

console.log(move(numeros, 1, 1))

const numeros1 = [1, 2, 3, 4, 1];

function count0ccurrences(array, searchElement) {
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement)
        console.log(accumulator, current, searchElement)
        return accumulator + occurrence;
    }, 0);
}


function getMax(array) {
    if(array.length === 0) 
        return undefined;

    return array.reduce((a, b) => (a > b) ? a : b);
}

console.log(getMax([1, 5, 2, 1, 3]));


const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5},
];


const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);

    console.log(titles);