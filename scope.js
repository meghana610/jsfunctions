// // There are 3 types of scoping in javascript
// // 1. Block scope
// // 2. Function scope
// // 3. Global scope

// // Block scope
// // Block means codes access only in braces
// // eg : {}

// //                      var     let     const
// //inside of Block       ✅      ✅      ✅
// //Outside of block       ✅      ❌      ❌

// // Inside of block in var
// {
//     var x = 10;
//     var y = 20;
//     console.log(x)
//     console.log(y)
// }

// // Inside of block in let

// {
//     let x = 10;
//     let y = 20;
//     console.log(x)
//     console.log(y)
// }

// // Inside of block in const

// {
//     const x = 10;
//     const y = 20;
//     console.log(x)
//     console.log(y)
// }

// // outside of block in var
// {
//     var x = 10;
//     var y = 20;
// }
//     console.log(x)
//     console.log(y)

// // outside of block in let

// {
//     let x = 10;
//     let y = 20;
// }

//     console.log(x)
//     console.log(y)

// // outside of block in const

// {
//     const x = 10;
//     const y = 20;
// }

//     console.log(x)
//     console.log(y)


//     {
//     let num1 = 10;
//     let num2 = 20;
// }

// console.log(num1,num2)


// function scope
//                          var        let     const
// Inside of function       ✅         ✅      ✅
// Outside of function       ❌          ❌      ❌

// function s1() {
//     var a = 2;
//     var b = 3;
//     var c = 4;
//     console.log(a,b,c)
// } s1()

// function s2() {
//     let a = 5;
//     let b = 6;
//     let c = 7;
//     console.log(a,b,c)
// } s2()


// function s3() {
//     const a = 8;
//     const b = 9;
//     const c = 10;
//     console.log(a,b,c)
// } s3()

// function s4() {
//     var a = 11;
//     var b = 12;
//     var c = 13;
// } 
// console.log(a,b,c)

// function s5() {
//     let a = 14;
//     let b = 15;
//     let c = 16;
// } 
// console.log(a,b,c)

// function s6() {
//     const a = 17;
//     const b = 18;
//     const c = 19;
// } 
// console.log(a,b,c)


// Global scope

var a = 10;
let b = 20;
const c = 30;

{
console.log(a, b, c)
}

function sayCheck(){
    console.log(a, b, c)
}
sayCheck()


