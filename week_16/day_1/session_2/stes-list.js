// let mySet = new Set();
// mySet.add(1)
// console.log(mySet)

// //Set { 1 }

//---------------------------------------------------------------------------

// let mySet = new Set();
// mySet.add(1)
// mySet.add(2)
// mySet.add(1)
// console.log(mySet)

// //Set { 1, 2 }

// // So here we can see that it will pass a unique array


//---------------------------------------------------------

// let mySet = new Set();
// mySet.add(1)
// mySet.add(2)
// mySet.add(1)
// mySet.add([1])
// mySet.add([1])
// console.log(mySet)


// //Set { 1, 2, [ 1 ], [ 1 ] }      its checking the shallow check and the instance of an empty array is difference is not equal



//----------------------------------------------------------------------------

// let mySet = new Set();
// mySet.add(1)
// mySet.add(2)
// mySet.add(1)
// mySet.add([1])
// mySet.add([1])


// var b =[2]
// mySet.add(b)
// mySet.add(b)
// console.log(mySet)


// //Set { 1, 2, [ 1 ], [ 1 ], [ 2 ] }   it will add once not twice

//---------------------------------------------------------------

// // So if we want to delete once

// let mySet = new Set();
// mySet.add(1)
// mySet.add(2)
// mySet.add(1)
// mySet.add([1])
// mySet.add([1])


// var b =[2]
// mySet.add(b)
// console.log(mySet.has(b))
// mySet.add(b)

// //delete 1
// mySet.delete(1)
// console.log(mySet)

// console.log(mySet.has(1))
// console.log(mySet.has(10))


// // true
// // Set { 2, [ 1 ], [ 1 ], [ 2 ] }    as we can see one is being is removed
// // false
// // false



//-------------------------------------------------------

// // To check the total no:of height


// let mySet = new Set();
// mySet.add(1)
// mySet.add(2)
// mySet.add(1)
// mySet.add([1])
// mySet.add([1])


// var b =[2]
// mySet.add(b)
// console.log(mySet.has(b))
// mySet.add(b)

// //delete 1
// mySet.delete(1)
// console.log(mySet)

// console.log(mySet.has(1))
// console.log(mySet.has(10))

// console.log(mySet.size)


// // true
// // Set { 2, [ 1 ], [ 1 ], [ 2 ] }
// // false
// // false
// // 4       as we can see hereits returning the total number of sets is just like the length


//------------------------------------------------------------------

// let arr = [1,2,3,4,5,6,7]
// let mySet = new Set(arr)

// mySet.clear()  

// console.log(mySet)  
// // it wil clear the sets
// // Set {}

// // console.log(mySet)

// // Set { 1, 2, 3, 4, 5, 6, 7 }


//-------------------------------------------------------

// Iterating through the set using key of

// let arr = [1,2,3,4,5,6,7]
// let mySet = new Set(arr)

// for(let key of mySet){
//     console.log(key)


// }



// // 1
// // 2
// // 3
// // 4
// // 5
// // 6
// // 7


//---------------------------------------------------------------

// let arr = [1,2,3,4,5,6,7]
// let mySet = new Set(arr)

// for(let key of mySet){
//     console.log(key)
//     // here we will get in a interation
// }
// for(let key  in arr){
//     console.log(key)
//     // here we will ger the outpt
// }

//-------------------------------------------------------------------

// let arr = [1,2,3,4,5,2,1]
// let mySet = new Set(arr)
// // console.log(mySet)


// // // iterator
// // //entries

// let iter = mySet.entries()
// console.log('itetating', iter)    //Itetating [Set Iterator] { 1, 2, 3, 4, 5, 6, 7 }

// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())


//-------------------------------------------------

// let arr =[1,2,3,4,5,6,70,50,60,80]

// let set = new Set(arr)
// console.log([...set])

//----------------------------------------------

// // generator fun


// function* generator(){
//     yield 1;
//     yield 2;
//     yield 3;
// }
// const gen = generator()
// console.log(gen)


// // Object [Generator] {}

//---------------------------------------

function* generator(){
    yield 1;
    // yield pauses the function within generator

    yield 2;
      // yield pauses the function within generator

    yield 3;
      // yield pauses the function within generator

    return 100
}
const gen = generator()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())



// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 100, done: true }

//-------------------------------------------------------------------------------























