// Arrow function - it has a sugar syntax and also had a functionality change

// sytax , sugar syntax
// functionality change

// function sum(x,y){
//     return x+ y
// }

// const shortSum = (x,y) =>{
//     return x+y
// }

// console.log(sum(5,10))  // 15

// console.log(shortSum(5,10))  //15

//---------------------------------------------------------------------------

// //We can make it even smaller

// function sum(x,y){
//     return x+ y
// }

// const shortSum = (x,y) => x+y  // here we can avoid curley bracket and return statement also


// console.log(sum(5,10))  // 15

// console.log(shortSum(5,10))  //15

//----------------------------------------------------------------------

// //Example of an array

// var arr =[1,2,3,4,5]

// const res = arr.map((elem)=>elem*elem)
// //              arr.map (argument) =>code)

// console.log(res) //[ 1, 4, 9, 16, 25 ]
//---------------------------------------------------------------------

// // how the funtionallty changes

// // this

// //each function this 


// var obj ={
//     i:10,
//     b:() => console.log(this.i),
//     c: function(){
//         console.log(this.i)
//     }
// }

// obj.b()  // undefined

// obj.c()  // 10

//------------------------------------------------------------------------------

// var str = '1 2 3 4 5 6 7'
// var sum = str.split(' ').map (Number).reduce((a,c)=>a+c)

// console.log(sum)  // 28

//-----------------------------------------------------------------------

// So how reduce makes the code simplier

// for ex- 
// 1(with arraow notation)
// var sum = str.split(' ').map (Number).reduce((a,c)=>a+c)



// 2 (can also be done without arrow notation)
// var sum = str.split(" ").map(function (a){
//     return Number(a)

// }).reduce(function(a,b){
    // return a+c

// })

//------------------------------------------------------------------------


