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

var momsPromise = new Promise(function(resolve,reject){
    momsSavings = 200000;
    priceofPhone = 600000;
    if(momsSavings> priceofPhone){
        resolve({
            brand:"iphone",
            model:"6s"
        });

    }
    else{
        reject("We donot have enogh savings. Lets us save more money.")
    }
})

momsPromise.then(function(value){
    console.log("Hurray I got this phone as a gift",JSON.stringify(value));
});
momsPromise.catch(function(reason){
    console.log("Mom couldn't buy me the phone because", reason);
});

momsPromise.finally(function(){
    console.log()
})

