// sugar syntaxing
// feature
// easier syntax
// arrow function do not have this in it
// refers to the scope of the parenrt or the lexical enviroment


// const sum = ( )=>{ } this is the arrow function

// const sum = (x,y) => x+y

// console.log(sum(10,5))  // 15

// ---------------------------------------------------------

// //by using the default value

// const sum = (x=10,y=10) => x+y;
// console.log(sum(10,5))  // 15

// console.log(sum())  // 20

//-----------------------------------------------------


// const createUser = (username, password) => ( { username, password} ) // we are just wrraping the object

// console.log( createUser ( 'masai', 'password')) 

// // it is because 

//---------------------------------------------------------------------------------------------

// const input = ' 9\n1 2 3 4 5 6 7 8 9'

// let [ size, values] = input .split('\n')

// values = values.split(' ').map((item)=> Number(item)*Number(item))


// console.log(values)  // [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]

//--------------------------------------------------------------------------------------

// const double = x => x*2
// console.log( double(5)) // 10

//------------------------------------------------------------

// so here we want to take out the length of each items

// const arr = ['Nurpul', 'Aman' , 'Albert']

// let out = arr.map(function(item){
//     return item.length

// })

// console.log(out)  // [ 6, 4, 6 ]


// so above expression can be shortned by the above expression----------------------

// const arr = ['Nurpul', 'Aman' , 'Albert']

// let out = arr.map(item => item.length)  // here we are shorting the above code

// console.log(out)  // [ 6, 4, 6 ]

//---------------------------------------------------------------------------------------

// var str = new String('name')  // so here this are also object 

// console.log(str.valueOf()) // name

//------------------------------------------------------------------------------------------
// square each number
// filter out , >25,  divisible by 4
//sum


// var arr = [1,23,4,120,43,664,7,9,98,5,6,78]

// let out = arr.map(item => item * item)
//         .filter( item => item > 25 && item % 5=== 0)
//         .reduce((a,c) => a+c)

// console.log(out)

// --------------------------------------------------------------------------------------------

// If you want create and 2d array

// let m = 10
// let n = 5
// let count = 0

// let arr = new Array(m).fill(0).map( ()=> [...new Array(n).fill(0).map(()=> count ++)] )

// console.log(arr)


// // [ [ 0, 1, 2, 3, 4 ],
// //   [ 5, 6, 7, 8, 9 ],
// //   [ 10, 11, 12, 13, 14 ],
// //   [ 15, 16, 17, 18, 19 ],
// //   [ 20, 21, 22, 23, 24 ],
// //   [ 25, 26, 27, 28, 29 ],
// //   [ 30, 31, 32, 33, 34 ],
// //   [ 35, 36, 37, 38, 39 ],
// //   [ 40, 41, 42, 43, 44 ],
// //   [ 45, 46, 47, 48, 49 ] ]

//-----------------------------------------------------------------------------------------

// converting string into 2d array

// const input = `1 2 3 4 5 6
//  7 8 9 10 
//  11 12 13 14 15`

// arr = input.split('\n').map(item => item.split(' '))
// console.log(arr)

//------------------------------------------------------------------------------------------

// // arr fun 
// // do not have this in it

// var obj ={
//     a: 100,
// b: function(){
//     console.log(this)
// },
// c : ()=>console.log(this)
// }

// obj.b()
// obj.c()

//--------------------------------------------------------------------------------------------------
// // this - is the contxt 
// // so here we are giving to the context such as 1 2 3

// var arr = [1,2,3]
// for( var i =0; i<arr.length; i++){
//     display.call(arr,i)
// }

// function display(i){
//     setTimeout( ()=>{
//         console.log(this[i],i)
//     }, i*1000)

// }


// // 1 0
// // 2 1
// // 3 2

//------------------------------------------------------------------------------------------------

var arr = [1,2,3,4]

for(var i=0;i<arr.length; i++){
    display.call(arr,i)
}

function display(i){
    setTimeout(() =>{
        console.log(this[i],i)
    }, i*1000)
}



