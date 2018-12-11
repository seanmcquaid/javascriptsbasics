var iAmAGlobal = 1;
console.log(iAmAGlobal);

function checkScope(){
    // In spite of this horrible var name, it is not a global
    // it's inside a function
    // nobody outside of this function can see or use it 
    // DONT make a variable inside a function with the same name as a global
    // it is confusing to a developer
    var iAmAGlobal = 2;
    iAmAGlobal ++;
    console.log(iAmAGlobal);
}

checkScope()
console.log(iAmAGlobal);

var a = 1;
function child(){
    var b =2;
    console.log(a);
    console.log(b);
    for(i = 0; i < 10; i++){
        a++;
    }
    function grandChild(){
        console.log(`I can see and change my stuff, my parents stuff and their parents stuff`)
        a++;
        b++;
    }
}

child();
// local variable will return an error
console.log(b);

// states of a variable
// undeclared - no var x anywhere
// declared - JS knows it exists
// init / assisgned, not only does it exist, it has a value