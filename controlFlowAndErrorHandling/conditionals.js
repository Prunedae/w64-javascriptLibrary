/*
* ***********
! CONDITIONALS
* ***********

? FALSY VALUES:
    - false
    - 0
    - "",'', ``
    - null
    - undefind
    - NaN (not a number)

    When JS is expecting a boolean value and it is returned with one of these 6 values,
    evaluated as "falsy"

*/

/*
* **********
! IF
* **********
    -If something is true, do 'this thing'
*/

let light = 'on';

if(light == 'on') {
    console.log('the light is on')
}

let weather = 71;

if(weather <= 70) {
    console.log('wear a jacket')
}

let rain = true;

if(weather < 70 && rain != false) {
    console.log('It is a little chilly and will possibly rain')
};

/*
* **********
! IF ELSE
* **********
IF/ELSE statements allow us the ability to write out a chain of events.
*/

let today = 75;

if(today < 70) {
    console.log('it is' + today + ',wear a jacket');
}    else {
    console.log('It is ' + today + ',No jacket needed.')
}

let Name = 'Eric';

if(Name == 'Eric') {
    console.log('Hello, my name is ' + name + '.');
} else{
    console.log('Hello, what is your name ' + name + '?');
}

/*
* ***********
! ESLE IF
* ***********
    This is a condition that would be checked if the above condition was not met.
*/

let cookTime = 40;

if(cookTime === 45) {
    console.log('Let us feast!')
} esle if(cookTime >= 30) {
    console.log(`It has only been ${cookTime} minitues. Wait another 5 - 15 minutes.`)
} esle if(cookTIme >= 20) {
    console.log(`It has only been ${cookTime} minutes. Wait another 10 -25 minutes.`)
} else {
    console.log(`It has only been ${cookTime} minutes. Perhaps at least try cooking it...`)
}

// The end of the ELSE IF statements should have a simple "else" to finish it.

let age = 25;

if(age === 25) {
    console.log('You can rent a car!')
} esle if(age === 21) {
    console.log(`You can drink!.`)
} esle if(age === 18) {
    console.log(`YOu can vote!.`)
} else {
    console.log(`Sorry you're too young to do anything...`)
}


let age = 25

if(age >=25){
    console.log(`${age} is old enough to rent car!`)
} else if(age >= 21) {
    console.log(`${age} is old enough to drink`);
} else if(age >= 18) {
    console.log(`${age} is old enough to vote`)
} else {
    console.log(`${age} is too young to do anything...`)
}

/*
* ***********
! TERNARIES
* ***********
    -This is a quick way of considering an if/else statement. We are capable of writting out our conditional in a simple line.

*/

let myName = 'Eric';

// if(Name == 'Eric') {
//  console.log('Hello, my name is ' + name + '.');
// } else{
//    console.log('Hello, what is your name ' + name + '?');
// }

//? condition ? if true : else result

myName === 'Eric' ? console.log(`Hello, my name is ${myName}.`) : console.log(`Hello, is your name ${myName}?`);

/*
    1.Condition
    2. True (if true)
    3. False (else)
*/

//! CHALLENGE
// Take this if/else statement and make it into a ternary.
//let lampOn = false;
//let daytime = true;
//if(lampOn == true && daytime != true) {
//    console.log('The lamp is on during the night')
//} else if(lampOn != true && daytime != true) {
//    console.log('The lamp is off during the night')
//} else if(lampOn == true && daytime == true){
//    console.log('The lamp is on during the day')
//} else if(lampOn != true && daytime == true) {
//    console.log('The lamp is off during the day')
//} else {
//    console.log('What lamp?')
//}


lampOn == true && daytime != true ? console.log(`The lamp is on during the night`)
    : lampOn != true && daytime != true ? console.log(`The lamp is off during the night`)
    : lampOn == true && daytime == true ? console.log(`The lamp is on during the day.`)
    : lampOn 

/*
* *********
! SWITCH
* *********

    - executes a block of code depending on different cases.
*/

let instructor = `Ing`;

switch(instructor) {
    case 'Ing' :
        console.log(`${instructor} is a part of the Web Dev Team.`);
        break;
    case 'Zack' :
        console.log(`${instructor} is a part of the Web Dev Team.`);
        break;
    case 'Josh' :
        console.log(`${instructor} is a part of the Web Dev Team.`);
        break;
    default:
        console.log(`Sorry, I can't find what ${instructor} teaches at this time`);
        //Need to use  defualt to help us catch those cases when non are true.
}

switch(instructor) {
    case 'Ing':
    case 'Adam':
    case 'Eric':
    case 'Zach':
    case 'Donovan':
        console.log(`${instructor} is part of the Web Dev TextDecoderStream.`);
        break;
    case 'Josh':
    case 'Amanda':
    case 'Casey':
        console.log(`${instructor} is part of the Software Dev TextDecoderStream.`);
    break;
        console.log(`Sorry, I can't find what ${instructor} teaches.`)
}

