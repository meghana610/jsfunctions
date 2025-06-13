// Functions are one of the most powerful features in javascript
// They allow you to reuse code, organize logic, and handle dynamic inputs.

// Functions are used always like
// declaration + call

// syntax
// Function declaration

sayHello()

function sayHello() {
    console.log("Hello")
}

// function calling
sayHello()
sayHello()
// this is called js hosting

let a = 10;
console.log(a)

// functions with parameters

function sum(num1, num2, num3){
    console.log(num1 + num2 + num3)
}
sum(10, 5, 10)
sum(5, 5, 100)

function sub(num1, num2, num3){
    console.log(num1 - num2 - num3)
}

function multiple(num1, num2, num3){
    console.log(num1 * num2 * num3)
}

function multiple(a, b, c){
    console.log(a * b * c)
}

multiple(100, 50, 10)
multiple(1, 2, 3)

let fname = "maggie";
let age = "20"

function sayName() {
    console.log("My Name is " + fname + "age is " + age)
    console.log('My Name is ' + fname + 'age is ' + age)
    console.log(`My Name is ${fname} age is ${age}`)
}
// double
// single
// template literal (introduced in es6 after 2015)

sayName()

