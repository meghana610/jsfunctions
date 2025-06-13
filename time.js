// setTimeout 
// Executes a function once after a delayes given time in milliseconds

// 1000 ==> 1 second
// 5000 ==> 5 seconds

function sayHimaMaggie(){
    console.log("HimaMaggie")
}
// it takes 2 parameters
// 1st function
// 2nd time in milliseconds
// Runs only once

// let seconds = 5
// setTimeout(sayGlobal, seconds * 2000)


// setintervel repeatedly 
// Executes a function repeatedly at given
// time in milliseconds
// and to stop is ...use Ctrl + c

setInterval(sayHimaMaggie, 1000)
