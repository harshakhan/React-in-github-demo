// Speed up the development time or process
// how are code is supossed to behave

// TOD
// test driven development
// start to write test cases first. then write your code
// enforce a habit to start writing test cases


// ----------------------------------------------


// // test (description, function )

// function test( description, fn){
//     console.log(description);

//     fn()
// }

// function expect(recieved){


//     function toBe(actual){
//         if(recieved === actual){
//             console.log('test passed')
            
//         }
//         else{
//             console.log('test failed')
//             console.log("recieved :", recieved)
//             console.log('expected:', actual)
            
//         }

//     }

//     return { toBe}
// }

// test( "add 1 and 2, sum should be 3", () =>{
//     expect(1+1).toBe(3)

// })


// // add 1 and 2, sum should be 3
// // test failed
// // recieved : 2
// // expected: 3


// ---------------------------------------------------------------


function test( description, fn){
    console.log(description);

    fn()
}

function expect(recieved){


    function toBe(expected){
        if(recieved === expected){
            console.log('test passed')
            
        }
        else{
            console.log('test failed')
            console.log("recieved :", recieved)
            console.log('expected:', expected)
            
        }

    }

    return { toBe}
}

// test( "add 1 and 2, sum should be 3", () =>{
//     expect(1+1).toBe(3)

// })


const sum = (a,b) => a+b;
const absDiff = (a,b) => Math.abs(a-b);

// 7-3 =4
// 3-7 =4

test ("sum(5,3) should be 8", ()=>{
    expect( sum(5,3)).toBe(8)
})


test ("abs(3-7) should be 4", ()=>{
    expect( absDiff(3,7)).toBe(4)
})



