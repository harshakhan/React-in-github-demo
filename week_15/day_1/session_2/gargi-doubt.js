// // Best example callback function

// const userLeft  = false
// const userWatchingCatMeme = true

// function watchTurorialsCallback(callback,errorCallback){   // here we are passing the parameter as value but when we are passing callback fun here it's become fun.
//     if(userLeft){
//         errorCallback({               // it will get into the fun when it will be true
//             name: "User Left",
//             message : ":("
//         })
//     }
//     else if(userWatchingCatMeme){
//         errorCallback({                 
//             name:"User watching cat meme",
//             message:"white cat"
//         })
//     }
//     else{                              // when it will false then this fun will execute
//         callback("Thumb up")          // fun with argument
//     }
// }

// // here message and are err are two argements that is then is taken by the function
// watchTurorialsCallback(message=>{
//     console.log("sucess:"+ message)
// },(err)=>{
//     console.log(`${err.name} 
//     ${err.message}`)

// })

//--------------------------------------------------------------------
// same thing with promises
// promise is the update version of callbackgar 



// const userLeft  = true
// const userWatchingCatMeme = true

// let p = new Promise((resolve,reject)=>{   // here we are passing the parameter as value but when we are passing callback fun here it's become fun.
//     if(userLeft){
//         reject({               // it will get into the fun when it will be true
//             name: "User Left",
//             message : ":("
//         })
//     }
//     else if(userWatchingCatMeme){
//         reject({                 
//             name:"User watching cat meme",
//             message:"white cat"
//         })
//     }
//     else{                              // when it will false then this fun will execute
//         resolve("Thumb up")          // fun with argument
//     }
// })

// // here message and are err are two argements that is then is taken by the function

// p.then((message)=>{                       // .then always check for resolved parameter
//     console.log("sucess:"+ message)
// }).catch((err)=>{                        // .catch always check for err parameter
//     console.log(`${err.name}
//     ${err.message}`)

// })


// ----------------------------------------------------------------------------------------------------------

// var momsPromise = new Promise(function(resolve,reject){
//     momsSavings = 200000;
//     priceofPhone = 600000;
//     if(momsSavings> priceofPhone){
//         resolve({
//             brand:"iphone",
//             model:"6s"
//         });

//     }
//     else{
//         reject("We donot have enogh savings. Lets us save more money.")
//     }
// })

// momsPromise.then(function(value){
//     console.log("Hurray I got this phone as a gift",JSON.stringify(value));
// });
// momsPromise.catch(function(reason){
//     console.log("Mom couldn't buy me the phone because", reason);
// });

// momsPromise.finally(function(){
//     console.log()
// })


//--------------------------------------------------------------------------------------------------------


// // so here we are doing promises chaning

// console.log('person1: show tickets')
// console.log('person2: show tickets')

// var promiseWifeBringTickets = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('tickets')
        
//     },3000);
// })

// const popcorn = promiseWifeBringTickets.then((m)=>{
//     console.log(`wife: this is the ${m}`)
//     console.log(`husband : okay we should go in`)
//     console.log(`no i m hungry`)
//     return new Promise((resolve,reject)=>resolve(`${m} popcorn`))    //promise chaining
// })

// const butter = popcorn.then((m)=>{
//     console.log(`husband: i have some popcorn`)
//     console.log(`husband: we should go in now`)
//     console.log(`i need some butter in my popcorn`)
//     return new Promise((resolve,reject)=> resolve(`${m} butter`))   // promise chaining
// })

// butter.then((m)=>{
//     console.log(`${m}`)
// })

// console.log(`person 4: show tickets`)
// console.log(`person 5:show tickets`)

// // so this is the example of promises and how it's get done

//-----------------------------------------------------------------------------------------------

// promise async wait

// promise async is nothing just the sugar syntaxing of promises.


console.log('person1: show tickets');
console.log('person2: show tickets');

const preMovie = async()=>{
    const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('ticket'),3000);
    });
    const getPopcorn = new Promise((resolve,reject)=>{
        setTimeout(()=> reject('popcorn'),5000);
    });
    const addButter = new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('butter'),8000);
    });

    let ticket = await person3PromiseToShowTicketWhenWifeArrives;

    console.log(`got the ${ticket}`);
    console.log(`Husband: we should go in now`);
    console.log('wife: "I am hungry');

    let popcorn = await getPopcorn;
    console.log(`Husband: here is ${popcorn}`);
    console.log(`Husband: we should go in now`);
    console.log(`Wife: "I dont like popcorn without butter!`);

    let butter = await addButter;
    console.log(`added ${butter}`);
    console.log(`Husband: Anything else darling`);
    console.log(`Wife: lets go we are going to miss the preview`);
    console.log(`Husband: thanks for the remainder *grin*`);

    return ticket;
};

preMovie().then((t)=> console.log(`person4 shows ${t}`));
preMovie().catch((t)=>console.log(`Rejected ${t}`))
console.log(`person4 shows ticket`);

//-----------------------------------------------------------------------

// we can do it by more simplyfy way

