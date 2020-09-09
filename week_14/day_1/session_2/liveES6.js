// const obj ={
//     name:'masai',
//     place: 'blore',
//     tel: 1234


// }

// const{ name, place } = obj
// console.log(name, place)  // masai blore

//-------------------------------------------------------------------
// we can also change the variable name

// const obj ={
//     name:'masai',
//     place: 'blore',
//     tel: 1234


// }

// const{ name, place, tel: phone } = obj     // here we are changing the variable name.
// console.log(name, place, phone)  // masai blore

//-----------------------------------------------------------------------------

//for the nested value




// const obj ={
//     name:'masai',
//     place: 'blore',
//     tel: 1234,
//     location : {
//         place : "blore",
//         country : "India"
//     }


// }

// const{ name, location :{ place}, tel: phone } = obj     // here we are changing the variable name.
// console.log(name, place, phone)  // masai blore

// --------------------------------------------------------------------------------------------

//Array 

// const input = '9\n1 2 3 4 5 6 7 8 9'

// const [ size,num] = input.split('\n')

// console.log(num) //1 2 3 4 5 6 7 8 9
// console.log(size) // 9

//--------------------------------------------------------------------------------------------
// // Spread operator - it is used to make a new copy of an array
// //array

// var arr = [1, 2, 3]
// var copy = [...arr]
// arr.pop()
// console.log( copy )

//---------------------------------------------------------------

// // here we will show how to overide 
//  var obj ={
//      title: 'masai',
//      id: 1,
//      status: true
//  }
//  var newObj = {
//      ...obj,
//      status : false
//  }

//  console.log(newObj)  // { title: 'masai', id: 1, status: false }

//--------------------------------------------------------------------------------------------



// var obj ={
//     title: 'masai',
//     id: 1,
//     status: true
// }
// var obj2 = {
//     title : "school",
//     id: 2,
//     status: true
// }

// let task = [obj,obj2]

// // console.log(task)  // here we are not able overide the status 

// task = task.map( function(item){
//     return item.id === 2 ? {
//         ...item,
//         status:!item.status
//     }: item
// })

// console.log(task) // but here we can creat an copy of an array and can override the status.
//-----------------------------------------------------------------------------------------------------



// var obj ={
//     title: 'masai',
//     id: 1,
//     status: true
// }
// var obj2 = {
//     title : "school",
//     id: 2,
//     status: true
// }

// let task = [obj,obj2]

// // console.log(task) 

// task = task.map( function(item){
//     return item.id === 2 ? {
//         ...item,
//         status:!item.status
//     }: item
// })

// // console.log(task) 

// let payload ={
//     title : "buy bread",
//     id : 3,
//     status: false
// }
// task = [...task, payload]

// console.log(task)

//----------------------------------------------------------------------------

// var arr1=[1,2,3,4,5,6,7]

// var arr2 = [ 8,9, 10,11]

// var arr3 = [...arr1, ...arr2]

// console.log(arr3)   // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]

//-------------------------------------------------------------------------------------------

// var arr1 = [1,2,3,4,5,6,7]

// function sum ( first, secound){
//     return first + secound
// }

// console.log(sum(...arr1))  // sum(1,2)

//----------------------------------------------------------------------------------------

// // REST

// function avg (first,...rest){
//     return rest.length
// }

// console.log(avg(...[1,2,3,4,5,6,7]))    //6

//-----------------------------------------------------------------------------------

// const arr =[1,2,3,4,5,6,7]

// const [first,secound,...rest ] = arr

// console.log( first, secound , rest)

//----------------------------------------------------------------------------

// REST - when we are extracting 
//Spread - when we are connecting


function createUser({username, password}){
    console.log(username, password)
}

let payload ={
    username : "username",
    password : "password",
    email: " email",
    phone: "1231231"
}

createUser( payload )

