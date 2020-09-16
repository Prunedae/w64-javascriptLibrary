/*
* ***********
! CONSTRUCTOR FUNCTIONS
* ***********



*/

//Opt 1:

let person1 = {
    name: 'Macy',
    age: 24,
    canVote: true
};
let person2 = {
    name: 'Jeremy',
    age: 15,
    canVote: false
};
let person3 = {
    name: 'Tyler',
    age: 38,
    canVote: true
};

//Opt 2
// (1)      (2)         (3)
function Person(name, age, canVote) {
//  (4)     (5)     (6)
    this.name = name;
    this.age = age;
    this.canVote = canVote 
}

//console.log(typeof Person);
              (7)  (8)
let person4 = new Person('James', 80, true);
console.log(Person4)

/*
    1. The Keyword (function)
    2. The function NAME. For Constructor Function, the name should be capitalized.
    3. The parameters. These will be the values of the object once this function is in use.
    4. The 'this' keyword. 'this' give us the ability to refer back to whatever called, or whatever activates it. In this case, 'this' refers to 'Person'
    5. This will be a key of the new object we will create. This is NOT refering to the parameter.
    6. This is refering to the parameter.
    7 & 8. This 'new' keyword is calling our Person function, creating a new person with the values we passing as arguments, and storing that peron in a variable.
*/


