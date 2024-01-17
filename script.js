'use strict';
/* ===== HOMEWORK 1 ===== */


// NEW IF STATEMENT //
let element = 100;

let result = element < 50 ? 'less than 50' : element > 20 ? 'more than 20' : 'error';

console.log(result);


// OLD IF STATEMENT //
let score = 100;

if (score < 50) {
    console.log('less than 50')
} else if(score > 20){
    console.log('more than 20')
} else{
    console.log('error')
}


/* ===== HOMEWORK 2 ===== */


// NEW IF STATEMENT //
let userName = 'mariami';

let resultCondition = userName == 'mariami' ? 'true' : 'false';

console.log(resultCondition);


// OLD IF STATEMENT //
let name = 'mariami'

if (name == 'mariami'){
    console.log('true')
} else{
    console.log('false')
}


/* ===== HOMEWORK 3 switch ===== */
let fisrtName = 'mariami'

switch (fisrtName){
    case 'mariami':
        console.log('true');
        break;
    default:
        console.log('false');
}