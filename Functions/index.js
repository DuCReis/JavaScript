

// Function Declaration

function walk() {
    console.log('walk');
};

walk();

// Anonymous Function Expression

let run = function() {
    console.log('run');
};
let move = run;
run();
move();

function sum() {
    let total = 0;
    for(let value of arguments)
        total += value;
    
    return total;
}

console.log(sum(1, 2, 3, 4, 5, 10))

function sum1(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(sum1(0.1, 20, 30));


function interest(principal, rate = 3.5, years) {
    return principal * rate / 100 * years;
}

console.log(interest(10000, undefined, 5));


const person = {
    firstName: 'Duarte',
    lastName: 'Lucas',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        if(typeof value !== 'string')
            throw new Error('Value is not a string.');

        const parts = value.split(' ');
        if(parts.length !== 2)
            throw new Error('Enter a first and last name!');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};


try {
    person.fullName = 'Alberto Costa';
}
catch (e) {
    console.log(e);
}

console.log(person.fullName);


const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};


video.showTags();


function playVideo(a, b) {
    console.log(this);
}

playVideo.call({ name: 'Duarte'}, 1, 2);
playVideo.apply({ name: 'Duarte'}, [1, 2]);
playVideo.bind({ name: 'Duarte'}) ();


