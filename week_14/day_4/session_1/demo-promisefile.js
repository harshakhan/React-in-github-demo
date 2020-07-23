// Promises generally takes as a callback
// Promise takes the two arguments

// console.log('first')

// // async req
// var promise = new Promise((resolve, reject)=>{   // resolve and refect are the two argument
//     resolve('promise is resolved')
// }).then(res=>console.log(res))

// console.log("secound")

//--------------------------------------------------

// // we can write in different way also


// console.log('first')

// // async req
// var promise = new Promise((resolve, reject)=>{   // resolve and refect are the two argument
//     // resolve('promise is resolved')

//     reject('promise is rejected')
// })

// promise.then(res=>console.log(res))
// .catch(err=>console.log(err))

// console.log("secound")

//----------------------------------------------------------------

// //Promise

// function sleep(time){
//     return new Promise((resolve,reject)=>{
//         if(!time || typeof time!=='number'){    //error handling
//             reject('this is undefined')
//         }
//         setTimeout(()=> resolve(), time)
//     })
// }

// sleep(2000)
// .then(()=>console.log('output'))
// .catch(err=>console.log(err))

// It will give the output after 2 sec

//----------------------------------------------------------------------

// setTimeout(() => console.log('one'))

// Promise.resolve().then(()=>console.log('two'))

// // two
// // one

// // As you can see two is comming first and then one

// // This is because-

// // event loop
// //task queue
// // there are priority queues
// // Promise job queues have a greater priority than setTimeout etc

///---------------------------------------------------------------------

//finally  


var promise = new Promise((resolve, reject)=>{   // resolve and refect are the two argument
    resolve('promise is resolved')

    reject('promise is rejected')
})

.then(res=>console.log(res))
.catch(err=> console.log(err))
.finally(() => console.log('finally'))


// So even it get rejected it will be printed



