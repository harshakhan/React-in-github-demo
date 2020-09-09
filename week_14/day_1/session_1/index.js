// //Object & array desturing
// //rest, spread  operators

// //Objects


// //add one one 
// var person ={}
// person.name = 'masai'
// person.id = "000"
// person.location  = 'INDIA'

// //adding multiple one 
// var person = {
//     name : 'masai',
//     id: ' 000',
//     location : 'INDIA'

// }

// //Adding once
// const name = person.name 
// const id = person.id

// console.log(name,id )    // masai  000

//---------------------------------------------------------------------------

// var person = {
//         name : 'masai',
//         id: ' 000',
//         location : 'INDIA'
    
//     }
    
//     function getData(){
//         return person
//     }
//     //distraction we are able fetch the multiple input out from that
    
//     const{ name, id} = getData()
//     console.log(name, id)  // masai  000

// // So here we are able to acess the multiple amount out this object.

//---------------------------------------------------------------------------------------

// var person = {
//     name : 'masai',
//     id: ' 000',name,country,location
//     location : 'INDIA'

// }
// //distraction we are able fetch the multiple input out from that
// const{ name , id} = person
// console.log(name, id)  // masai  000

//--------------------------------------------------------------------

//if you want to rename it


// var person = {
//     name : 'masai',
//     id: ' 000',
//     location : 'INDIA'

// }
// //distraction we are able fetch the multiple input out from that
// const{ name: fname , id} = person   // renaming it 
// console.log(fname, id)  // masai  000

//---------------------------------------------------------------------------
// Same with that to the function

// var person = {
//     name : 'masai',
//     id: ' 000',
//     location : 'INDIA'

// }

// function getData(){
//     return person
// }
// //distraction we are able fetch the multiple input out from that

// const{ name, id} = getData()
// console.log(name, id)  // masai  000

//--------------------------------------------------------------------------------

// //Array  Destructining

// const arr = ['MASAI','INDIA','BANGALORE']

// const name = arr[0]
// const country = arr[1] 
// const location = arr[2]


// console.log(name,country,location)  //MASAI INDIA BANGALORE

//-------------------------------------------------------------------------------------

// //So insted of that we can also do like this 



// const arr = ['MASAI','INDIA','BANGALORE']

// const[name,country,location] = arr

// console.log(name,country,location)  //MASAI INDIA BANGALORE

//----------------------------------------------------------------------------


// const arr = ['MASAI','INDIA','BANGALORE']
// const str ='first_line secound_line'

// const[fLine,sLine] = str.split('\n')

// console.log(fLine,sLine)  //MASAI INDIA BANGALORE

//------------------------------------------------------

// function fetchData({baseurl,query,pageNo}){
//     //xhr call
//     console.log(baseurl,query,pageNo)
// }
// let data ={
//     baseurl:"url",
//     query: "masai",
//     pageNo :3
// }

// fetchData(data)


//----------------------------------------------------------------------------
//spread operator


// function sum(x,y,z){
//     return x+y+z
// }
// let arr = [1,2,3]

// console.log(sum(...arr))   // here we are using the spread operator(...)

// //6

//-----------------------------------------------------------------------------

// // when we re going to create a new array

// let abc = ['a','b','c']
// let def = ['d','e','f']
// let union = [...abc,...def]
// console.log(...union)  // a b c d e f
// console.log(union)  // [ 'a', 'b', 'c', 'd', 'e', 'f' ]


// // joining the array 

// --------------------------------------------------------------------------------------------

// // So here actually we are not creating the new copy of an array 
// // we can understand that with below example

// let abc = ['a','b','c']
// let def = ['d','e','f']

// let abcCopy = abc

// abcCopy.push('d')
// console.log(abc,abcCopy)  // [ 'a', 'b', 'c', 'd' ] [ 'a', 'b', 'c', 'd' ]


// // So as you can see that we are getting  both array d so this is not immutable

//----------------------------------------------------------------------------------------------

//So to create an new array we are doing the following things

// let abc = ['a','b','c']
// let def = ['d','e','f']

// let abcCopy = [...abc]

// abcCopy.push('d')

// console.log(abc,abcCopy)  // [ 'a', 'b', 'c' ] [ 'a', 'b', 'c', 'd' ]

// so in this case its creating new array and spreading it into new 'abcCopy'

//-----------------------------------------------------------------------------------------------

// let obj ={
//     name:'masai'
// }
// let objCopy = obj

// objCopy.name = 'new_masai'
// console.log(obj,objCopy)  // { name: 'new_masai' } { name: 'new_masai' }

//-----------------------------------------------------------------------------------------
// let obj ={
//         name:'masai'
//     }
//     let objCopy = Object.assign({},obj)  // another way of creating a new copy
    
//     objCopy.name = 'new_masai'
//     console.log(obj,objCopy)  // { name: 'new_masai' } { name: 'new_masai' }

//------------------------------------------------------------------------

// Now doing the spread operator we are going to do the same things

let obj ={
    name:'masai'
}
let objCopy = {...obj}

objCopy.name = 'new_masai'
console.log(obj,objCopy)  // { name: 'new_masai' } { name: 'new_masai' }

//---------------------------------------------------------------------------------

// REST OPERATOR

function sum(x,...y){  //all the argument passed after the first argument is store in an array. '...y' is a array
console.log(x,y)  // 10 [ 1, 2, 3, 4, 5, 6 ]
    return x+y.length
}

let res = sum(10,1,2,3,4,5,6)
console.log(res) // 16
//---------------------------------------------------------------------------------

    