/*
**************
! VARIABLES
**************
*/

console.log('hello')
// The console log is a debugging tool

let a = 2

/*
- let : is our KEYWORD
- a : is our NAME of our variable
- = : is our ASSIGNMENT OPERATOR
- 2 : is our variable VALUE
*/

let b = 1;

console.log(a+b);

//! RESTRICTIONS
/*
    - a variable name must begin with a letter, underscore, or a dollor sign.
    - numbers may follow the above characters, BUT cannot come first. 
    - javascript IS case sesitive - 'hello' and 'Hello', these would be different variables. 
    - camelCase is the best practice for naming.
    -ex:
        let myName = 'Eric';
        is easiser to read than
        let myName = 'Eric';
*/

let startingWithLetter = "Works";
let _startWithLetter = "Works";
let $startWithDollorSign = "Works";
// let 4startsWithNumber = "Breaks";

console.log(startingWithLetter,_startWithUnderscore, $startWithDollorSign);

let PascalCase;
let camelCase;
let snake_case;

/*
*KEYWORDS

var, let, and const

    - var: 'old' keyword for variable. **We won't be using it as often, but is still a viable one to use.
    
    - let: "new" keyword for variable. (introduced with ES6 *newest version of ECMAScript, which is a standardization of JS) 

    - const: also "new" keyword that declears an UNCHANGEABLE or constant, varible.
    */

    /*
* ************
!DECLARATIONS & INITITALIZATIONS
* ************
*/

    // Declarations are the LEFT SIDE of the assisgnment operator
    // let x;

    // Initializations are the RIGHT SIDE of the assisgnment operator
    // let x = 10

    // 10 is our initialization.

    let y;
    console.log('declaration', y);
    console.log (y);

    y = 10;
    console.log('initialization');

    y = 33;
    console.log('initialization 2', y);

    // We've set our variable with our let keyword. With each iteration, we have redeclared what it is. 


    //? const

    let today = 'Great!'
    const efa = 'Wonderful'
    console.log(today, efa)

    today = 'Awesome!';
    console.log(today, efa);

    // efa = 'Super';
    console.log(today,efa);
    // const allows us to make a variable that won't want to change.