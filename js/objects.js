(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Nick",
        lastName: "Sosa",
        sayHello: function(){return 'Hello from '+person.firstName+' '+person.lastName+'!'}
    };

    // console.log(person.sayHello());

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    var discount = function(total){
        if(total >= 200) {
            return "You spent enough to receive a 12% discount today! Your new total is: "+(total - (total*.12).toFixed(2));
        } else {
            return "Sorry, you didn't spend enough to receive a discount today. Your total today is: "+total;
        }
    };

    shoppers.forEach(function(amount){
        console.log("Hello "+amount.name+". Your total today is: "+amount.amount+"\n"+discount(amount.amount))
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var createBook = function(title, authorName) {
        var aName = authorName.split(" ");
        return {
            title: title,
            author: {
                firstName: aName[0],
                lastName: aName[1]
            }
        };
    };


    var books = [
        {
            title: "The Painted Man",
            author: {
                firstName: "Peter V.",
                lastName: "Brett"
            }
        },
        {
            title: "Blood Son",
            author: {
                firstName: "Anthony",
                lastName: "Ryan"
            }
        },
        {
            title: "The Name of the Wind",
            author: {
                firstName: "Patrick",
                lastName: "Rothfuss"
            }
        },
        {
            title: "Mistborn",
            author: {
                firstName: "Brandon",
                lastName: "Sanderson"
            }
        },
        {
            title: "Ender's Game",
            author: {
                firstName: "Orson Scott",
                lastName: "Card"
            }
        }
    ];

    // books.push(createBook("Artemis Fowl", "Eoin Colfer"));

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function(book){
        console.log("Book # "+(books.indexOf(book)+1)+'\n'+"Title: "+book.title+'\n'+"Author: "+book.author.firstName+' '+book.author.lastName+"\n---");
    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */



    // console.log(createBook("yes", "Bob Jones"));

    var showBookInfo = function(bookObject) {
        createBook("Artemis Fowl", "Eoin Colfer");
    };


    //BONUS STUFF

    var carArray = [];

    var makeCar = function(make, model) {
        return {
            make: make,
            model: model
        };
    };

    carArray.push(makeCar("Mitsubishi", "Pathfinder"));

    console.log(carArray);

    var salesReport =[
        {
            title: "Monthly Sales Report",
            date: "03-17-2015",
            office: "Codeup",
            employees: [{
                employeeNumber: "1",
                firstName: "Jane",
                lastName: "Janeway",
                salesUnits: "3"
            }, {
                employeeNumber: "3",
                firstName: "Tricia",
                lastName: "Triciason",
                salesUnits: "5"
            }, {
                employeeNumber: "4",
                firstName: "Jeanette",
                lastName: "Jeanson",
                salesUnits: "4"
            }, {
                employeeNumber: "5",
                firstName: "Charles Emerson III",
                lastName: "Winchester",
                salesUnits: "2"
            }, {
                employeeNumber: "6",
                firstName: "Chet",
                lastName: "Chedderson",
                salesUnits: "8"
            }, {
                employeeNumber: "7",
                firstName: "Chaiam",
                lastName: "Chaiamson",
                salesUnits: "12"
            }, {
                employeeNumber: "8",
                firstName: "Dale",
                lastName: "Dalesinger",
                salesUnits: "1"
            }, {
                employeeNumber: "9",
                firstName: "Zig",
                lastName: "Ziglar",
                salesUnits: "50"
            }, {
                employeeNumber: "10",
                firstName: "Henry",
                lastName: "Kissinger",
                salesUnits: "1"
            }, {
                employeeNumber: "11",
                firstName: "Arthur Herbert",
                lastName: "Fonzarelli",
                salesUnits: "23"
            }, {
                employeeNumber: "12",
                firstName: "Betty",
                lastName: "Boop",
                salesUnits: "67"
            }
            ]
        }
    ];



})();
