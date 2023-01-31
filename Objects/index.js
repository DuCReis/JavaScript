
// factory function

function createCircle(radius) {
    return {
        radius,

        draw() {
            console.log('draw');
        }
    };
}

//const myCircle = createCircle(1);

// Constructor Function

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

//const another = new Circle(1);

const circle = {
    radius : 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle)
    console.log(key, circle[key]);

for (let key in Object.keys(circle))
    console.log(key)

for (let entry of Object.entries(circle))
    console.log(entry);

if('color' in circle) console.log('yes');

//const another = {};
//for (let key in circle)
//    another[key] = circle[key];

const another = Object.assign({}, circle);

console.log(another); 


// String primative
const message = 'This is my first message!';

// String Object
const another1 = new String('hi');

const now = new Date();
const date1 = new Date('May 11 2022 9:00');
//  ano, mes(0-11 ou seja numero do mes -1), hora, minutos
const date2 = new Date(2022, 4, 11, 9, 9);

now.setFullYear(2017);