// var iAmAGlobal = 1;
// // console.log(iAmAGlobal);

// function checkScope(){
//     // In spite of this horrible var name, it is not a global
//     // it's inside a function
//     // nobody outside of this function can see or use it 
//     // DONT make a variable inside a function with the same name as a global
//     // it is confusing to a developer
//     var iAmAGlobal = 2;
//     iAmAGlobal ++;
//     // console.log(iAmAGlobal);
// }

// checkScope()
// // console.log(iAmAGlobal);

// var a = 1;
// function child(){
//     var b =2;
//     // console.log(a);
//     // console.log(b);
//     for(i = 0; i < 10; i++){
//         a++;
//     }
//     function grandChild(){
//         console.log(`I can see and change my stuff, my parents stuff and their parents stuff`)
//         a++;
//         b++;
//     }
// }

// child();
// local variable will return an error
// console.log(b);

// states of a variable
// undeclared - no var x anywhere
// declared - JS knows it exists
// init / assisgned, not only does it exist, it has a value

// HOISTING
// anytime you have the time var, JS will take the var and put it at the top of the function/global;
// var q = 1;
// function p(){
//     q++;
//     console.log(q); // log GLOBAL = 1;
//     var q =3;
//     console.log(q);
// }
// p();

// in addition to var, JS got a facelift in 2015 that added let and const
// let + const = no more var
// let is a block level variable
// it lives for as long as the {} it's inside of exist

var i;
for(i = 0; i < 10; i++){
}

console.log(i);

// for( let j = 0; j < 10 ; j ++){
// }

// console.log(j);

// for(const k = 0; k < 10; k++){
// }

// console.log(k);

const playerName = prompt("What is your name?")

playerName = "joe";

console.log(playerName);