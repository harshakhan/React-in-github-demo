// var arr = new Array(5).fill(5)

// arr.forEach(function(item,index){
//     console.log(index)
// })
// console.log(arr)

//forEach method is used iterate very array

//-------------------------------------------------n-


function Person(name,age,energy){   // creating constructor
    this.name = name  // storing the data in this.name and so
    this.age = age
    this.energy = energy
    this.eat = function(value){
        console.log(this.name,'is eating')
        this.energy +=value
        console.log('new energy is', this.energy)
    }
}

var haren = new Person('haren',23,50)

console.log(haren)

haren.eat(10)

console.log(haren)


//point
// we can see that the we can store data with the varibale
//but in the main function we are getting function


//-----------------------------------------------------------------------------


//Inheritance
// now using  the prototype key it will now help to reuse the same function.

// function Person(name,age,energy){   // creating constructor
//     this.name = name  // storing the data in this.name and so
//     this.age = age
//     this.energy = energy
    
// }


// Person.prototype.eat = function(value){   //
//     console.log(this.name,'is eating')
//     this.energy +=value
//     console.log('new energy is', this.energy)
// }

// var haren = new Person('haren',23,50)

// console.log(haren)

// haren.eat(10)

// console.log(haren)


// the difference is that the eat property which was there before is no more seen now.
// So, there is a method to call the eat data , So it generally used when we just need the data without intraption of other data.


//------------------------------------------------------------------------------------

//In contest of rutik question this example


// function Person(name,age,energy){   
//     this.name = name  
//     this.age = age
//     this.energy = energy
    
// }


// Person.prototype.eat = function(value){
//     console.log(this.name,'is eating')
//     this.energy +=value
//     console.log('new energy is', this.energy)
// }

// function Coder(name,age,energyvar string = 'abcd'

// console.log(string.length)
// console.log(string.toString()) // converting it into string
// console.log(string.toUpperCase()) ,language){  // creating new function with a constructor
//     this.name = name;
//     this.age = age;
//     this.energy = energy;
//     this.language = language;

// }

// var haren = new Person('haren',23,50)

// var paven = new Coder('paven',25,30,'javascript')

// console.log(paven)



// here  we are getting only the coder data person data is not being invoked


//--------------------------------------------------------------------------------------------------------
// here we are able to call Person function as reference and able to pass name , age, energy there and it will creted all the keys for us

// function Person(name,age,energy){   
//     this.name = name  
//     this.age = age
//     this.energy = energy
    
// }


// Person.prototype.eat = function(value){
//     console.log(this.name,'is eating')
//     this.energy +=value
//     console.log('new energy is', this.energy)
// }

// function Coder(name,age,energy,language){  // 
//     Person.call(this,name,age,energy) // here we are using the calling function to do that to invoked the function
//     this.language = language;

// }

// var haren = new Person('haren',23,50)

// var paven = new Coder('paven',25,30,'javascript')

// console.log(paven)



// so here we are not able to invoke the paven.eat as it will show an error 
// As because we are only invoking the Person function
//So to overcome that we will use another prototype which will be shown below.

//-------------------------------------------------------------------------------------------------------

// function Person(name,age,energy){   
//     this.name = name  
//     this.age = age
//     this.energy = energy
    
// }


// Person.prototype.eat = function(value){
//     console.log(this.name,'is eating')
//     this.energy +=value
//     console.log('new energy is', this.energy)
// }

// function Coder(name,age,energy,language){  // 
//     Person.call(this,name,age,energy) // here we are using the calling function to do that to invoked the function
//     this.language = language;

// }

// Coder.prototype = Object.create(Person.prototype)  // (Object.create) its kind of using the inheritance
//                                                   // so now Coder.prototype inherits the property of the person.protype

// var haren = new Person('haren',23,50)

// var paven = new Coder('paven',25,30,'javascript')

// console.log(paven)

// paven.eat(40)

// using inheritance property we are able to pass Person.prototype to the Coder.protiotype.
// Now the Coder.prototype inherits the property of the person prototype.
// So here  mainly to constructor want to invoke the each other propety so above process can be used

//-----------------------------------------------------------------------------------

//Different example by albert

//So insted of arr we can use string also
// So here we will showing premitive data type which we also called a special type of object

// var str = new String('hello')
// var bool = new Boolean(true)    //wraper object


// console.log(str)  
// console.log(str.valueOf())
// console.log(typeof str)
// console.log(bool)

// So here we will be getting the [String: 'hello'] this type of output which we also called a wrapper classes.
// So to handle the premitive data type we use valueOf() to get the exact the data

//----------------------------------------------------------------------------
// So here bascially to show how the function are like object in js
// so here it return the length of the object which is 4 here


// var string = 'abcd'

// console.log(string.length)
// console.log(string.toString()) // converting it into string
// console.log(string.toUpperCase()) // converting it into the uppencase

//--------------------------------------------------------------------------------

// Now we will be understanding the higher order function

// var arr=[]

