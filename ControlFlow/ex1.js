
function max(number1, number2) {
    return (number1 > number2) ? number1 : number2;
}

console.log(max(5,5))

function isLandscape(width, height){
    return (width > height);
}

console.log(isLandscape(600,500));

function fizzBuzz(input){
    if(typeof input !== 'number')
        return NaN;

    if(input % 3 === 0 || input % 5 === 0){
        if(input % 3 === 0 && input % 5 === 0)
            return 'FizzBuzz'

        if(input % 3 === 0)
            return 'Fizz';
        
        if(input % 5 === 0)
            return 'Buzz';
    }

    return input;
}

console.log(fizzBuzz(15))

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed < speedLimit + kmPerPoint){
        console.log('Ok');
        return;
    } 
    else{
        const points = Math.floor((speed - speedLimit) / kmPerPoint );
        if(points >= 12)
            console.log('License suspended');
        else
            console.log('Points', points);
    }
}

checkSpeed(120)

function showNumbers(limit){
    for (let i = 0; i <= limit; i++){
        const message = (i % 2 === 0) ? 'Even' : 'Odd';
        console.log(i, message);
    }
}

showNumbers(10);

const array = [0, null, undefined, '', 2, 3];

function countTruthy(array) {
    let count = 0;
    for(let value of array)
        if(value)
            count++;
    return count;
}

console.log(countTruthy(array));

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

function showProperties(obj) {
    for(let key in obj){
        if(typeof obj[key] === 'string')
            console.log(key, obj[key]);
    }
}

showProperties(movie);

function sum(limit){
    let sum = 0;
    for(let i = 0; i <= limit; i++){
        if(i % 3 === 0 || i % 5 === 0)
            sum += i;
    }
    return sum;
}

console.log(sum(10));

const marks = [90, 80, 80];

function calculateGrade(marks){
    const average = calculateAverage(marks);
    if(average < 60) return 'F';
    if(average < 70) return 'D';
    if(average < 80) return 'C';
    if(average < 90) return 'B';
    return 'A';
}

function calculateAverage(array){
    let sum = 0;
    for(let value of array)
        sum += value;
    return sum / array.length;
}

console.log(calculateGrade(marks));

function showStars(rows){
    for(let row = 1; row <= rows; row++){
        let pattern = '';
        for(let i = 0; i < row; i++)
            pattern += '*';
        console.log(pattern);
    }
}

showStars(2);

function showPrimes(limit){
    for(let number = 2; number <= limit; number++)
        if(isPrime(number))
            console.log(number);
}

function isPrime(number){
    for(let factor = 2; factor < number; factor++)
        if(number % factor === 0)
            return false;
    
    return true;
}

showPrimes(20);