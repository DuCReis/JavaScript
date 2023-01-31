

const morada = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
}


function showAddress(address){
    for(let key in address)
        console.log(key, address[key]);
}

showAddress(morada);

function createAddress(street, city, zipCode){
    return {
        street,
        city,
        zipCode
    };
}

console.log(createAddress('a', 'b', 'c'));

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

function areSame(address1, address2) {
    return address1 == address2;
}


function areEqual(address1, address2) {
    return address1.street == address2.street &&
    address1.city == address2.city &&
    address1.zipCode === address2.zipCode;
}


let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        { author: 'a', body: 'b'},
        { author: 'c', body: 'd'},
    ],
    isLive: true
};

console.log(post);

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let post1 = new Post('a' , 'b', 'c');

console.log(post1);


let priceRanges = [
    { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 0, maxPerPerson: 10},
    { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 0, maxPerPerson: 20},
    { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 0, maxPerPerson: 50},
];

let restaurants = [
    { averagePerPerson: 5}
];