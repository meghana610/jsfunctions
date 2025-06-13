// Arrow functions

function sayBye() {
    console.log("Bye")
}
sayBye()

// How to convert simple to arrow function
// 1. remove function key word and add let
// 2. add = sign after function name
//3. add => sign after()

let sayHello = () => {
    console.log("Hello")
}

sayHello()

let fname = "maggie";
let age = "20"
let clg = "global"

let sayName = () => {
    console.log(`My Name is ${fname} age is ${age} learning in ${clg}`)
} 

sayName()



let sayHii = () => {
    console.log("Hii")
}

sayHii()

// simple functions support hosting 
// Arrow functions doesnot support hosting

