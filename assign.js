// Redeclare Vs Reassign
// var, let, const
//                  var         let         const
// Redeclare         ✅         ✅           ❌      
// Reassign          ✅         ❌           ❌    

var fullname = "Meghana"
console.log(fullname)

fullname = "Rama Meghana" // update a var (re assign)
console.log(fullname)

var a = 10;
var a = 20; // redeclare
console.log(a)
a = 20; // reassign
console.log(a)

// let s1 = 10;
// let s1 = 20; // redeclare
// console.log(s1)
// // s1 = 20; // reassign
// // console.log(s1)

//  const x = 10;
// const x = 20; // redeclare
// console.log(x)
// x = 20; // reassign
// console.log(x)


