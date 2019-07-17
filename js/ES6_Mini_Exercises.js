"use strict";

/*
    EXPONENTIATION
    We know that the old JS syntax uses this:
    >> Math.pow(a,b)
    Using the ES6 exponentiation Operator, refactor the following:
 */

const x = Math.pow(4,5);
const y = 4 ** 5;
console.log(x);
console.log(y);

let random = Math.floor(Math.random() * Math.pow(2,3));
let random2 = Math.floor(Math.random() * (2 ** 3));
console.log(random);
console.log(random2);

/*
    LET & CONST
    Refactor the above to use es6 variable types.
    What happens when you change the 'random' variable to a const?

    Why does this happen?
    How do we fix this behavior?
 */

random = Math.floor(Math.random() * x);
console.log(random);

/*
    STRING INTERPOLATION
    we can use template strings in the new es6 syntax to avoid concatenating
     multiples strings together.

     Uncomment the two constants, put in the appropriate strings.
     Refactor the code down below to use template strings.
 */

const name = "Nick";
const cohort = "Betelgeuse";
const greeting = `Hello ${name}! You are in the ${cohort} cohort.`;
console.log(greeting);
// const greeting = "Hello" + name + "! You are in the " + cohort + " cohort.";

/*
    FOR...OF
    lets us iterate over Arrays, NodeLists, and even Strings

    rewrite the following as a for...of loop
 */

const instructors = [
    'Daniel',
    'Vivian',
    'Sophie',
    'David',
    'Justin',
    'Fer',
    'Terrell'
];

instructors.forEach(function(instructor){
    // console.log(instructor);
});

for (let z of instructors){
    console.log(z)
}

/*
    ARROW FUNCTIONS
    Shorter, cleaner and allows the 'this' keyword to be bound lexically.
    Pretty neat.

    How can you use fat arrow syntax to refactor the code below?
    Make it as concise as possible.
 */

// function add(x = 2, y = 3){
//     return x + y;
// }

const add = (x, y) => {
    return x + y
};

// function square(x){
//     return x * x;
// }

const square = x => {
    return x * x;
};

/*
    DEFAULT FUNCTION PARAMETER VALUES
    refactor the following so that variable 'greeting' has a value of 'Good
     Morning' and 'name' has the value of 'Betelgeuse.

     Check your work.
 */

const myGreeting = (greeting = 'Good Morning ',name = 'Betelgeuse') => {
   return greeting + name;
};

console.log(myGreeting());
console.log(myGreeting("Hello ", "Sophie"));

/*
    OBJECT PROPERTY VARIABLE ASSIGNMENT
    Refactor the Object below to use shorthand property assignment
 */

const dog = "Spike";
const cat = "Tom";
const mouse = "Jerry";

const pals = {
    dog,
    cat,
    mouse
};

/*
    OBJECT DESTRUCTURING
    1. Use Object Destructuring to refactor
 */

const make = 'nissan';
const model= 'rogue';
const color = 'white';

const myCar = {
    make,
    model,
    color
};


const carInfo = ({make, model}) => {
    console.log(make);
    console.log(model);
};

carInfo(myCar);

/*
    OBJECT DESTRUCTURING
    2. Remember the 'instructors' array that we created at the top of this
     file? Use Array Destructuring to return the first 3 instructors. Use
      the curriculum example as a reference.
 */

const [a,b,c] = instructors;
console.log(a);
console.log(b);
console.log(c);


const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genres: ["southern","gothic","coming of age"],
        yearsInPublication: 59
    },
    {
        title: "No Longer Human",
        author: "Osamu Dazai",
        genres: ["autobiography","short novel"],
        yearsInPublication: 71
    },
    {
        title: "1984",
        author: "George Orwell",
        genres: ["dystopian","sci-fi","political fiction"],
        yearsInPublication: 70
    },
    {
        title: "Noruwei no Mori",
        author: "Haruki Murakami",
        genres: ["coming of age", "novel"],
        yearsInPublication: 32
    }
];

/*
    MAP
    using .map, create an array that returns all author names.
 */

const authors = books.map(n => n.author);
console.log(authors);

/*
    FILTER
    using .filter, create an array that returns all books with at least 3 genres
 */

const genres = books.filter(n => n.genres.length >= 3);
console.log(genres);

/*
    REDUCE
    using .reduce, return the total years between all books.
 */

const totalYears = books.reduce((total, years) => {
    return total + years.yearsInPublication;
}, 0);
console.log(totalYears);