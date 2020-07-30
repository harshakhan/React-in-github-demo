// // async code example

// // There are two sector one is callstack and other web apis
// // web api handles the async behaviour 


// console.log("Start");

// setTimeout(() => {
//     console.log('We are in the timeout')
// },5000);

// console.log("ENd")


//------------------------------------------------
// // callback will not always be the asynchronous 


// console.log("Start")
// const items = [1,2,3,4,5]

// items.forEach(item =>{
//     console.log(item)
// });
// console.log("End")

// // AS we can see here all the console log is  getting printed line by line

//-----------------------------------------------------------

// problem we will face while doing the asynchronous code

// console.log('Start');

// function loginUser(email,password){
//     setTimeout(()=>{
//         console.log('Now we have the data')
//         return { userEmail: email}
//     },1500);
// }

// const user= loginUser("harsha@gmail.com",12344)
// console.log(user);
// console.log("Finish");

// So here see that console log user returns undefined it does not return anything
//-----------------------------------------------------------------------------------

// So to avoid this we can use callback function 

// console.log('Start');

// function loginUser(email,password,callback){   // here we passing the callback fun
//     setTimeout(()=>{
//         console.log('Now we have the data')
//         callback( { userEmail: email} )  // istead of returning we are using the callback with the parameter as username
//     },5000);
// }

// function getUserVideos(email,callback){
//     setTimeout(()=>{
//         callback(["video1","video2","video3"]);
//     },1000)

// }
// function videoDetails(video,callback){
//     setTimeout(()=>{
//         callback('title of the video');
//     },2000);
// }

// const user= loginUser("harsha@gmail.com",12344, user=>{   // and here we are invoking that callback function
//     console.log(user)
//     getUserVideos(user.userEmail,videos => {
//         console.log(videos);
//         videoDetails(videos[0],title=> {
//             console.log(title)

//         })
//     })

// })

// console.log("Finish");


// so here are getting the correct result after 5 sec

// So here as we can see that we are getting piramit structure of the code

// ------------------------------------------------------------------------------------------





// --------------------------------------------------------------
// promises just give us the result of asyn fun or the error of the asyn


// const promise = new Promise((resolve,reject) =>{

//     setTimeout(() =>{
//         console.log('got the user');
//         // resolve ({user : "ed"});
//         reject(new Error('User not logged in'))
//     },2000);
// })

// promise.then(user =>{      // here .then give us back the result
//     console.log(user)
// })
// .catch(err => console.log(err.message));


//-----------------------------------------------------------------------------------------




// console.log('Start');

// function loginUser(email,password){   // here we passing the callback fun
//     return new Promise((resolve,reject)=> {
//     setTimeout(()=>{
//         console.log('Now we have the data')
//         resolve( { userEmail: email} )  // istead of returning we are using the callback with the parameter as username
//     },3000);
// });
// }

// function getUserVideos(email){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(["video1","video2","video3"]);
//         },1000)
        
//     });

// }
// function videoDetails(video){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('title of the video');
//         },2000);
        
//     });
// }

// // const user= loginUser("harsha@gmail.com",12344, user=>{   // and here we are invoking that callback function
// //     console.log(user)
// //     getUserVideos(user.userEmail,videos => {
// //         console.log(videos);
// //         videoDetails(videos[0],title=> {
// //             console.log(title)

// //         })
// //     })

// // })

// loginUser("ed","bubmba")
// .then(user => getUserVideos(user.email))
// .then(videos => videoDetails(videos[0]))
// .then(detail => console.log(detail))


// console.log("Finish");



//-------------------------------------------------------------------


/// sugar syntaxing


// const yt = new Promise(resolve => {
//     setTimeout (() =>{
//         console.log("getting stuff from youtube");
//         resolve({video: [1,2,3,4,5,6]});
//     },2000);
// });


// const fb = new Promise(resolve => {
//     setTimeout (() =>{
//         console.log("getting stuff from fb");
//         resolve({user : "Name"});
//     },5000);
// });

// Promise.all([yt,fb])
// .then(result => console.log(result));


//------------------------------------------------------------------------------



// loginUser("ed","bubmba")
// .then(user => getUserVideos(user.email))
// .then(videos => videoDetails(videos[0]))
// .then(detail => console.log(detail))


// console.log("Finish");

// sync 
async function displayUser(){
    try{
        const loggedUser = await loginUser('ed', 12345)
        const videos = await getUserVideos(loggedUser.userEmail);
        const detail = await videoDetails(videos[0]);
        console.log(detail)
        
    }
    catch(err){
        console.log('There is an error')
    }
   
}

displayUser();







