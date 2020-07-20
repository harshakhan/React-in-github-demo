//ECMAScript
//European computer manufacturing Association
//TC-39

//2015,ES2015,ES6
//ES2016 -> ES6
//There was a lot of changes

// 1. What should be added
// 2 . They Decide handle
// 3. Detailed
// 4. How To Implement It

// let name ="name"

//----------------------------------------------------------------------------------------------------

// // Varible scoping is done

// var name
// console.log(name)

// name = "masai"
// console.log(name)


// // undefined
// // masai
//--------------------------------------------------------------------------------


// //global amd local
// // let - block scope it says that it is avalable with in the braces such as {....}

// function getName(){
//     if(true){
//         let name = 'masai'   // we will get an Referrence error as let is being only be used within the braces. to ignore we can use 'var'
//     }
//     console.log(name)
// }

// getName()

//----------------------------------------------------------------------------

// let name = "masai"
// name ="school"

// console.log(name)  // output will be school

// // it wil through as syntaxError as name has already being declare
// // in let we can not redeclare we can reassign
// //hoasting is not applicable on let

//----------------------------------------

// const name = "masai"
// console.log(name)    // masai 

//------------------------------------------------------------------------------


const name = ['Nurpul','Aman','Albert']

name[2] = 'Prateek'
console.log(name)    // [ 'Nurpul', 'Aman', 'Prateek' ]

//-------------------------------------------------------------

// You can change the value but the array canot be changed

//-------------------------------------------------------------------------------

// Template literals -It allow you to embadded expression and allow expresion for it.

// let fname= 'masai'
// let lname = 'school'

// let str = fname + ' ' + lname
// console.log(str)   

// So insted of above we can also write like using the backtips

 let fname= 'masai'
 let lname = 'school'

 let str = ${fname} ${lname}
 console.log(str)       