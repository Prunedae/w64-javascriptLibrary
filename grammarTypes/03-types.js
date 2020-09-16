/*
* ***********
! TYPES
* ***********

? Data and Structure Types

* ************
    -Primitive Data Types:
        -boolean
        -undefined
        -number
        -string
            -bigInt
            -symbol
    -null
    -object
    -Function
    */

    //? BOOLEANS
    //* ************

    // A Boolean has two possible values: true or false

    let on = true;
    let off = false;

    console.log(on);

    // ? NULL
    // A null value is an empty value. Think of it as an empty container that has space to fill.

    let empty = null;
    console.log(empty);

    //? UNDEFINED
    // No value has been assigned to a container.

    let undef = undefined;
    console.log(undef);
    let password;
    console.log(password);

    /*
        -Null is like a container with nothing in it.
            -Null you can trust as zero - Undefined not so much.
        -Undefined is when a variable has never been set, or hasn't been created yet.
    */

    //? NUMBERS

    let degrees = 90;
    console.log(degrees);

    let percise = 999999999999999; //15 9's
    console.log(percise);

    let round = 9999999999999999; //16 9's
    console.log(rounded);
    //JS gives us space for 15 9s before rounding up.

    let notQuite = 0.2 + 0.1
    console.log(notQuite);
    //JS rounds out at a certain number, so if math is needed, be aware.

    let whatIf = (0.2 *10 + 0.1 *10);
    console.log(whatIf);
    let numbersAreHard = (0.2 *10 + 0.1 *10) / 10;
    console.log(numbersAreHard)
    // console.log('.' + whatIf);

    //? STRINGS

    // Strings represent text and are wrapped in either single or double quotes.

    let doubleQuote = "Doube Quote";
    let singleQuote = "Single Quote";
    console.log(doubleQuote, singleQuote);

    let inception = "I've"
    let singleQ = 'I\'ve';
    console.log(inception, singleQ);

    //? Number vs String
    let addThese = 1050 + 100;
    console.log(addThese);

    let addTheseAlso = '1050' + '100'
    console.log(addTheseAlso);
    // Analogy...writing 1050 on one sticky note and writing 100 on an other and placing them next to each other

    console.log(typeof addThese);
    console.log(typeof addTheseAlso);
    // We can use an operator called 'typeof' that returns a string that tells us exactly what our variable "type" is.

    let stringToNumber = Number('1150');
    console.log(stringToNumber);
    console.log(typeof stringToNumber);
    
    //

    //?

    let firstName = "Eric";
    let lastName = "Pruneda"
    let zipcode = 46038;
    let houseNumber = 1234567;
    let street = 'Visionary Way'
    let city = 'Fishers'
    let state = 'IN';

    console.log(firstName, lastName + ',', houseNumber, street, + ',', city + ',', state, zipcode);

    //? String: Properties

    /*
        -Strings have properties, or the qualities associated with that string.
        - the length of a string is a property.
    */

    let myName = "Rob",
    console.log(myName.length);

    //? String: Methods
    /*
        -methods are tools that help us manipulate our data
    */

    let myNameIs = 'Eric';
    console.log(myNameIs.toUppercase()); // this is method that changes a string to uppercase
    console.log(myNameIs.toLowerCase());


    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/

