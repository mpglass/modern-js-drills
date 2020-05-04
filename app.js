let favMovie = (name, movie) => console.log(`My name is ${name} and my favorite movie is ${movie}.`)

favMovie('Michelle', 'The Greatest Showman');

let myName = 'Michelle Glass';
let name = myName.split(' ');
let getFirstName = (name) => {
    return `${name[0]}`;
};
let result1 = getFirstName(name);
let getFirstNameConcise = (name) => `${name[0]}`;
let result2 = getFirstNameConcise(name);
console.log(result1)
console.log(result2)

function getStats(a,b) {
    let exponent = a ^ b;
    let product = a * b; 
    return { exponent, product };
}
let stats = getStats(2, 6);
console.log(stats.exponent);
console.log(stats.product);


function tellAll (name, location, favFood) {
    return `${name}, ${location}, ${favFood}`;
};
let me = ['Michelle', 'Montgomery', 'Tofu'];
console.log(tellAll(...me));

let aName = 'Michelle';
let getLetters = (aName) => {
    let chars = [...aName];
    for (i = 0; i < chars.length; i++){
        console.log(chars[i]);    
    }
};
getLetters(aName);