// // console.log(arr.length)
// // arr[0]= 5
// // console.log(arr)
// // arr[1] = 7
// // console.log(arr)
// // console.log(arr.length)

// arr[arr.length] = 5  // so here we can do arr[arr.length] insted of arr[0]
// arr[arr.length]= 10




// console.log(arr)


// So here we are givin an value and we are pushing it 

//----------------------------------------------------
// to create our own array
// 2nd part of the video

// function MyArray(){
//     this.length = 0

// }

// var arr = new MyArray()
// console.log(arr)

// here new arr is being created

//----------------------------------------------------------------------------------
// defineProperty = it takes the object as a reference (we need to give the property as the length)
// this = is a reference
//'length' = giving the property as the length
// for...in iterates over all enumerable properties of an object

// function MyArray(){
//     Object.defineProperty(this,'length',{
//         value:0,    //defining the property
//         writable: true, //the value of length can change so I am writing the writable
//         enumerable: false, // shown ar access in your for n key in loops
//     })

// }
// var arr = new MyArray()
// console.log(arr)
// console.log(arr.length)

//-----------------------------------------------------------------------------
// here push property returns the particular length of an array.



// function MyArray(){
//     Object.defineProperty(this,'length',{
//         value:0,   
//         writable: true, 
//         enumerable: false, // shown ar access in your for n key in loops
//     })

// }

// MyArray.prototype.push = function(elem){
//     this[this.length] = elem
//     this.length++
//     return this.length
// }
// var arr = new MyArray()
// console.log(arr.push(5)) //here we are pushing the element 5
// console.log(arr)


// So here we will be pushing the the value 5 with the 0 as a key('0':5)


// ---------------------------------------------------------------------------------

//MAP

//map = it takes a callback, it a function that accept the function as a argument
// so, map function should take an callback or another function
//map should take two three avalues (item itself, index,arr) 

// this.hasOwnProperty = its bascially checks does it belong to the object it self in that level or it is inheritated value
// ponit 1 for above : all the properties which are enumerable property such as (push,map,pull) will come into the for key object so to avoid that we must use this.hasOwnProperty
// so, this.hasOwnProperty accept the particular string which matching the key



// function MyArray(){
//     Object.defineProperty(this,'length',{
//         value:0,   
//         writable: true, 
//         enumerable: false, // shown ar access in your for n key in loops
//     })

// }

// MyArray.prototype.push = function(elem){
//     this[this.length] = elem
//     this.length++
//     return this.length
// }

// MyArray.prototype.map = function(callback){
//     var result = new MyArray()   // its creating a new array of my choice
//     for(var key in this){
//         if(this.hasOwnProperty(key)){
//             callback(this[key],key,this)  // we should pass the value back to key when we will use map
//         }

//     }
// }

// var arr = new MyArray()
// arr.push(5) //here we are pushing the element 5
// arr.push(10)
// arr.push(15)
// arr.push(52)

// arr.map(function(item, index,arr){  //acording to the map property
//     console.log(item,index,arr)  // we will get the required output
// })


//--------------------------------------------------------------------------------------

//But we are not doing anything with the callback function

// function MyArray(){
//     Object.defineProperty(this,'length',{
//         value:0,   
//         writable: true, 
//         enumerable: false, // shown ar access in your for n key in loops
//     })

// }

// MyArray.prototype.push = function(elem){
//     this[this.length] = elem
//     this.length++
//     return this.length
// }

// MyArray.prototype.map = function(callback){
//     var result = new MyArray()   // its creating a new array of my choice
//     for(var key in this){
//         if(this.hasOwnProperty(key)){
//             result.push(callback(this[key],key,this))  // we should pass the value back to key when we will use map
//         }

//     }
//     return result
// }

// var arr = new MyArray()
// arr.push(5) //here we are pushing the element 5
// arr.push(10)
// arr.push(15)
// arr.push(52)

// var arr2 = arr.map(function(item, index,arr){  //acording to the map property
//     return item*item
// })
// console.log(arr2)

// Now we can see that the new array is being passed back



//----------------------------------------------------------------------------------------

// Chaning



// function MyArray(){
//     Object.defineProperty(this,'length',{
//         value:0,   
//         writable: true, 
//         enumerable: false, // shown ar access in your for n key in loops
//     })

// }

// MyArray.prototype.push = function(elem){
//     this[this.length] = elem
//     this.length++
//     return this.length
// }

// MyArray.prototype.map = function(callback){
//     var result = new MyArray()   // its creating a new array of my choice
//     for(var key in this){
//         if(this.hasOwnProperty(key)){
//             result.push(callback(this[key],key,this))  // we should pass the value back to key when we will use map
//         }

//     }
//     return result
// }

// var arr = new MyArray()
// arr.push(5) //here we are pushing the element 5
// arr.push(10)
// arr.push(15)
// arr.push(52)

// var arr2 = arr.map(function(item, index,arr){  //acording to the map property
//     return item*item
// }).map(function(item){  // Chaning the first function and the secound function
//     return item + 100
// })
// console.log(arr2)

//--------------------------------------------------------------------------------------------------------------------------------
