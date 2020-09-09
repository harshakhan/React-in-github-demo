// closure, mechanism which allows a particular varible which is define in a function to be used in either in an inner function
//when the varible is accessed outside of its scope


// function sum(a,b){
//     return a+b
// }
// console.log(sum(1,2))  // we will be get the sum

//-----------------------------------------------------------------

// return statement is basically a function and we are storing this function


// function sum(a){
//     return function inner(b){  //closure
//         return a+b
//     }
// }
// var addToOne = sum(1)
// console.log(addToOne(10))  // here we will adding 10+1 =11

//-------------------------------------------------------------------

//we will be doing one more layer here.


// function sum(a){
//     return function inner(b){  //closure
//         return function innerMost(c){
//             console.log(a,b,c)
//             return a+b+c
//         }
     
//     }
// }
// var addToOne = sum(1)
// var addToEleven = addToOne(10)
// console.log(addToEleven(15))

// we will be getting 21 here

//-----------------------------------------------------------
//setTimeOut = it takes two value one is argument and other is value
// var arr = [1,2,3,4]

// for(var i = 0;i<arr.length;i++){ // Since var is not inside a function its take global scope
//     setTimeout(function(){
//         console.log(arr[i],i )
//     },1000*i )
// }
// console.log(i)

// we will get undefuined 4 due to there is not value in it so undefined
//scopes
//asynchronus behaviour

//SO to improve this follow the below code

//-------------------------------------------------------------------------------


// var arr=[1,2,3,4]

// for(var i =0;i<arr.length;i++){
//     display.call(arr,i)
// }

// function display(i){   //here i is closure scope that is why it is accesing
//     var that = this
//     setTimeout(function(){
       
//         console.log(that[i],i)
//     },1000*i)
// }

// now we are getting the correct output

//It Talks about 
//scopes
//async
//this
//function
//call

//----------------------------------------------------------------------------
function bike(){
    //state
    var fuel =10;
    var km = 0;


    function ride(dist){
        fuel = fuel-dist/10;
        km+=dist;
        console.log('rode for'+ dist + "km","new fuel is " +fuel)
        return{km,fuel}
    }

    function refuel(ltr){
        fuel += ltr;
        console.log('fuel is' + fuel)
        return {km,fuel}
    }

    return { ride,refuel}

}

var hero = bike()

// console.log(hero)
console.log(hero.ride(10))
console.log(hero.ride(10))
console.log(hero.ride(10))