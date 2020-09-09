// function timeConsumingFunction(){
//     for (var i =0; i<100000;i++){
//         // console.log(i)
//     }
//    return i




// }

// console.log(timeConsumingFunction())
// console.log('after')



// it will print all the sequence one after the another

//-----------------------------------------------------------
// function timeConsumingFunction(){
//     for (var i =0; i<100000;i++){
//         // console.log(i)
//     }
//    return i
// }
// console.log("BEFORE")
// setTimeout(function(){        // it will print the function after the some period of time.
//     console.log(timeConsumingFunction())
// }, 1000)


// console.log('after')


// insted of 1000 if you put the number 0) it will do the function same as before [AS BECAUSE SETTIMEOUT PUT THE FUNCTION IT INTO ASYNCHRONOUS SO.]

//  asynchronous code will be executed after the synchronous code is over

//------------------------------------------------------------------------------------------------------
// function timeConsumingFunction(){
//     for(var i =0; i<500;i++){
//         // console.log(i)
//     }
//    return i
// }


// // setTimeout( callback,timeInMilliSecounds)   // it is usually a call back function

// function lessTimeConsumingFunction(){
//     for(var i =0; i<100;i++){
//         // console.log(i)
//     }
//    return i
// }
// console.log("BEFORE")

// setTimeout(function(){        // it will print the function after the some period of time.
//     console.log(timeConsumingFunction() )
// },0)


// setTimeout(function(){        // it will print the function after the some period of time.
//     console.log(lessTimeConsumingFunction() )
// },0)


// console.log('after')


// so if we uncomment the console.log we will get to see that at first "timeConsumingFunction" loop will be created after  completing that the "lessTimeConsumingFunction()" will start the loop
 //----------------------------------------------------------------------------------------------------------------

  //CLEARTIMEOUT


//  function timeConsumingFunction(){
//     for(var i =0; i<500;i++){
//         // console.log(i)
//     }
//    return i
// }


// // setTimeout( callback,timeInMilliSecounds)   // it is usually a call back function

// function lessTimeConsumingFunction(){
//     for(var i =0; i<100;i++){
//         // console.log(i)
//     }
//    return i
// }
// console.log("BEFORE")

//  var id1 = setTimeout(function(){        // it will print the function after the some period of time.
//     console.log(timeConsumingFunction() )
// },0)


// var id2 = setTimeout(function(){        // it will print the function after the some period of time.
//     console.log(lessTimeConsumingFunction() )
//     clearTimeout(id1)  
// },20)




// console.log('after')



//------------------------------------------------------------------------------------------------

// SETINTERVAL


// function timeConsumingFunction(){
//     for(var i =0; i<500;i++){
//         // console.log(i)
//     }
//    return i
// }


// // setTimeout( callback,timeInMilliSecounds)   // it is usually a call back function

// function lessTimeConsumingFunction(){
//     for(var i =0; i<100;i++){
//         // console.log(i)
//     }
//    return i
// }
// console.log("BEFORE")

//  var id1 = setTimeout(function(){        // it will print the function after the some period of time.
//     console.log(timeConsumingFunction() )
// },0)


// var id2 = setInterval(function(){        // it will print the function after the some period of time.
//     console.log(lessTimeConsumingFunction() )
  
// },1000)




// console.log('after')


// 1. we will see that it will print the '100' every one secound.


//-----------------------------------------------------------------------------------

//MANAGING ONE TASK

// var counter =0;

// console.log('starting timer')
// var id = setInterval(function(){
//     console.log(++counter)
//     if( counter===10){
//         clearInterval(id)
//         console.log('timer ended')
//     }
// },1000)



// 1. It will print the number one by one after that it will clearIntervaal after the counter === 10

//-------------------------------------------------------------------------------------------------------------------------------

// time, sec , min , hours,

// var sec = 0

// var timeout = 60*5

// var id = setInterval(function(){
//   sec++
//   getTimeFormat(sec)
//   if(sec === timeout){
//     clearInterval(id)
//   }
// },1000)


// function getTimeFormat(secounds){ 
//   var sec = secounds % 60

//   // console.log("secounds", sec)

//   var min = Math.floor(secounds/60)%60
//   // console.log("minutes",min)


//   var hr =Math.floor(secounds/(60*60))%24
//   // console.log("hours",hr)


//   var days = Math.floor(secounds/(60*60*24))
//   // console.log("days",days)

//   console.log(days,"days", hr,"hrs",min,"m",sec,"s")




// }

// getTimeFormat(60)
// // 0 hr : 1min : o secounds

// getTimeFormat(100)
// // 0 hr : 1min : 40 sec

// getTimeFormat(3600)
// // 1hr : 0 min : 00 secounds
// getTimeFormat(36000)
// // 1hr : 0 min : 00 secounds
// getTimeFormat(360000)
// // 1hr : 0 min : 00 secounds



//-----------------------------------------------------------------------------------

//STOPWATCH PROBLEM




var sec = 5

var timeout = 0

var id = setInterval(function(){
  sec--
  getTimeFormat(sec)
  if(sec === timeout){
    clearInterval(id)
    console.log('timer has ended')
  }
},1000)


function getTimeFormat(secounds){ 
  var sec = secounds % 60

  // console.log("secounds", sec)

  var min = Math.floor(secounds/60)%60
  // console.log("minutes",min)


  var hr =Math.floor(secounds/(60*60))%24
  // console.log("hours",hr)


  var days = Math.floor(secounds/(60*60*24))
  // console.log("days",days)

  console.log(days,"days", hr,"hrs",min,"m",sec,"s")




}



