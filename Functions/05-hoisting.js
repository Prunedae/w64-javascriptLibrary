/*
* **********
! HOISTING
* **********

    What is Hoisting?
        - JS pulls all variables and functions calls to the 'top' of their respective scope to prior to being executed.
        - Only the declaration is pulled up, NOT the assignment.
*/

// console.log(hoistedVar);

//console.log('How JS see hoistVar: ', typeof hoistVar);
//var hoistVar = 'using var'
// let hoistedVar = 'using let';

// console.log(noVariable);

var declaration;  //Without assignment
console.log(usage);

var usage = declaration + 10;

console.log(usage);

//? Hoisting in a Function
// This is considered the same within a function. On the first pass, it reads it, pushes the declarations to the top and then executes them in the order that they are written.

function testHoist() {
    becomesGolbal = "not declared, it becomes part of the global scope";
    console.log('Prior to declearing', insideFunc);
    var insideeFunc = "Rules still apply here";
    console.lof(insideFunc);
}

testHoist();
console.log(becomesGolbal);

// It is best practice to ALWAYS declare variable regardless of wheather they are in a function or global scope. This make it clear how it should be handled.

//? Using LET
// The Keyword 'let' is block scoped and not function scoped.

console.log(letVariable);
let letVariable = 'Using Let';
// This throws a ReferenceError due to ES6 not accepting undecleared variable. This is to ensure we ALWAYS declare our variables FIRST.

//? Hoisting Function
// Function Declearations:

hosistFunc();

function hoistFunc() {
    console.log('THis is a hoisted function');
}

// Function Expressions:
// These are NOT hoisted.

expressionFunc();

let expressionFunc = function () {
    console.log('Works?')
}