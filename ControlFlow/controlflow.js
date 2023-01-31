
//if
let hour = 6;

if (hour >= 6 && hour < 12) {
    console.log('Good Morning!');
}else if(hour >= 12 && hour <19) {
    console.log('Good Afternoon!');
}else if(hour >= 19 && hour <= 24 || hour >= 0 && hour < 6) {
    console.log('Good Night!');
}else {
    console.log('Insert a valid hour!');
}

//switch

let role;

switch(role){
    case 'guest': console.log('Guest User');
    break;

    case 'moderator': console.log('Moderator User');
    break;

    default: console.log('Unknow User');
}

//Loops

for(let i = 0; i < 5; i++)
{
    console.log(i);
}

let i = 0;

while(i < 5){
    console.log(i);
    i++;
}

i = 0;

do{
    console.log(i);
    i++;
}while(i < 5)

//for-in
const person = {
    name: 'Duarte',
    age: 25,
    altura: 1.82
};

for(let key in person){
    console.log(key, person[key]);
}

const colors = ['red', 'green', 'blue'];

for(let index in colors){
    console.log(index, colors[index]);
}

//for-of

for (let color of colors){
    console.log(color);
}

//break continue

i = 0;

while (i<=10){
    if(i === 5)
        break;
    if(i % 2){
        i++;
        continue;
    }

    console.log(i);
    i++;
}